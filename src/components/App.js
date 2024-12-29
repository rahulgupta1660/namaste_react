import { Outlet } from "react-router";
import Header from "./Header";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <>
      <Header />
      <div className="container p-5">
        <Outlet />
      </div>
      {/* <Restaurant /> */}
    </>
  );
};

export default App;
