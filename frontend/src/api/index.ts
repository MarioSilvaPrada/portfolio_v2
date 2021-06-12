import axios from 'axios';

export const PRODUCTION = false;

export default axios.create({
  baseURL: PRODUCTION ? process.env.API_URL : process.env.API_STAGING_URL,
});
