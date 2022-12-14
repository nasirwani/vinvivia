import './Content.css'
import { DownOutlined } from '@ant-design/icons'
import { SearchOutlined } from '@ant-design/icons'
const Content = () => {
    return (
        <div className="content-container">
            <div className="event-details">
                <div className="event-name">
                    <h4>Manage Events</h4>
                </div>

                <div className='event-type-wrapper'>
                    <button className='btn1' >All Events</button>
                    <button className='btn2' >Active Events</button>
                    <button className='btn3' >Past Events</button>
                    <input class="nosubmit" type="search" placeholder="Search..." />

                    <select className='sort-method' icon={DownOutlined}>
                        <option>Sort by : Most Recent</option>
                        <option>Sort by : Oldest First</option>
                    </select>
                </div>

            </div>
        </div>
    )
}
export default Content;

