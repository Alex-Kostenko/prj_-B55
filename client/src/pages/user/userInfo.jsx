import React from 'react';
import Form from "react-jsonschema-form";
import {
  Button
} from 'antd';

import schema from "../formSchema/schema";
import widgets from "../formSchema/widgets";
import uiSchema from "../formSchema/uiSchema";

import './style.css';


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

  const formData = {
    'name': 'User Name',
    'gender': 1,
    'dateOfBirth': {'mouth': 1, 'year': '1995'},
    'country': "ukr",
    'checkboxs': { 1: true },
    'radio': 2,
    'aboutMe': 'about user about user about user'
  };

  return (
    <Form
      schema={schema}
      widgets={widgets}
      formData={formData}
      uiSchema={uiSchema}
      ErrorList={ErrorListTemplate}
      onChange={log("changed")}
      onSubmit={log("submitted")}
      onError={log("errors")}
    >
      <div className="form__nav">
        <Button type="primary" htmlType="submit" className="m15">
          Update profile
        </Button>
        <Button type="danger" htmlType="button" className="m15">
          Cansel
        </Button>
      </div>
    </Form>
  );
};

export default UserInfo;
