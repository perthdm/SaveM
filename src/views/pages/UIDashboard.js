import React from "react";
import { Row, Col } from "antd";
import { Card } from "react-bootstrap";
import Chart from "react-apexcharts";

const ApChart = () => {
  return (
    <Chart
      options={{
        chart: {
          id: "basic-bar"
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "70%"
              //   background: "#293450"
            }
          }
        },
        labels: ["Deposit"],
        dataLabels: {
          name: {
            offsetY: -10,
            color: "#fff",
            fontSize: "13px"
          },
          value: {
            color: "#fff",
            fontSize: "30px",
            show: true
          }
        },
        stroke: {
          lineCap: "round"
        },
        colors: ["#289efa"]
        // fill: {
        //   type: "gradient",
        //   gradient: {
        //     shade: "dark",
        //     type: "vertical",
        //     gradientToColors: ["#05E996"],
        //     stops: [0, 100]
        //   }
        // }
      }}
      series={[80]}
      type="radialBar"
      height={180}
    />
  );
};

const UIDashboard = () => {
  return (
    <div style={{ padding: " 10px" }}>
      <div className="my-4">
        <h2>Dashboard</h2>
      </div>
      <Row gutter={[16, 0]}>
        <Col lg={6}>
          <Card style={{ minHeight: "130px", borderRadius: "20px" }}>
            <Card.Body>
              <Row>
                <Col lg={14}>
                  <h5 style={{ color: "#2a3450" }}>Total Application</h5>
                  <h2> 5,672</h2>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#289efa",
                      fontSize: "16px"
                    }}
                  >
                    14% Inc.
                  </span>
                </Col>
                <Col lg={10}>{<ApChart />}</Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card style={{ minHeight: "130px", borderRadius: "20px" }}>
            <Card.Body>
              <Row>
                <Col span={14}>
                  <h5 style={{ color: "#2a3450" }}>Total Application</h5>
                  <h2> 5,672</h2>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#289efa",
                      fontSize: "16px"
                    }}
                  >
                    14% Inc.
                  </span>
                </Col>
                <Col span={10}>{<ApChart />}</Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card style={{ minHeight: "130px", borderRadius: "20px" }}>
            <Card.Body>
              <Row>
                <Col span={14}>
                  <h5 style={{ color: "#2a3450" }}>Total Application</h5>
                  <h2> 5,672</h2>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#289efa",
                      fontSize: "16px"
                    }}
                  >
                    14% Inc.
                  </span>
                </Col>
                <Col span={10}>{<ApChart />}</Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card style={{ minHeight: "130px", borderRadius: "20px" }}>
            <Card.Body>
              <Row>
                <Col span={14}>
                  <h5 style={{ color: "#2a3450" }}>Total Application</h5>
                  <h2> 5,672</h2>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#289efa",
                      fontSize: "16px"
                    }}
                  >
                    14% Inc.
                  </span>
                </Col>
                <Col span={10}>{<ApChart />}</Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card
        className="mt-4"
        style={{ minHeight: "400px", borderRadius: "20px" }}
      >
        {/* <CardBody style={{ minHeight: "400px" }}>asdasd</CardBody> */}
      </Card>
      {/* </Container> */}
    </div>
  );
};

export default UIDashboard;
