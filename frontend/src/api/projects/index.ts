import api from 'api';

const getProjects = async () => {
  try {
    const res = await api.get('portfolio/projects');
    return res;
  } catch (err) {
    return err.response;
  }
};

export { getProjects };
