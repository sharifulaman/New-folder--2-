import { deflateSync } from "node:zlib";
import { mkdirSync, writeFileSync } from "node:fs";

// Minimal, dependency-free PNG encoder: builds an RGBA raster in memory and
// writes IHDR/IDAT/IEND chunks by hand. Good enough for flat vector-style
// app icons (a ring mark) without pulling in sharp/canvas.

const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type, "ascii");
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function encodePNG(width, height, rgba) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // bit depth
  ihdrData[9] = 6; // color type RGBA
  ihdrData[10] = 0;
  ihdrData[11] = 0;
  ihdrData[12] = 0;

  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0; // filter type: none
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, y * stride + stride);
  }
  const idatData = deflateSync(raw, { level: 9 });

  return Buffer.concat([
    signature,
    chunk("IHDR", ihdrData),
    chunk("IDAT", idatData),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

function setPixel(rgba, width, x, y, r, g, b, a) {
  if (x < 0 || y < 0 || x >= width) return;
  const i = (y * width + x) * 4;
  rgba[i] = r;
  rgba[i + 1] = g;
  rgba[i + 2] = b;
  rgba[i + 3] = a;
}

// Anti-aliased ring mark: black background, white ring, small offset gap
// matching the loader's radial-progress motif.
function drawIconRaster({ size, bg, fg, ringRatio = 0.62, strokeRatio = 0.1, padding = 0 }) {
  const rgba = Buffer.alloc(size * size * 4);
  const cx = size / 2;
  const cy = size / 2;
  const usable = size - padding * 2;
  const radius = (usable / 2) * ringRatio;
  const strokeWidth = usable * strokeRatio;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const [br, bgc, bb] = bg;
      setPixel(rgba, size, x, y, br, bgc, bb, 255);
    }
  }

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = x + 0.5 - cx;
      const dy = y + 0.5 - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const ringDist = Math.abs(dist - radius);
      const edge = strokeWidth / 2;
      if (ringDist <= edge) {
        const [fr, fgc, fb] = fg;
        const aa = Math.min(1, (edge - ringDist) / 1.2 + 0.5);
        const i = (y * size + x) * 4;
        const blend = (channelBg, channelFg) => Math.round(channelBg * (1 - aa) + channelFg * aa);
        rgba[i] = blend(rgba[i], fr);
        rgba[i + 1] = blend(rgba[i + 1], fgc);
        rgba[i + 2] = blend(rgba[i + 2], fb);
      }
    }
  }

  return rgba;
}

function write(path, size, opts) {
  const rgba = drawIconRaster({ size, ...opts });
  writeFileSync(path, encodePNG(size, size, rgba));
  console.log("wrote", path, `${size}x${size}`);
}

const dir = "public/icons";
mkdirSync(dir, { recursive: true });

const BLACK = [5, 5, 5];
const WHITE = [245, 245, 245];

write(`${dir}/icon-192.png`, 192, { bg: BLACK, fg: WHITE, ringRatio: 0.62, strokeRatio: 0.16, padding: 0 });
write(`${dir}/icon-512.png`, 512, { bg: BLACK, fg: WHITE, ringRatio: 0.62, strokeRatio: 0.16, padding: 0 });
// Maskable icons need content inside a smaller safe zone since platforms crop to shape.
write(`${dir}/icon-maskable-512.png`, 512, { bg: BLACK, fg: WHITE, ringRatio: 0.42, strokeRatio: 0.14, padding: 0 });
write(`${dir}/apple-touch-icon.png`, 180, { bg: BLACK, fg: WHITE, ringRatio: 0.58, strokeRatio: 0.16, padding: 0 });

console.log("Done.");
