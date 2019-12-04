import React, { useState, useEffect } from 'react';
import Form from "react-jsonschema-form";
import {
  Button
} from 'antd';
import axios from "axios";

import schema from "../formSchema/schema";
import widgets from "../formSchema/widgets";
import uiSchema from "../formSchema/uiSchema";
import updateUser from "../../utils/updataUser";

import './style.css';
const authAxios = axios.create();


function ErrorListTemplate(props) {
  const { errors } = props;
  console.log(errors);

  return (
    <ul>
      {errors.map(error => (
        <li key={error.stack}>
          {error.stack}
        </li>
      ))}
    </ul>
  );
}

const log = (type) => console.log.bind(console, type);

const UserInfo = () => {

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

  const onHandleSubmit = event => {
    setPendisg(true)
    const values = event.formData;

    authAxios.post(`http://localhost:9000/auth/editUser/${user._id}`, values)
      .then((response) => {
        return response;
      }).then((body) => {
        setUser(body.data)
        updateUser(body.data)
        setTimeout(() => {
          setPendisg(false)
        }, 500);
      });
  };

  // const formData = {
  //   'username': 'User Name',
  //   'gender': 1,
  //   'dateOfBirth': {'mouth': 1, 'year': '1995'},
  //   'country': "ukr",
  //   'checkboxs': { 1: true },
  //   'radio': 2,
  //   'aboutMe': 'about user about user about user'
  // };
  const formData = user;

  return (
    window.sessionStorage.getItem('currentUser') || window.localStorage.getItem('currentUser') ?
      <Form
        schema={schema}
        widgets={widgets}
        formData={formData}
        uiSchema={uiSchema}
        ErrorList={ErrorListTemplate}
        onChange={log("changed")}
        onSubmit={onHandleSubmit}
        onError={log("errors")}
        className="userForm"
      >
        {console.log(user)}
        <div className="form__nav">
          <Button 
            type="primary"
            icon="edit"
            htmlType="submit"
            className="m15"
            loading={pending}
          >
            Update profile
          </Button>
          <Button type="danger" htmlType="button" className="m15">
            Cansel
          </Button>
        </div>
      </Form>
      : <div> not authorized </div>
  );
};

export default UserInfo;
