import sharp from "sharp";
import { mkdirSync } from "node:fs";

const SRC = "src/assets/icon.png";
const OUT_DIR = "public/icons";
const BG = { r: 5, g: 5, b: 5, alpha: 1 }; // matches --bg

mkdirSync(OUT_DIR, { recursive: true });

async function flattenResize(size, { padPercent = 0 } = {}) {
  const content = Math.round(size * (1 - padPercent));
  const resized = await sharp(SRC).resize(content, content, { fit: "contain" }).toBuffer();

  if (padPercent === 0) {
    return sharp(resized).flatten({ background: BG }).png().toBuffer();
  }

  return sharp({
    create: { width: size, height: size, channels: 4, background: BG },
  })
    .composite([{ input: resized, gravity: "center" }])
    .flatten({ background: BG })
    .png()
    .toBuffer();
}

async function main() {
  const jobs = [
    ["icon-192.png", 192, {}],
    ["icon-512.png", 512, {}],
    ["icon-maskable-512.png", 512, { padPercent: 0.2 }],
    ["apple-touch-icon.png", 180, {}],
  ];

  for (const [name, size, opts] of jobs) {
    const buffer = await flattenResize(size, opts);
    await sharp(buffer).toFile(`${OUT_DIR}/${name}`);
    console.log("wrote", `${OUT_DIR}/${name}`, `${size}x${size}`);
  }

  const favicon = await flattenResize(48, {});
  await sharp(favicon).toFile("public/favicon.png");
  console.log("wrote public/favicon.png 48x48");
}

main();
