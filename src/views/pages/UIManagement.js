import React from "react";
import { Row, Col, Button, Input, Tag, Space, Table } from "antd";

const { Search } = Input;

const UIManagement = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary">Edit</Button>
          <Button type="primary" danger>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  return (
    <div style={{ padding: " 10px" }}>
      <Row>
        <Col lg={12} className="my-4">
          <Search
            placeholder="input search text"
            onSearch={() => {}}
            enterButton
            style={{ width: "300px" }}
          />
        </Col>
        <Col
          lg={12}
          style={{
            textAlign: "right",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <Button type="primary" className="my-1" style={{ width: "90px" }}>
            เพิ่ม
          </Button>
        </Col>
        <Col lg={24}>
          <Table columns={columns} dataSource={data} />
        </Col>
      </Row>
    </div>
  );
};

export default UIManagement;
