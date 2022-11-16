import React from "react";
import { Row, Col } from "antd";

const UIManagement = () => {
  return (
    <Row>
      <Col span={24}>
        <Row>
          <Col span={24} style={{backgroundColor:"blue"}}>
            <div>Read Records</div>
          </Col>
          <Col span={12} style={{backgroundColor:"green"}}>
            <div>Search</div>
          </Col>
          <Col span={12} style={{backgroundColor:"yellow"}}>
            <div>crud</div>
          </Col>
          <Col span={12}>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default UIManagement;
