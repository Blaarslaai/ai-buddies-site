import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter as ReactRouter, Routes, Route } from "react-router";
import AboutUs from "./pages/aboutUs.tsx";
import ContactUs from "./pages/contactUs.tsx";
import Jobs from "./pages/jobs.tsx";
import ThankYou from "./pages/thankYou.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactRouter>
      <Routes>
        <Route index element={<App />} path="/" />
        <Route element={<AboutUs />} path="/aboutUs" />
        <Route element={<ContactUs />} path="/contactUs" />
        <Route element={<Jobs />} path="/jobs" />
        <Route element={<ThankYou />} path="/thankYou" />
      </Routes>
    </ReactRouter>
  </StrictMode>
);
