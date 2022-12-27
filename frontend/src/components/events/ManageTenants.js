// import { Header } from "antd/es/layout/layout";
import Header from "../Header";
import { Table } from "antd";
import { EditTwoTone, SettingTwoTone, DeleteTwoTone } from "@ant-design/icons";
import "./ManageTenants.css";
const ManageTenants = () => {
  const edit = <EditTwoTone style={{ cursor: "pointer", padding: "2px" }} />;
  const setting = (
    <SettingTwoTone style={{ cursor: "pointer", padding: "2px" }} />
  );
  const del = <DeleteTwoTone style={{ cursor: "pointer", padding: "2px" }} />;

  const dataSource = [
    {
      key: "1",
      organizatioName: "Vinivia AG",
      ownerName: "Johnie",
      phone: "1234567890",
      status: "Active",
      action: [edit, setting, del],
    },
    {
      key: "2",
      organizatioName: "Vinivia AG",
      ownerName: "Johnie",
      phone: "1234567890",
      status: "Active",
      action: [edit, setting, del],
    },
  ];

  const columns = [
    {
      title: "ORGANIZATION NAME",
      dataIndex: "organizatioName",
      key: "organizatioName",
    },
    {
      title: "OWNER'S NAME",
      dataIndex: "ownerName",
      key: "ownerName",
    },
    {
      title: "PHONE",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "ACTION",
      dataIndex: "action",
      key: "action",
    },
  ];

  return (
    <>
      <Header />

      <div className="manage-tenants">
        <div className="content">
          <div className="tenant-name">
            <h4>Manage Tenants</h4>
          </div>

          <div className="search-inp">
            <input
              class="search-container"
              type="search"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="table">
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </>
  );
};
export default ManageTenants;
