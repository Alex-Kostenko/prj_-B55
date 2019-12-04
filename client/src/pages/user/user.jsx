import React, { useState, useEffect } from 'react'
import { Input, Icon, Button } from 'antd';
import axios from "axios";

// import './style.css';
const authAxios = axios.create();

const RenderUser = () => {

  const [user, setUser] = useState(0);
  const [pending, setPendisg] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem('currentUser')) {
      setUser(JSON.parse(window.sessionStorage.getItem('currentUser')).data);
    } else {
      JSON.parse(window.localStorage.getItem('currentUser')) &&
        setUser(JSON.parse(window.localStorage.getItem('currentUser')).data);
    }
  }, []);

  const handleChange = (event) => {
    let editsUsers = { ...user };

    const target = event.target;
    const nameInput = target.name;
    const valueInput = target.value;

    switch (nameInput) {
      case 'username':
        editsUsers[nameInput] = valueInput;
        break;

      case 'email':
        editsUsers[nameInput] = valueInput;
        break;

      case 'age':
        editsUsers[nameInput] = valueInput;
        break;

      default:
        break;
    }

    setUser(editsUsers);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    authAxios.post(`http://localhost:9000/auth/editUser/${user._id}`, user)
      .then(function (response) {
        setPendisg(true)
        return response;
      }).then(function (body) {
        // alert(body);
        setPendisg(false)
      });
  }

  return (
    window.sessionStorage.getItem('currentUser') || window.localStorage.getItem('currentUser') ?
      <div>
        <label>
          User name:
          <Input
            placeholder="username"
            value={user.username}
            prefix={
              <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
            }
            onChange={handleChange}
            name="username"
          />
        </label>

        <label>
          Email:
          <Input
            placeholder="email"
            value={user.email}
            prefix={
              <Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />
            }
            onChange={handleChange}
            name="email"
          />
        </label>

        <label>
          Age:
          <Input
            placeholder="age"
            value={user.age}
            prefix={
              <Icon type="number" style={{ color: 'rgba(0,0,0,.25)' }} />
            }
            onChange={handleChange}
            name="age"
          />
        </label>

        <Button
          type="primary"
          icon="edit"
          loading={pending}
          onClick={handleSubmit}
        >
          Update profile
      </Button>

      </div>
      :
      <div> not authorized </div>
  );
};

export default RenderUser;
