import axios from "axios";
const authAxios = axios.create();

const updataUser = (user) => {
  const checkStorage = window.localStorage.getItem('currentUser');
  // const obj = {};
  // obj["data"] = user;
  
  console.log('set new user', user);
  if (!!checkStorage) {
    window.localStorage.setItem('currentUser', JSON.stringify(user));
  } else {
    window.sessionStorage.setItem('currentUser', JSON.stringify(user));
  }
  // console.log('obj', obj);
  
  authAxios.post(`http://localhost:9000/auth/editUser/${user._id}`, user)
    .then((res) => {
      console.log("server res", res);
    })
}

export default updataUser;
