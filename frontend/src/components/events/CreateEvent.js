import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import M from 'materialize-css'
import {
  Drawer,
  Form,
  Input,
  Button,
  Select,
  Checkbox,
  Switch,
  DatePicker,
  Upload,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
const { Option } = Select;
const { RangePicker } = DatePicker;

const CreateEvent = ({ show, handleOnClose ,resetFields}) => {
  const [form] = Form.useForm();

  const onFinish = async(values) => {
    let result = await fetch('/createevent',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            eventName:values.eventName,eventFormat:values.eventFormat, tenantName:values.tenantName,startDate:values.startDate,endDate:values.endDate,
            eventtype:values.eventType,

        
    })

})
result=await result.json()
if(result.error){
// M.toast({html:result.error})
}
else{
    // M.toast({html:result.message,classes:'green'})
    alert('event created successfully')
    handleOnClose()
    form.resetFields()
}
// console.log(result)
  }
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };



  return (
    <Drawer
      width={512}
      title="Create Event"
      open={show}
      onClose={handleOnClose}
      maskClosable={true}
    >
      <Form
        form={form}
        name="basic"
        layout={"vertical"}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Event Name"
          name="eventName"
          rules={[{ required: true, message: "Please input your Event Name!" }]}
        >
          <Input placeholder="What is the name of your event?" />
        </Form.Item>

        <Form.Item
          name="eventFormat"
          label="Event Format"
          rules={[{ required: true }]}
        >
          <Select placeholder="Please Select (optional)" allowClear={true}>
            <Option value="Online">Online</Option>
            <Option value="Hybrid">Hybrid</Option>
            <Option value="In-Person">In-Person</Option>
          </Select>
        </Form.Item>

        <Form.Item name="eventType" label="Event Type">
          <Select placeholder="Please Select (optional)" allowClear>

            <Option value="Festival">Festival</Option>
            <Option value="Auction">Auction</Option>
            <Option value="Food and Drink">Food and Drink</Option>
            <Option value="Fashion and Beauty">Fashion and Beauty</Option>
            <Option value="Music">Music</Option>
            <Option value="School Festivalher">School Festival</Option>
            <Option value="Healty and Wellness">Healty and Wellness</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Event Element (optional)" name="eventElement">
          <Checkbox>Registration / Ticketing</Checkbox>
        </Form.Item>

        <Form.Item
          label="Featured"
          valuePropName="checked"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Switch />
        </Form.Item>
        <Form.Item label="Is Public" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Polls based on shareholding" valuePropName="checked">
          <Switch />
        </Form.Item>

        <Form.Item
          name="eventZone"
          label="Event Zone"
        //   rules={[{ required: true }]}
        >
          <Select placeholder="(GMT+05:00) Asia/Ashgabat" allowClear>
            <Option value="male">(GMT+05:00) Asia/Ashgabat</Option>
            <Option value="female">(GMT+05:00) Asia/Ashkhabat</Option>
            <Option value="other">(GMT+07:00) Asia/Bangkok</Option>
            <Option value="other">(GMT+04:00) Asia/Dubai</Option>
            <Option value="other">(GMT+05:30) Asia/culkatta</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Event Duration"
          name="eventDuration"
        //   rules={[{ required: true }]}
        >
          <RangePicker />
        </Form.Item>

        <Form.Item
          name="tenantName"
          label="Tenant Name"
          rules={[{ required: true }]}
        >
          <Select placeholder="please select (required)" allowClear>
            <Option value="Vinivia AG">Vinivia AG</Option>
            <Option value="Music and Maountain">Music and Maountain</Option>
            <Option value="Hollywood">Hollywood</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Slug"
          name="slug"
        //   rules={[{ required: true, message: "required" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Event Logo"
          name="eventLogo"
        //   rules={[{ required: true, message: "required" }]}
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Drop/Upload Files Here</div>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item label="Banner Image">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Drop/Upload Files Here..</div>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item shouldUpdate>
          {() => (
            <Fragment>
              <Button
                style={{ width: "25%", padding: "5px" }}
                type="primary"
                // onClick={hanldeSubmit}
                htmlType="submit"
                // disabled={!form.isFieldsTouched(true) || form.getFieldsError().filter(({ errors }) => errors.length).length}
              >
                Create
              </Button>

              <Button
                style={{ width: "25%", padding: "5px", marginLeft: "10px" }}
                htmlType="button"
                onClick={() => form.resetFields()}
              >
                {" "}
                Cancel
              </Button>
            </Fragment>
          )}
        </Form.Item>
      </Form>
    </Drawer>
  );
};

Drawer.propTypes = {
  show: PropTypes.bool.isRequired,
  handleOnClose: PropTypes.func.isRequired,
  handleOnFinish: PropTypes.func.isRequired,
  handleOnFinishFailed: PropTypes.func.isRequired,
};
export default CreateEvent;
