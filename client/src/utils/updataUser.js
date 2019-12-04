const updateUser = (value) => {
  const checkStorage = window.localStorage.getItem('currentUser');
  const obj = {};
  obj["data"] = value;

  if (!!checkStorage) {
    window.localStorage.setItem('currentUser', JSON.stringify(obj));
  } else {
    window.sessionStorage.setItem('currentUser', JSON.stringify(obj));
  }
}

export default updateUser;
