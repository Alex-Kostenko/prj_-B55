import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from "axios";
import { Redirect, withRouter } from "react-router"; 
import {
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
  message
} from 'antd';

import './style.css';

const { Title } = Typography;
const authAxios = axios.create();


const LoginForm = ( props ) => {
  console.log('props', props);
  
  const { getFieldDecorator, validateFields } = props.form;
  const { t } = useTranslation();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    authAxios.get('http://localhost:9000/auth/logout')
    localStorage.setItem('lang', JSON.stringify('Ukr'));
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
    if (props.history.location.search === '?registered' ) {
      message.success(t('successReg'));
    }
  }, [props.history.location.search]);

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
              window.localStorage.setItem('currentUser', JSON.stringify(body.data));
            } else {
              window.sessionStorage.setItem('currentUser', JSON.stringify(body.data));
            }
            setRedirect(true)
          });
      }
    });
  };

  return (
    redirect ? <Redirect to='/editUser' /> :
    <>
      <Title>{t('login.title')} </Title>
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

          <div>
            Don't check this box if you're at a public or shared computer
          </div>

          <Button type="primary" htmlType="submit" className="login-form__button">
            Login
          </Button>

        </Form.Item>

        <Form.Item>
          Not a member? <a href="/registration">Join Free Now!</a>
        </Form.Item>

      </Form>
    </>
  );
};

const WrappedLoginForm = Form.create({ name: 'login_form' })(LoginForm);

export default withRouter(WrappedLoginForm);
