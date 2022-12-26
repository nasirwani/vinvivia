// import './App.css';
import Card from "./components/Card";
import Content from "./components/Content";
import Header from "./components/Header";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Button, Pagination } from "antd";
import CreateEvent from "./components/events/CreateEvent";

import axios from "axios";

function App() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [myevents, setMyevents] = useState([]);

  useEffect(() => {
    axios.get(`/myallevents`).then(({ data }) => {
      setMyevents(data);
    });
  }, []);
  return (
    <div className="App">
      <Header />
      {/* <Content /> */}
      <Card myevents={myevents} />
      {/* <Pagination defaultCurrent={1} total={50} /> */}

      <div style={{ width: "100%" }}>

        <div style={{ width: '100%' }}>


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

              display: "block",

              display: 'block'

            }}
          ></Button>
        </div>

        <CreateEvent
          show={showDrawer}
          handleOnClose={() => setShowDrawer(false)}
        />
      </div>
    </div>
  );
}

export default App;
