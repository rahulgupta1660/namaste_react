const app = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { className: "heading", key: "12" },
      "Hello World"
    ),
    React.createElement("h1", { className: "heading", key: "14" }, "Hello my"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement(
      "h1",
      { className: "heading", key: "12" },
      "Hello World"
    ),
    React.createElement("h1", { className: "heading", key: "14" }, "Hello my"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(app);
