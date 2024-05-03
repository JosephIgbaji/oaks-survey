import { Navigate } from "react-router-dom";
import { logoutUser } from "../redux/slices/user.slice";
import { showAlert } from "./alert";

export const handleLogout = (dispatch) => {
  dispatch(logoutUser());
  showAlert("", "You've ended your current session", "success");
  // <Navigate to={"/"} />;
  window.location.href = "/";
};
