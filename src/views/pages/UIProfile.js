import React from "react";
import { Row, Col, Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Label } from "../compoenents/FloatingInput.styled";

const UIProfile = () => {
  return (
    <div style={{ padding: " 10px" }}>
      <div>
        <h2 className="my-4">Profile</h2>
        <Row>
          <Col lg={12}>
            <Avatar
              className="mx-4 my-3"
              shape="square"
              size={64}
              icon={<UserOutlined />}
            />
          </Col>
          <Col
            lg={12}
            style={{
              textAlign: "right",
              marginTop: "32px",
              marginBottom: "32px",
            }}
          >
            <Button className="mx-2" type="primary">
              Text Button
            </Button>
            <Button className="mx-2" type="primary">
              Text Button
            </Button>
            <Button className="mx-2" type="primary">
              Text Button
            </Button>
          </Col>
        </Row>

        <Row>
          <Col lg={8}>
            <p>Hello</p> <p>Hello</p> <p>Hello</p>
          </Col>
          <Col lg={8}>
            <p>Hello</p> <p>Hello</p> <p>Hello</p>
          </Col>
          <Col lg={8}>
            <p>Hello</p> <p>Hello</p> <p>Hello</p>
          </Col>
        </Row>

        <Row>
          <Col lg={6}></Col>
          <Col lg={6}></Col>
          <Col lg={6}></Col>
          <Col lg={6}></Col>
        </Row>
      </div>
    </div>
  );
};

export default UIProfile;
