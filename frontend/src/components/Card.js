import "./Card.css";
import { useState, useEffect } from "react";
import Moment from "react-moment";
import moment from "moment";
import { DownOutlined } from "@ant-design/icons";
import "./Content.css";
import Content from "./Content";
// import 'moment-timezone';

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  //getall events
  const getEvents = async () => {
    const users = await fetch("/myevents", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const usersData = await users.json();
    // console.log(usersData)
    setData(usersData.reverse());
  };


  //searchEvents
  const searchEvents = async (e) => {
    const key=e.target.value;
    console.log(key)
    if(key){
        const users = await fetch(`/search/${key}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const usersData = await users.json();
          setData(usersData.reverse());

    }else{
        getEvents()
    }
   
  }

  const Publish= (e) => {
    console.log(e.target.value)
  }
  return (
    <>
      <div className="content-container">
        <div className="event-details">
          <div className="event-name">
            <h4>Manage Events</h4>
          </div>

          <div className="event-type-wrapper">
            <button className="btn1">All Events</button>
            <button className="btn2">Active Events</button>
            <button className="btn3">Past Events</button>
            <input
              class="nosubmit"
              type="search"
              placeholder="Search..."
              onChange={searchEvents}
            />

            <select className="sort-method" icon={DownOutlined}>
              <option value="Most-Recent">Sort by : Most Recent</option>
              <option value="Oldest-First">Sort by : Oldest First</option>
            </select>
          </div>
        </div>
      </div>
      <div className="card-container">
        {/* <Content/> */}
        {data.map((data, index) => {
          return (
            <div class="card1" key={index}>
              <div class="card-image">
                <img src={data.eventLogo} alt="" />
                <button type="click" onClick={Publish}>
                    
                    {data.ispublic?'PUBLISHED':'UNPUBLISHED'}</button>
              </div>
              <div class="card-content">
                <p>{data.tenantName}</p>
                <h4>{data.eventName}</h4>

                <div className="card-date">
                  <div className="start">
                    <div>Start</div>

                    <div>
                      {moment(data.startDate).format("MM DD YYYY, h:mm:ss")}
                    </div>
                  </div>

                  <div className="end">
                    <div>End</div>
                    <div>
                      {moment(data.endDate).format("MM DD YYYY, h:mm:ss")}
                    </div>
                  </div>
                </div>

                <div className="info">
                  <div className="details">
                    <div className="name">Created by</div>
                    <div className="email">admin@vinivia.com</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* <div class="card2">
                <div class="card-image">
                    <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" alt='' />
                    <button type='click'>PUBLISHD</button>
                </div>
                <div class="card-content">
                    <p>Hollywood</p>
                    <h4>Health & Wellness</h4>

                    <div className='card-date'>
                        <div className='start'>
                            <div>Start</div>
                            <div>Mon, 19 Sep 2022 16:57</div>
                        </div>
                        <div className='end'>
                            <div>End</div>
                            <div>Fri, 30 Sep 2022 16:57</div>
                        </div>
                    </div>
                </div>

                <div className='info'>
                    <div className='details'>
                        <div className='name'>Created by</div>
                        <div className='email'>admin@vinivia.com</div>
                    </div>
                </div>
            </div> */}

        {/* <div class="card3">
                <div class="card-image">
                    <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" alt='' />
                    <button type='click'>PUBLISHD</button>
                    <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons"></i></a>
                </div>
                <div class="card-content">
                    <p>Music and mountain</p>
                    <h4>Orchestra</h4>

                    <div className='card-date'>
                        <div className='start'>
                            <div>Start</div>
                            <div>Mon, 19 Sep 2022 16:57</div>
                        </div>

                        <div className='end'>
                            <div>End</div>
                            <div>Fri, 30 Sep 2022 16:57</div>
                        </div>
                    </div>
                </div>
                <div className='info'>
                    <div className='details'>
                        <div className='name'>Created by</div>
                        <div className='email'>admin@vinivia.com</div>
                    </div>
                </div>
            </div> */}
      </div>
    </>
  );
};
export default Card;
