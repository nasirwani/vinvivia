import "./Card.css";
import { useState, useEffect } from "react";
import { usePagination } from "../hooks/usePagination";
import { fetchEvents } from "../utils/api";
import { isPast } from "date-fns";



// import Moment from "react-moment";
import moment from "moment";
import  {DownOutlined,DeleteOutlined } from "@ant-design/icons";
import "./Content.css";
import Content from "./Content";
import { Button } from "antd";

const Card = ({ myevents }) => {
  const { results, nextPage, prevPage, canNextPage, canPrevPage, setSort } =
    usePagination(3, fetchEvents);
  const [data, setData] = useState([]);
  const [sortval, setSortVAl] = useState({ sort: "createdAt", order: "" });
  const [active, setActive] = useState(0);
  // const {sort,order}=sortPage()

  //searchEvents
  const searchEvents = async (e) => {
    const key = e.target.value;
    console.log(key.length);
    if (key) {
      const users = await fetch(`/search/${key}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const usersData = await users.json();
      console.log(usersData.length);
      setData(usersData);
    } else {
      // on search not updating state, if no key is present empty data array update with results
      // array
      data.length = 0;
      setData(results);
      fetchEvents();
    }
  };

  const Publish = (e) => {
    console.log(e.target.value);
  };

  //take values from dropdown and update state which will be updateding payload
  const onSelectChange = ({ currentTarget: input }) => {
    setSortVAl({ sort: sortval.sort, order: input.value });
    setSort(sortval);
  };

  // console.log(pastevents);

//delete eventS API
const deleteEvent=async(id) => {
  let result = await fetch(`http://localhost:5001/deletedevent/${id}`, {
      method: "Delete",
    });
    result =await result.json();
    if(result){
      fetchEvents();
    }
    // const newData=data.filter((item)=>{
    //   return item._id !==result._id
    // })
    // setData(newData);
}

  return (
    <>
      <div className="content-container">
        <div className="event-details">
          <div className="event-name">
            <h4>Manage Events</h4>
          </div>

          <div className="event-type-wrapper">
            <button className="btn1">All Events {myevents.length}</button>
            <button className="btn2">Active Events {active}</button>
            <button className="btn3">Past Events</button>
            <input
              class="nosubmit"
              type="search"
              placeholder="Search..."
              onChange={searchEvents}
            />

            <select
              className="sort-method"
              icon={DownOutlined}
              onChange={onSelectChange}
            >
              <option value="desc">Sort by : Most Recent</option>
              <option value="asc">Sort by : Oldest First</option>
            </select>
          </div>
        </div>
      </div>
      <div className="card-container">
        {(() => {
          if (data.length > 0) {
            return data.map((data, index) => {
              return (
                <div class="card1" key={index}>
                  <div class="card-image">
                    <img src={data.eventLogo} alt="" />
                    <button type="click" onClick={Publish}>
                      {data.ispublic ? "PUBLISHED" : "UNPUBLISHED"}
                    </button>
                    <DeleteOutlined style={{float:'right'}}/>
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
            });
          } else {
            return results.map((data, index) => {
      
              return (
        
                <div class="card1" key={index}>
                  <div class="card-image">
                    <img src={data.eventLogo} alt="" />
                    <button type="click" onClick={Publish}>
                      {data.ispublic ? "PUBLISHED" : "UNPUBLISHED"}
                    </button>
                    <DeleteOutlined style={{float:'right'}} onClick={()=>deleteEvent(data._id)}/>
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
            });
          }
        })()}
        {/* <Content/> */}
      </div>
      <div className="btn">
        <div className="prev">
          <Button
            type="primary"
            onClick={prevPage}
            disabled={!canPrevPage()}
            className="prev"
          >
            Previous
          </Button>
        </div>
        <div className="next">
          <Button
            type="primary"
            onClick={nextPage}
            disabled={!canNextPage()}
            className="next"
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};
export default Card;
