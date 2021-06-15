import api from 'api';
import axios from 'axios';

const getProjects = async () => {
  try {
    console.log({ env: process.env.PROJECTS });
    const res = await api.get('api/projects/');
    return res;
  } catch (err) {
    return err.response;
  }
};

export { getProjects };
