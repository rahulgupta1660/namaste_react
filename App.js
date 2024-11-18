import React from "react";
import ReactDOM from "react-dom/client";

const Img = () => (
  <img
    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
    style={{ objectFit: "cover" }}
  />
);

const HeadingComponent = () => (
  <div className="container">
    <Img />
    <h1>Namaste React 🚀</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
