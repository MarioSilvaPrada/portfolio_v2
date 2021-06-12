import api from 'api';
import axios from 'axios';

const getProjects = async () => {
  try {
    const res = await api.get(process.env.PROJECTS);
    return res;
  } catch (err) {
    return err.response;
  }
};

export { getProjects };
