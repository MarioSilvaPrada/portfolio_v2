import api from 'api';

const getTalks = async () => {
  try {
    const res = await api.get('api/portfolio/talks');
    return res;
  } catch (err) {
    return err.response;
  }
};

export { getTalks };
