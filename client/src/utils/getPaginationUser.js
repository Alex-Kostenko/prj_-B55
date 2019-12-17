import axios from "axios";
const authAxios = axios.create();

const getPaginationUser = (startUser, count) => {
  return authAxios.get(`http://localhost:9000/auth/api/${startUser}/${count}`)
    .then((res) => {
      return res.data
    })
}

export default getPaginationUser;
