import './Header.css';
import { DownOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import { Button, select, option, Dropdown, Space } from 'antd';
import ManageTenants from './events/ManageTenants';
const Header = () => {

    const items = [
        {
            label: (
                <a  rel="noopener noreferrer" href="/manage-events">MANAGE EVENTS</a>
            ),
            key: '0',
        },
        {
            label: (
                <a rel="noopener noreferrer" href="/manage-tenants">MANAGE TENANTS</a>
            ),
            key: '1',

        },
        {
            label: (
                <a  rel="noopener noreferrer" href="/manage-roles">MANAGE ROLES</a>
            ),
            key: '2',
        },
        {
            label: (
                <a  rel="noopener noreferrer" href="https://www.aliyun.com">MANAGE USERS</a>
            ),
            key: '1',
        }

    ]


    return (
        <div className='header-container'>
            <div className='headercontent'>
                <div className='logo'>
                    <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODkuMTExIiBoZWlnaHQ9Ijk4IiB2aWV3Qm94PSIwIDAgODkuMTExIDk4Ij4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB4MT0iMC41IiB4Mj0iMC41IiB5Mj0iMSIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlNTZjNzYiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZDg1MjhlIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8ZyBpZD0iR3JvdXBfMTE4OCIgZGF0YS1uYW1lPSJHcm91cCAxMTg4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjc0LjM4OCAtNzYwLjgwNykiPgogICAgPGNpcmNsZSBpZD0iRWxsaXBzZV8xIiBkYXRhLW5hbWU9IkVsbGlwc2UgMSIgY3g9IjkuMjY3IiBjeT0iOS4yNjciIHI9IjkuMjY3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MDAuNzkxIDgwMC42MTYpIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudCkiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzEiIGRhdGEtbmFtZT0iUGF0aCAxIiBkPSJNNjkwLjI5LDg2My45M2wuMDM1LTYuOTgxYTcuOSw3LjksMCwwLDAtMy45MTctNi44NjNsLS4wMjMtLjAxNGE3LjksNy45LDAsMCwwLTExLjg4Nyw2Ljc4NWwtLjExLDIyLjE1M2ExNSwxNSwwLDAsMCwyMi40NCwxMy4xbDE5LjI0LTEwLjk4MWE3LjksNy45LDAsMCwwLC4wNjgtMTMuNjg3aDBhNy45LDcuOSwwLDAsMC03LjktLjA0bC02LjA2MywzLjQ2QTcuOTQyLDcuOTQyLDAsMCwxLDY5MC4yOSw4NjMuOTNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0zNS4zMDQpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50KSIvPgogICAgPHBhdGggaWQ9IlBhdGhfMiIgZGF0YS1uYW1lPSJQYXRoIDIiIGQ9Ik03MDIuNTc3LDc4NC4xMjRsNi4wODQsMy41NTNhNy44ODEsNy44ODEsMCwwLDAsNy44OC4wMzloMGE3Ljg4LDcuODgsMCwwLDAsLjA2OC0xMy42NDhsLTE5LjE2My0xMS4xOTFhMTUsMTUsMCwwLDAtMjIuNTY5LDEyLjg4MWwtLjExLDIyLjE5MWE3Ljg4LDcuODgsMCwwLDAsMTEuNzg2LDYuODgzbC4wNjgtLjAzOWE3Ljg3OSw3Ljg3OSwwLDAsMCwzLjk3NC02LjhsLjAzNS03LjA0NkE3Ljk0Miw3Ljk0MiwwLDAsMSw3MDIuNTc3LDc4NC4xMjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4xNTIgMCkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQpIi8+CiAgICA8cGF0aCBpZD0iUGF0aF8zIiBkYXRhLW5hbWU9IlBhdGggMyIgZD0iTTc1OC43NTUsODA4LjgxNGgwYTcuOTE1LDcuOTE1LDAsMCwwLDMuOTIzLDYuODczbDYsMy41YTcuOTQyLDcuOTQyLDAsMCwxLS4wNjgsMTMuNzU3bC02LjAzNCwzLjQ0NGE3LjkxNSw3LjkxNSwwLDAsMC0zLjk5MSw2LjgzNGgwYTcuOTE0LDcuOTE0LDAsMCwwLDExLjgzNyw2LjkxMmwxOS4yMjMtMTAuOTcxYTE1LDE1LDAsMCwwLC4xMjktMjUuOTg2TDc3MC42Niw4MDIuMDJBNy45MTMsNy45MTMsMCwwLDAsNzU4Ljc1NSw4MDguODE0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMzLjcxMSAtMTYuMDY0KSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudCkiLz4KICA8L2c+Cjwvc3ZnPgo='
                        alt='vinivia-logo' />
                </div>
                <div className='logoname'>
                    vinivia
                </div>


                <Dropdown className='dropdown'
                    menu={{
                        items,
                    }}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            <h5> MANAGE</h5>
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
                {/* <select className='dropdown'>
                    <option><h5 >MANAGE EVENTS</h5></option>
                    <option><h5 >MANAGE TENANTS</h5></option>
                    <option><h5 >MANAGE ROLES</h5></option>
                    <option><h5 >MANAGE USERS</h5></option>
    </select>*/}

                {/* <h5 className='dropdown'>MANAGE
                    <span className='dropdown-icon'>
                        <DownOutlined />
                    </span>
                </h5> */}

                {/* <span className='log-btn'>
                    <Link to='/login'>
                        <Button type='button' style={{
                            display: 'inline-block',
                            width: '7%',
                            marginLeft: '1%'
                        }}>Login</Button>
                    </Link>
                </span> */}

                {/* <span className='reg-btn'>
                    <Link to='/register'>
                        <Button type='button' 
                        style={{
                            display: 'inline-block',
                            width: '7%',
                            marginLeft: '1%'
                        }}>Register</Button>
                    </Link>
                </span> */}

                <div className='header-user-info'>
                    <div className='user-logo'>
                        <img src='https://cdn.vinivia.events/1662631109907grjMXl50M9.jpg' alt='user-logo' />
                    </div>
                    <div className='user-detail'>
                        <div className='user-name'>Johnnie Doe</div>
                        <div className='user-email'>admin@vinivia.com</div>
                    </div>
                </div>
            </div>

        </div >
    )
}
export default Header;




