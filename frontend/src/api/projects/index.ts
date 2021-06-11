import api from 'api';

const getProjects = async () => {
  console.log({ teste: process.env.PROJECTS });
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
