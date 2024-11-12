/*
 *
 *
 *<div id="parent">
 *    <div id="child">
 *        <h1></h1>
 *        <h1></h1>
 *    </div>
 *    <div id="child2">
 *        <h1></h1>
 *        <h1></h1>
 *    </div>
 *</div>
 *
 *
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is javascript"),
    React.createElement("h2", {}, "this is rahul"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "this is javascript"),
    React.createElement("h4", {}, "this is rahul"),
  ]),
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(parent);
