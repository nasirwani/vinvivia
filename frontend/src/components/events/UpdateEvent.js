import { Form, Input, Select, Option, Switch, Checkbox, DatePicker, Upload, Button } from "antd";
import moment from 'moment';
import { useState, useEffect, Fragment } from 'react'
import { PlusOutlined } from '@ant-design/icons'
const UpdateEvent = ({  handleOnClose}) => {

  // useEffect(()=>{
  //   getSingleEvent()
  // })
  // const getSingleEvent=async()=>{
  //  let result = await fetch(`/singleevent${params.id}`,{
  //   method: "GET",

  //  })
  //  result = await result.json()
  //  console.log(result)
  // }

  // /====================================================================
  const [form] = Form.useForm();

  const { Option } = Select;
  const { RangePicker } = DatePicker;

  const [image, setImage] = useState("");
  const [pub,setPublic ] = useState(false);

  const uploadImage = async (options) => {
    const { file } = options;
    console.log(file, "file");
    // image upload to cloudinary
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "insta_clone");
    data.append("cloud_name", "nasu");
    let resp = await fetch(
      "https://api.cloudinary.com/v1_1/nasu/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    resp = await resp.json();
    // console.log(resp);
    setImage(resp.url);
  };
  useEffect(() => {
    if (image) {
      onFinish();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image]);


  const onFinish = async (values) => {
    console.log(values,'values')
    //post request to submit database
    let result = await fetch("/updateevent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventName: values.eventName,
        eventFormat: values.eventFormat,
        tenantName: values.tenantName,
        startDate: values.startDate,
        endDate: values.endDate,
        eventtype: values.eventType,
        eventDuration: values.eventDuration,
        eventLogo: image,
        ispublic:pub
      }),
    });
    result = await result.json();
    console.log(result);
    if (result.error) {
    } else {
      handleOnClose();
      form.resetFields();
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div >
      <Form
        name="basic"
        initialValues={{ remember: true, }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        // layout="vertical"

        style={{
          width: '600px',
          margin: '0 auto',
          border: '2px solid #eee',
          padding: '20px'
        }}
      >

        <Form.Item
          label="Event Name"
          name="eventName"
          rules={[{ required: true, message: "Please input your Event Name!" }]}
          style={{
            marginTop: '20px'
          }}
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
        <Form.Item label="Is Public" valuePropName="checked"
        // value={pub} onClick={Bool}
        >
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
          <RangePicker
            disabledDate={(current) => {
              return (
                moment().add(-1, "days") >= current ||
                moment().add(1, "year") <= current
              );
            }}
          />
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
          <Upload
            showUploadList={true}
            listType="picture-card"
            //   onChange={handleUpload}
            accept="image/*"
            customRequest={uploadImage}
          // disabled={uploading}
          >
            {/* {image.length>=0?null:<Upload/>} */}
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
                style={{ width: "25%", padding: "5px", float: 'left', marginLeft: "100px" }}
                type="primary"
                htmlType="submit"
              >
                Update
              </Button>

              <Button
                style={{ width: "25%", padding: "5px", marginRight: "100px", marginBottom: '20px', float: 'right' }}
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
    </div>
  );
};
export default UpdateEvent;
