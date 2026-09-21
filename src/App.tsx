import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";

import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

const App = () => {
  return (
    <BrowserRouter>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollToLocation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

const ScrollToLocation = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      element?.scrollIntoView({ block: "start" });
      return;
    }

    window.scrollTo({ top: 0 });
    document.querySelector<HTMLElement>("#main")?.focus({ preventScroll: true });
  }, [hash, pathname]);

  return null;
};

export default App;
