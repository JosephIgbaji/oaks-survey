import { Routes, Route } from "react-router-dom";
import { Homepage, Signup, Signin, Dashboard } from "../pages";
import * as routes from "./routes";
import ProtectedRoute from "./../components/protected/ProtectedRoute";

const Config = () => {
  return (
    <>
      <Routes>
        <Route path={routes.INDEX} element={<Homepage />} />
        {/* <Route path={routes.SIGNUP} element={<Signup />} /> */}
        <Route path={routes.SIGNIN} element={<Signin />} />
        <Route
          path={routes.DASHBOARD}
          element={<ProtectedRoute component={Dashboard} />}
        />
        <Route path="*" element={<Homepage />} />
        {/* <Route path={routes.SUCCESS} element={<Success />} /> */}
      </Routes>
    </>
  );
};

export default Config;
