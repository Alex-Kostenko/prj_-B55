import axios from "axios";
const authAxios = axios.create();

const getAllUser = () => {
  return authAxios.get(`http://localhost:9000/auth/usersList`)
    .then((res) => {
       return res.data;
    })
}

export default getAllUser;
