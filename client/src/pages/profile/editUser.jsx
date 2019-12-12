import React, { useState, useEffect } from 'react';
import Form from "react-jsonschema-form";
import { Redirect } from "react-router";
import {
  Button,
  Modal
} from 'antd';
import axios from "axios";
import { useContext } from "react";
import { useTranslation } from 'react-i18next';

// import schema from "../formSchema/schema";
// import { Lang } from '../../components/context'
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
  const { t } = useTranslation();
  const [user, setUser] = useState(0);
  const [pending, setPendisg] = useState(false);


  const schema = {
    title: "",
    type: "object",
    required: ['username'],
    properties: {
      'formTitle': { //formTitle
        type: "string",
        title: t('title'),
        description: t('description'),
      },
      'subTitle-mainData': { //subtitle
        type: "string",
        title: "Основные сведения о вас:",
      },
      'username': { //input text
        type: "string",
        title: t('userName'),
      },
      'gender': { //select
        type: "number",
        title: t('gender'),
        enum: [0, 1],
        enumNames: ["female", "man"]
      },
      "dateOfBirth": {//input date
        type: "object",
        properties: {
          'titleDateOfBirth': {
            title: t('date'),
            type: "object",
          },
          'mouth': {
            type: "number",
          },
          'year': {
            type: "number",
          },
          'descriptioneDateOfBirth': {
            title: '',
            description: t('warning'),
            type: "object",
          },
        }
      },
      'country': {
        type: "string",
        title: t('country'),
        enum: ["ukr", "mol", "rus"],
        enumNames: ["Украина", "Молдова", "Россия"]
      },
      "checkboxs": {//input date
        title: "Отношения, которые вы ищете:",
        type: "object",
        properties: {
          '1': {
            title: 'Дружба',
            type: "boolean",
          },
          '2': {
            title: 'Романтические отношения / свидания',
            type: "boolean",
          },
          '3': {
            title: 'Друзья по переписке',
            type: "boolean",
          },
          '4': {
            title: 'Брак',
            type: "boolean",
          },
        }
      },
      "radio": { //radio
        type: "number",
        title: "Отношения, которые вы ищете:",
        enum: [0, 1, 2, 3],
        enumNames: [
          "Друзья по переписке",
          "Дружба",
          "Романтические отношения / свидания",
          "Брак"
        ],
      },
      "aboutMe": { //textArea
        type: "string",
        title: "Немного о себе:",
      },
      'subTitle-secondaryData': { //subtitle
        type: "string",
        title: "Ваша внешность",
      },
      'lang': { //subtitle
        type: "string",
        title: "Владения языками:",
      },
    }
  };

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
        setPendisg(false)
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
      : 
      <Redirect to='/' />
  );
};

export default UserInfo;
