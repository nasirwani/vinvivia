import React from "react";
import { Button, Form, Input } from "antd";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
    console.log("Success:", values);
    axios
      .post("/register", {
        name: values.name,
        email: values.email,
        password: values.password,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const tostify = () => {
    toast("Event Created Sucessful", { position: "top-right" });
  };
  return (
    <div
      className="register"
      style={{
        width: "500px",
        margin: "0 auto",
        padding: "10px",
        border: "2px solid #eee",
      }}
    >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
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
            Register
          </Button>
        </Form.Item>
      </Form>
      <ToastContainer />
    </div>
  );
};
export default Register;
