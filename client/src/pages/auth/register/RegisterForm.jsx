import React from 'react';
import { Form, Input, Button, Radio, Typography } from 'antd';
import axios from "axios";
import './style.css';

const authAxios = axios.create();
const { Title } = Typography;

const RegisterForm = ({ register, form }) => {
  const { getFieldDecorator, validateFields } = form;

  const onHandleSubmit = event => {
    event.preventDefault();

    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);

        authAxios.post('http://localhost:9000/auth/register', values)
          .then(function (response) {
            console.log(response);
          })
      }
    });

  };

  return (
    <>
      <Title> Register </Title>
      <Form onSubmit={onHandleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please enter username' }],
          })(
            <Input
              type="text"
              placeholder="Username"
            />
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please Enter Your Password' }],
          })(
            <Input
              type="password"
              placeholder="Password"
              minLength="9"
            />
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please Enter Your Email' }],
          })(
            <Input
              type="email"
              placeholder="email"
            />
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('age', {
            rules: [{ required: true, message: 'Please Enter Your Age' }],
          })(
            <Input
              type="number"
              placeholder="age"
            />
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('gender', {
            rules: [{ required: false, message: 'Please Enter Your Age' }],
          })(
            <Radio.Group buttonStyle="solid">
              <Radio.Button value={parseInt(1)}>Man</Radio.Button>
              <Radio.Button value={parseInt(0)}>Female</Radio.Button>
            </Radio.Group>
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('searchGender', {
            rules: [{ required: false, message: 'Please Enter Your Age' }],
          })(
            <Radio.Group buttonStyle="solid">
              <Radio.Button value="1">Man</Radio.Button>
              <Radio.Button value="0">Female</Radio.Button>
            </Radio.Group>,
          )}
        </Form.Item>

        <Form.Item>

          <Button type="primary" htmlType="submit" className="login-form__button">
            Register
          </Button>

        </Form.Item>

        <Form.Item>
          <a href="/">Login</a>
        </Form.Item>

      </Form>
    </>
  );
};

const WrappedRegisterPage = Form.create({ name: 'register_form' })(RegisterForm);

export default WrappedRegisterPage;
