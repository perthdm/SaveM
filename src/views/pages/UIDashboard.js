import React from "react";
import { Row, Col } from "antd";
import { Card } from "react-bootstrap";

const UIDashboard = () => {
  return (
    <div style={{ padding: " 10px" }}>
      <div className="my-4">
        <h2>Dashboard</h2>
      </div>
      <Row gutter={[16, 0]}>
        <Col lg={6}>
          <Card style={{ minHeight: "110px" }}>
            <Card.Body>
              <h5>Total Application</h5>
              <div> 5,672</div>
              <div>14% Inc.</div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card style={{ minHeight: "110px" }}>
            <Card.Body>
              <h5>Total Application</h5>
              <div> 5,672</div>
              <div>14% Inc.</div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card style={{ minHeight: "110px" }}>
            <Card.Body>
              <h5>Total Application</h5>
              <div> 5,672</div>
              <div>14% Inc.</div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card style={{ minHeight: "110px" }}>
            <Card.Body>
              <h5>Total Application</h5>
              <div> 5,672</div>
              <div>14% Inc.</div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="mt-4" style={{ minHeight: "400px" }}>
        {/* <CardBody style={{ minHeight: "400px" }}>asdasd</CardBody> */}
        asdasd
      </Card>
      {/* </Container> */}
    </div>
  );
};

export default UIDashboard;
