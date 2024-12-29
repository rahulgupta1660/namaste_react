import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./src/components/Home";
import Contact from "./src/components/Contact";
import About from "./src/components/About";
import Error from "./src/components/Error";
import App from "./src/components/App";
import Restaurant from "./src/components/Restaurant";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="restaurants/:id" element={<Restaurant />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
