import { Routes, Route } from "react-router-dom";
import { Homepage, Signup } from "../pages";
import * as routes from "./routes";

const Config = () => {
  return (
    <>
      <Routes>
        <Route path={routes.INDEX} element={<Homepage />} />
        <Route path={routes.SIGNUP} element={<Signup />} />
        {/* <Route path={routes.SUCCESS} element={<Success />} /> */}
      </Routes>
    </>
  );
};

export default Config;
