import { Link } from "react-router-dom";
import logo from "../../assets/images/oaks-logo.png";
import bg from "../../assets/images/gb-vendor.jpg";
import Layout from "../../components/Layout";

function Homepage() {
  return (
    <div>
      <div className="flex w-full lg:flex-row flex-col justify-center items-center over md:p-32 p-10">
        <div className="w-full ">
          <div className="mb-16">
            <img src={logo} alt="" width={150} />
          </div>

          <div>
            <h2 className="md:text-4xl font-semibold mb-3 text-[#F9B806]">
              Welcome to the
            </h2>
            <h2 className="md:text-4xl font-semibold mb-3">
              Nigerian Global Vendor <br />
            </h2>
            <h2 className="md:text-4xl font-semibold mb-10">Directory</h2>
            <div className="">
              <Link
                to="/signup"
                className="w-full bg-gray-400 rounded-lg p-2 text-white mr-3"
              >
                Create an Account
              </Link>
              <Link
                to="/signin"
                className="w-full bg-gray-400 rounded-lg p-2 text-white mr-3"
              >
                Admin Portal
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="z-50 max-w-[500px] max-h-[600px] rounded-lg overflow-hidden -mr-10">
            <img src={bg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
