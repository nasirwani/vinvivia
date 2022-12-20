// import './App.css';

import Card from './components/Card';
import Content from './components/Content';
import Header from './components/Header';
import { PlusCircleOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { Button, Pagination, Popover } from 'antd'
import CreateEvent from './components/events/CreateEvent';
import PopUp from './components/events/PopUp';

const popup_content = (
  <PopUp
  // show={showPopUp}
  // handleOnClose={() => setShowPopUp(false)}
  />
)

function App() {
  // const [showDrawer, setShowDrawer] = useState(false)
  // const [showPopUp, setShowPopUp] = useState(false)
  // const [open, setOpen] = useState(false);

import Card from "./components/Card";
import Content from "./components/Content";
import Header from "./components/Header";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Button, Pagination } from "antd";
import CreateEvent from "./components/events/CreateEvent";
function App() {
  const [showDrawer, setShowDrawer] = useState(false);


  // const hide = () => {
  //   setOpen(false);
  // };
  // const handleOpenChange = (newOpen) => {
  //   setOpen(newOpen);
  // };
  return (
    <div className="App">
      <Header />
      {/* <Content /> */}
      <Card />
      {/* <Pagination defaultCurrent={1} total={50} /> */}



      <div className='popup'
        style={{
          float: 'right'
        }}>
        <Popover
          content={popup_content}
          title=""
          trigger="click"
          style={{ margin: '0 auto' }}
        // open={open}
        // onOpenChange={handleOpenChange}
        >
          <Button
            icon={<PlusCircleOutlined
              style={{ fontSize: 27, height: '5vh', width: '30px', borderRadius: '50%' }}
            // content={<a onClick={hide}>Close</a>}
            />}
          ></Button>
        </Popover>
      </div>

<div  style={{width:'100%'}}>
  
<Button
        type="primary"
        icon={<PlusCircleOutlined style={{ fontSize: 40 }} />}
        data-testid="add-contact-button"
        onClick={() => setShowDrawer(true)}
        style={{
          float: "right",
          fontSize: 20,
          marginBottom: "15px",
          // paddingBottom: "15px",
          width: "4%",
          height: "8.5vh",
          backgroundColor: "rgb(216, 50, 50)",
          borderRadius: "50%",
          display:'block'
        }}
      ></Button>
</div>

      <CreateEvent
        show={showDrawer}
        handleOnClose={() => setShowDrawer(false)}
      />

    </div>
  );
}

export default App;


