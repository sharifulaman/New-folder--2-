import { useCallback, useState } from "react";
import AppShell from "./components/layout/AppShell";
import PageLoader from "./components/loader/PageLoader";
import Home from "./pages/Home";
import PwaControls from "./components/pwa/PwaControls";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const finishLoading = useCallback(() => setIsLoading(false), []);

  return (
    <>
      {isLoading ? <PageLoader onFinish={finishLoading} /> : null}
      <AppShell>
        <Home />
      </AppShell>
      <PwaControls />
    </>
  );
}
