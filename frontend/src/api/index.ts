import axios from "axios";

export const PRODUCTION = true;
export const USE_HOME_SERVER = true;

const getUrl = () => {
  if (PRODUCTION) {
    console.log({ is: process.env.API_HOME_SERVER });
    if (USE_HOME_SERVER) return process.env.API_HOME_SERVER;
    return process.env.API_URL;
  }

  return process.env.API_STAGING_URL;
};

export default axios.create({
  baseURL: getUrl(),
});
