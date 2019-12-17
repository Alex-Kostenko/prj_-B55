import axios from "axios";
const authAxios = axios.create();

const getCountUser = () => {
  return authAxios.get(`http://localhost:9000/auth/api/countUsers`)
    .then((res) => {
      return res.data.count;
    })
}

export default getCountUser;
