import React from "react";
import Layout from "./../../components/Layout";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <Layout>
      <h2 className="md:text-6xl text-3xl font-semibold mb-10 text-[#F9B806]">
        Congratulations....
      </h2>
      <Link to="/" className="w-full bg-gray-400 rounded-lg p-2 text-white">
        Return
      </Link>
    </Layout>
  );
};

export default Success;
