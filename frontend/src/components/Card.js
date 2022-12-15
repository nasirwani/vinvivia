import './Card.css'
import { useState,useEffect } from 'react';
import Moment from 'react-moment';
import moment from "moment";
// import 'moment-timezone';


const Card = () => {
    
    const [data,setData] = useState([]);
    
    useEffect(()=>{
        (async () => {
            const users = await fetch('/myevents',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const usersData = await users.json();
            
            setData(usersData.reverse());

          })();
        
    },[])
    return (

        <div className='card-container'>
            {data.map((data,index) =>{
                return(
                    <div class="card1" key={index}>
                <div class="card-image">
                    <img src={data.eventLogo} alt='' />
                    <button type='click'>PUBLISHD</button>
                </div>
                <div class="card-content">
                    <p>{data.tenantName}</p>
                    <h4>{data.eventName}</h4>

                    <div className='card-date'>
                        <div className='start'>
                            <div>Start</div>
                            
                            <div>{moment(data.startDate).format("MM DD YYYY, h:mm:ss")}</div>
                           
                        </div>

                        <div className='end'>
                            <div>End</div>
                            <div>{moment(data.endDate).format("MM DD YYYY, h:mm:ss")}</div>
                        </div>
                    </div>

                    <div className='info'>
                        <div className='details'>
                            <div className='name'>Created by</div>
                            <div className='email'>admin@vinivia.com</div>
                        </div>
                    </div>
                </div>
            </div>

                )
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
    )
}
export default Card;
