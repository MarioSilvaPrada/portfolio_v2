import axios from 'axios';

export const PRODUCTION = true;

export default axios.create({
  baseURL: PRODUCTION
    ? 'https://portfolio-mariosilvaprada.herokuapp.com/'
    : process.env.API_STAGING_URL,
});
