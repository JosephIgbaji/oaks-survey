import { Link, Navigate } from "react-router-dom";
import logo from "../../assets/images/oaks-logo.png";
import bg from "../../assets/images/gb-vendor.jpg";
// import Layout from "../../components/Layout";
import { countries } from "./../../countries";
import { useState } from "react";
import loading from "../../assets/images/spinner.gif";
import axios from "axios";

function Homepage() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [user_type, setUser_type] = useState("");
  const [showLoading, setShowLoading] = useState(false);
  const [subscribe, setSubscribe] = useState(false);
  const [referalCode, setReferalCode] = useState("");

  async function handleFormSubmit(e) {
    setShowLoading(true);
    // console.log(firstname, lastname, email, country);
    e.preventDefault();
    if (!firstname || !lastname || !email || !country) {
      setShowLoading(false);
      alert("All fields are required");
    }
    const dt = await axios.post(
      "https://survey-dca570786965.herokuapp.com/api/v1/survey/create",
      {
        first_name: firstname,
        last_name: lastname,
        email,
        country,
        user_type,
        referred_by: referalCode,
      }
    );
    const ss = await dt;
    // console.log(ss.data);
    if (!ss.data.success) {
      alert("Kindly try again");
    }

    setShowLoading(false);
    setEmail("");
    setFirstname("");
    setCountry("");
    setLastname("");
    setReferalCode("");
    setSubscribe(true);
    // console.log("completed");
    // window.location.href = "/success";
  }
  return (
    <div>
      <div className="flex w-full lg:flex-row flex-col justify-center items-center over md:p-20 p-10">
        <div className="w-full ">
          <div className="mb-8">
            <img src={logo} alt="" width={130} />
          </div>

          <div>
            <h2 className="md:text-4xl font-semibold mb-3 text-[#F9B806]">
              Welcome to the
            </h2>
            <h2 className="md:text-4xl font-semibold mb-10">
              Nigerian Global Vendor Directory <br />
            </h2>
            {/* <div className="">
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
            </div> */}
            <div className="z-50 max-w-[400px] md:w-[500px] mt-10 md:h-[500px] rounded-lg overflow-hidden -mr-10">
              <img src={bg} alt="" />
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          {/* <div className="z-50 max-w-[500px] max-h-[600px] rounded-lg overflow-hidden -mr-10">
            <img src={bg} alt="" />
          </div> */}
          {subscribe ? (
            <div>
              <h2 className="md:text-3xl text-2xl font-semibold mb-10 text-[#F9B806]">
                Thank you for signing up we will get back to you shortly
              </h2>
              <Link
                to="/"
                className="w-full bg-gray-400 rounded-lg p-2 text-white"
                onClick={<Navigate to={"/"} />}
              >
                Return
              </Link>{" "}
            </div>
          ) : (
            <div className="w-full">
              {showLoading && (
                <div className="absolute bg-slate-200 bg-opacity-50 w-screen h-screen z-50 top-0 left-0">
                  <div className="w-full h-full flex items-center justify-center">
                    <img src={loading} alt="" width={200} />
                  </div>
                </div>
              )}
              <form onSubmit={handleFormSubmit}>
                <p className="mb-8">
                  ỌjáKasuwaAhịa is here for the Nigerian Diaspora.
                </p>
                <p className="mb-8">
                  Satisfy your Nigerian craving and Satisfy the cravings of
                  Nigerians abroad by signing up below for FREE:
                </p>
                <div className="w-full mb-5">
                  <input
                    className="w-full rounded-lg bg-gray-100 border-none p-2 "
                    type="text"
                    placeholder="First name"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
                <div className="w-full mb-5">
                  <input
                    className="w-full rounded-lg bg-gray-100 border-none p-2 "
                    type="text"
                    placeholder="Last name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
                <div className="w-full mb-5">
                  <input
                    className="w-full rounded-lg bg-gray-100 border-none p-2 "
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="w-full mb-5">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full rounded-lg bg-gray-100 border-none p-2 "
                  >
                    <option
                      className="w-full rounded-lg bg-gray-100 border-none "
                      defaultValue=""
                      disabled=""
                    >
                      Select Country
                    </option>
                    {countries.map((cn, id) => (
                      <option
                        key={id}
                        className="w-full rounded-lg bg-gray-100 border-none "
                        value={cn}
                      >
                        {cn}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full mb-5">
                  <select
                    value={user_type}
                    onChange={(e) => setUser_type(e.target.value)}
                    className="w-full rounded-lg bg-gray-100 border-none p-2 "
                  >
                    <option
                      className="w-full rounded-lg bg-gray-100 border-none "
                      defaultValue="User Type"
                      disabled={""}
                    >
                      Would you like to buy or sell
                    </option>

                    <option
                      className="w-full rounded-lg bg-gray-100 border-none "
                      value={"Customer"}
                    >
                      I want to buy
                    </option>
                    <option
                      className="w-full rounded-lg bg-gray-100 border-none "
                      value={"Vendor"}
                    >
                      I want to sell
                    </option>
                  </select>
                </div>
                <div className="w-full mb-5">
                  <input
                    className="w-full rounded-lg bg-gray-100 border-none p-2 "
                    type="text"
                    placeholder="Referral Code: (letters only)"
                    value={referalCode}
                    onChange={(e) => setReferalCode(e.target.value)}
                  />
                </div>
                <button
                  className={
                    email && country
                      ? "w-full bg-gray-600 rounded-lg p-2 text-white"
                      : "w-full bg-gray-400 rounded-lg p-2 text-white"
                  }
                >
                  Create an Account
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
