import React from "react";
import { Button, Form, Input, Drawer } from "antd";
import { ToastContainer, toast } from "react-toastify";
import PropTypes from "prop-types";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const tostify = () => {
    toast("Login Sucessful", { position: "top-center" });
  };

  const onFinish = async (values) => {
    let result = await fetch("/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    });
    result = await result.json();
    console.log(result);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      className="login"
      style={{
        width: "500px",
        margin: "0 auto",
        padding: "10px",
        border: "2px solid #eee",
      }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: "25%",
            }}
            onClick={tostify}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
      <ToastContainer />
    </div>
  );
};
Drawer.propTypes = {
  show: PropTypes.bool.isRequired,
  handleOnClose: PropTypes.func.isRequired,
  handleOnFinish: PropTypes.func.isRequired,
  handleOnFinishFailed: PropTypes.func.isRequired,
};
export default Login;
