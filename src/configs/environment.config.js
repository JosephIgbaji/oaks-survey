// enviroments
const environment = {
  production: {
    API_BASE_URL: "https://survey-dca570786965.herokuapp.com/api/v1",
  },
  development: {
    API_BASE_URL: "http://localhost:5000/api/v1/",
  },
};

const currentEnvironment = import.meta.env.VITE_REACT_APP_ENV || "development";
// const currentEnvironment = "production";

export default environment[currentEnvironment];
