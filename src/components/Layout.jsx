import React from "react";
import logo from "../assets/images/oaks-logo.png";
import persons from "../assets/images/african-freelancer.jpeg";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const token = useSelector((state) => state.user?.token);

  const isAuthenticated = token !== null && token !== undefined;

  if (isAuthenticated) {
    // console.log("go to admin ");
    window.location.href = "/admin/dashboard";
    // <Navigate to="/admin/dashboard" />;
  }

  return (
    <div className="bg-[url('/Background.png')] bg-cover flex w-full lg:flex-row flex-col gap-5 lg:h-screen lg:overflow-x-hidden items-center">
      <div className="w-full md:p-24 p-10">
        <Link to={"/"}>
          <div className="mb-16">
            <img src={logo} alt="" width={150} />
          </div>
        </Link>
        {children}
      </div>
      <div className="relative w-full flex items-center justify-center lg:justify-start">
        <div className="lg:absolute z-40 max-w-[600px] lg:max-w-[600px] h-[600px] rounded-lg overflow-hidden lg:-mr-10">
          <img
            className="object-cover lg:h-[600px]"
            src={persons}
            alt=""
            width={600}
          />
        </div>
        {/* <div className="lg:h-screen hidden lg:block w-[100%] ml-20  bg-[#117700]"></div> */}
      </div>
    </div>
  );
};

export default Layout;
