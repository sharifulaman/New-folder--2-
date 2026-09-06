import { useState } from "react";
import AppShell from "./components/layout/AppShell";
import PageLoader from "./components/loader/PageLoader";
import Home from "./pages/Home";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? <PageLoader onFinish={() => setIsLoading(false)} /> : null}
      <div inert={isLoading}>
        <AppShell>
          <Home />
        </AppShell>
      </div>
    </>
  );
}
