import React, { useEffect } from "react";
import Layout from "./../../components/Layout";
// import axios from "axios";
import loading from "../../assets/images/spinner.gif";
import { Link, useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";
import rtkMutation from "../../utils/rtkMutation";
import validate from "validate.js";
import { useLoginUserMutation } from "../../service/user.service";
import "./auth.css";
import { showAlert } from "../../static/alert";
import { DASHBOARD } from "../../routes/routes";

const constraints = {
  email: {
    presence: true,
  },
  password: {
    presence: true,
    length: {
      minimum: 6,
    },
  },
};

const Signin = () => {
  const [loginUser, { error, isSuccess }] = useLoginUserMutation({
    provideTag: ["User"],
  });

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    await rtkMutation(loginUser, values);
  };

  const validateForm = (values) => {
    return validate(values, constraints) || {};
  };

  //   const [password, setPassword] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [showLoading, setShowLoading] = useState(false);

  //   async function handleFormSubmit(e) {
  //     setShowLoading(true);
  //     // console.log(firstname, lastname, email, country);
  //     e.preventDefault();
  //     if (!email || !password) {
  //       setShowLoading(false);
  //       alert("All fields are required");
  //     }
  //     const dt = await axios.post(
  //       "https://survey-dca570786965.herokuapp.com/api/v1/survey/signin",
  //       {
  //         email,
  //         password,
  //       }
  //     );
  //     const ss = await dt;
  //     // console.log(ss.data);
  //     if (!ss.data.success) {
  //       alert("Invalied Details");
  //     }
  //     setShowLoading(false);
  //     setEmail("");
  //     setPassword("");
  //     window.location.href = "/admin/dashboard";
  //   }

  useEffect(() => {
    if (isSuccess) {
      showAlert("", "Login Successful!", "success");
      navigate(DASHBOARD);
    } else if (error) {
      showAlert("Oops", error.data.message || "An error occurred", "error");
    }
  }, [isSuccess, error, navigate]);

  return (
    <Layout>
      <div className="">
        {/* {showLoading && (
          <div className="absolute bg-slate-200 bg-opacity-50 w-screen h-screen z-50 top-0 left-0">
            <div className="w-full h-full flex items-center justify-center">
              <img src={loading} alt="" width={200} />
            </div>
          </div>
        )} */}
        <h2 className="md:text-4xl font-semibold mb-3 text-[#117700]">
          Welcome to the
        </h2>
        <h2 className="md:text-4xl font-semibold mb-3">
          Nigerian Global Vendor <br />
        </h2>
        <h2 className="md:text-4xl font-semibold mb-5">
          Directory Admin Portal
        </h2>
        <p className="mb-8">Login as Admin</p>

        {/* <form onSubmit={handleFormSubmit}>
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
            <input
              className="w-full rounded-lg bg-gray-100 border-none p-2 "
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className={
              email && password
                ? "w-full bg-gray-600 rounded-lg p-2 text-white"
                : "w-full bg-gray-400 rounded-lg p-2 text-white"
            }
          >
            Login
          </button>
        </form> */}
        <Form
          onSubmit={onSubmit}
          validate={validateForm}
          render={({ handleSubmit, form, submitting }) => (
            <form onSubmit={handleSubmit}>
              <div className="mb-7">
                <div className="relative w-full input-component empty sm:inline-block sm:pr-1">
                  <Field
                    name="email"
                    component="input"
                    type="text"
                    className="auth-input block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 hover:border-gray-500 focus:border-x-pink-400 peer"
                    placeholder=" "
                  />

                  <label
                    htmlFor="email"
                    className="auth-label absolute text-sm  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-1 peer-focus:px-1 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Email
                  </label>
                </div>
                {form.getState().submitFailed &&
                  form.getState().errors.email && (
                    <span className="text-red-600">
                      {form.getState().errors.email}
                    </span>
                  )}
              </div>

              <div className="mb-5">
                <div className="relative w-full input-component empty sm:inline-block sm:pr-1">
                  <Field
                    name="password"
                    component="input"
                    type="password"
                    className="auth-input block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 hover:border-gray-500 focus:border-x-purple-400 peer"
                    placeholder=" "
                  />

                  <label
                    htmlFor="password"
                    className="auth-label absolute text-sm  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-project-green px-1 peer-focus:px-1 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Password{" "}
                  </label>
                </div>
                {form.getState().submitFailed &&
                  form.getState().errors.password && (
                    <span className="text-red-600">
                      {form.getState().errors.password}
                    </span>
                  )}
              </div>

              <button className="auth-btn" type="submit">
                {submitting ? (
                  <>
                    <span className="loading-dots">
                      <span className="loading-dots-dot"></span>
                      <span className="loading-dots-dot"></span>
                      <span className="loading-dots-dot"></span>
                    </span>
                  </>
                ) : (
                  "Next"
                )}
              </button>
            </form>
          )}
        />
      </div>
    </Layout>
  );
};

export default Signin;
