import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Redirect } from "react-router"; 
import { Form, Input, Button, Checkbox } from 'antd';

import './style.css';

const authAxios = axios.create();

const LoginForm = ( props ) => {
  const { getFieldDecorator, validateFields } = props.form;

  useEffect(() => {
    authAxios.get('http://localhost:9000/auth/logout')
      .then(function (res) {
        console.log(res);
      })

    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
  }, []);

  const [redirect, setRedirect] = useState(false);

  const onHandleSubmit = event => {
    event.preventDefault();

    validateFields((err, values) => {
      if (!err) {
        authAxios.post('http://localhost:9000/auth/login', values)
          .then(function (response) {
            return response;
          }).then(function (body) {
            const remember = JSON.parse(body.config.data).remember

            if (remember) {
              window.localStorage.setItem('currentUser', JSON.stringify(body));
            } else {
              window.sessionStorage.setItem('currentUser', JSON.stringify(body));
            }
            setRedirect(true)
          });
      }
    });
  };

  return (
    redirect ? <Redirect to='/user' /> : 
    <Form onSubmit={onHandleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please enter your Email address' }],
        })(
          <Input
            placeholder="UserName"
          />,
        )}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please Enter Your Password' }],
        })(
          <Input
            type="password"
            placeholder="Password"
      />,
    )}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(<Checkbox>Keep me logged in</Checkbox>)}

        <a className="login-form-forgot" href="/">
          Forgot password
        </a>

        <Button type="primary" htmlType="submit" className="login-form__button">
          Login
        </Button>

      </Form.Item>

      <Form.Item>
        Not a member? <a href="/registration">Join Free Now!</a>
      </Form.Item>

    </Form>
  );
};

const WrappedLoginForm = Form.create({ name: 'login_form' })(LoginForm);

export default WrappedLoginForm;
