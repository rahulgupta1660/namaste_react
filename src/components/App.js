import { Outlet } from "react-router";
import Header from "./Header";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
