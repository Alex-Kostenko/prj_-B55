import React, { useState, useEffect } from 'react';
import Form from "react-jsonschema-form";
import {
  Button,
  Modal
} from 'antd';
import axios from "axios";

import schema from "../formSchema/schema";
import widgets from "../formSchema/widgets";
import uiSchema from "../formSchema/uiSchema";
import updataUser from "../../utils/updataUser";

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
    let currentUser;
    if (window.sessionStorage.getItem('currentUser')) {
      currentUser = JSON.parse(window.sessionStorage.getItem('currentUser'))
    } else {
      currentUser = JSON.parse(window.localStorage.getItem('currentUser'))
    }
    setUser(currentUser);
  }, []);

  const onHandleSubmit = event => {
    setPendisg(true)
    const values = event.formData;

    authAxios.post(`http://localhost:9000/auth/editUser/${user._id}`, values)
      .then((response) => {
        return response;
      }).then((body) => {
        console.log(body);

        setUser(body.data)
        updataUser(body.data)
        // setTimeout(() => {
          setPendisg(false)
        // }, 500);
      });
    success();
  };

  const success = () => {
    Modal.success({
      content: 'Profile updated',
    });
  }

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
