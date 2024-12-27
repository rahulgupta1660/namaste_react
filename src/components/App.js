import { Outlet } from "react-router";
import Header from "./Header";
import { useEffect, useState } from "react";

const App = () => {
  return (
    <>
      <Header />
      <div className="container p-5">
        <Outlet />
      </div>
    </>
  );
};

export default App;
