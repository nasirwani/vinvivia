import Header from "../Header";
import { Table, Button } from "antd";
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons'
import './ManageRoles.css'
const ManageRoles = () => {


    const edit = <EditTwoTone style={{ cursor: 'pointer', padding: '5px' }} />
    const del = <DeleteTwoTone style={{ cursor: 'pointer', padding: '5px' }} />

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    const dataSource = [
        {
            key: '1',
            role: 'Exhibitor Admin',
            description: 'Exhibitor Admin',
            createdDate: '01/01/1970',
            action: [edit,  del]
        },
        {
            key: '2',
            role: 'Event Admin',
            description: 'Event Admin',
            createdDate: '01/01/1970',
            action: [edit, del]
        },
        {
            key: '3',
            role: 'Editor',
            description: 'Editor',
            createdDate: '01/01/1970',
            action: [edit, del]
        },
        {
            key: '4',
            role: 'Member',
            description: 'Member',
            createdDate: '01/01/1970',
            action: [edit, del]
        },
        {
            key: '5',
            role: 'Lead Retriever',
            description: 'Lead Retriever',
            createdDate: '01/01/1970',
            action: [edit, del]
        },
        {
            key: '2',
            role: 'Guest',
            description: 'Guest',
            createdDate: '01/01/1971',
            action: [edit, del]
        },
    ];

    const columns = [
        {
            title: 'ROLE',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'DESCRIPTION',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'CREATED DATE',
            dataIndex: 'createdDate',
            key: 'createdDate',
            // sorter: {
            //     compare: (a, b) => a.createdDate - b.createdDate,
            //     multiple: 1,
            // },
            sorter: (a, b) => new Date(a) - new Date(b)
        },
        {
            title: 'ACTION',
            dataIndex: 'action',
            key: 'action',
        },
    ];
    return (
        <>
            <Header />
            <div className="manage-roles">
                <div className="roles-content">
                
                    <div className="roles-name">
                        <h4>Manage Roles</h4>
                    </div>

                    <div className="sys-event-search">
                        <p className="sys-role">System Role</p>
                        <Button className="event-btn" type='default' color="primary">Event Role</Button>
                        <div className='roles-search-inp'
                        >
                            <input class="roles-search-container" type="search" placeholder="Search..." />
                        </div>
                    </div>

                    <div className="table">
                        <Table dataSource={dataSource} columns={columns} onChange={onChange} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ManageRoles;