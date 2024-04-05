import React, { useState } from "react";
import Layout from "./../../components/Layout";
import { countries } from "./../../countries";
import axios from "axios";

const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  async function handleFormSubmit(e) {
    e.preventDefault();
    if (!firstname || !lastname || !email || !country) {
      alert("All fields are required");
    }
    const dt = await axios.post(
      "https://survey-dca570786965.herokuapp.com/api/v1/survey/create",
      {
        first_name: firstname,
        last_name: lastname,
        email,
        country,
      }
    );
    const ss = await dt;
    // console.log(ss.data);
    if (!ss.data.success) {
      alert("Kindly try again");
    }

    window.location.href = "/success";
  }
  return (
    <Layout>
      <div>
        <h2 className="md:text-4xl font-semibold mb-3 text-[#F9B806]">
          Welcome to the
        </h2>
        <h2 className="md:text-4xl font-semibold mb-3">
          Nigeriam Global Vendor <br />
        </h2>
        <h2 className="md:text-4xl font-semibold mb-5">Directory</h2>
        <p className="mb-8">Please complete the form beloew to sign up</p>

        <form onSubmit={handleFormSubmit}>
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
                Select country
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
          <button className="w-full bg-gray-400 rounded-lg p-2 text-white">
            Create an Account
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
