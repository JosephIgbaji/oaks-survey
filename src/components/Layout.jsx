import React from "react";
import logo from "../assets/images/oaks-logo.png";
import persons from "../assets/images/four-persons.jpg";
const Layout = ({ children }) => {
  return (
    <div className="flex w-full lg:flex-row flex-col gap-5 lg:h-screen lg:overflow-x-hidden items-center">
      <div className="w-full md:p-24 p-10">
        <div className="mb-16">
          <img src={logo} alt="" width={150} />
        </div>
        {children}
      </div>
      <div className="relative w-full flex items-center justify-center lg:justify-start">
        <div className="lg:absolute z-40 max-w-[500px] lg:max-w-[500px] h-[500px] rounded-lg overflow-hidden lg:-mr-10">
          <img
            className="h-[400px] object-cover lg:h-[600px]"
            src={persons}
            alt=""
            width={600}
          />
        </div>
        <div className="lg:h-screen hidden lg:block w-[100%] ml-20  bg-[#F9B806]"></div>
      </div>
    </div>
  );
};

export default Layout;
