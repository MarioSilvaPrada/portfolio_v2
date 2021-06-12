import api from 'api';
import axios from 'axios';

const getProjects = async () => {
  try {
    const res = await api.get(process.env.PROJECTS);
    console.log({ res });
    return res;
  } catch (err) {
    console.log({ err });

    return err.response;
  }
};

export { getProjects };
