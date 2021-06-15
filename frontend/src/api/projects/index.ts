import api from 'api';

const getProjects = async () => {
  try {
    const res = await api.get('api/projects/');
    return res;
  } catch (err) {
    return err.response;
  }
};

export { getProjects };
