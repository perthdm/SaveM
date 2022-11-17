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
  let series = [
    {
      name: "Deposit",
      data: [30, 35, 35, 30, 40, 40, 30, 25, 25, 30, 30, 35]
    },
    {
      name: "Withdraw",
      data: [20, 20, 15, 25, 20, 15, 15, 20, 20, 20, 15, 30]
    }
  ];

  let options = {
    chart: {
      height: "auto",
      width: "100%",
      type: "area",
      toolbar: {
        show: true
      },
      zoom: {
        enabled: false
      }
    },
    colors: ["#39f", "#DC143C"],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    xaxis: {
      type: "category",
      width: "100%",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: true
      },
      labels: {
        show: true,
        rotate: -45,
        rotateAlways: false,
        hideOverlappingLabels: true,
        showDuplicates: false,
        trim: false,
        minHeight: undefined,
        maxHeight: 120,
        style: {
          colors: "#6c757d",
          fontSize: "12px",
          fontFamily: "Comic Sans MS",
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label"
        },
        offsetX: 0,
        offsetY: 0,
        format: undefined,
        formatter: undefined,
        datetimeUTC: false
      }
    },
    tooltip: {
      x: {
        format: "dd/MM/yyyy"
      }
    },
    grid: {
      show: false
    },
    yaxis: {
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: true
      },
      labels: {
        show: true,
        style: {
          colors: "#6c757d",
          fontSize: "12px",
          fontWeight: 400
        }
      }
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      floating: false,
      fontSize: "14px",
      fontFamily: "Comic Sans MS",
      fontWeight: 400,
      inverseOrder: false,
      offsetX: 0,
      offsetY: 0,
      labels: {
        colors: "#6c757d"
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5
      },
      markers: {
        width: 30,
        height: 15,
        strokeWidth: 0.5,
        strokeColor: ["#289efa", "#DC143C"],
        fillColors: ["#b8d6fc", "#f0a8b4"],
        radius: 0,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
      }
    }
  };

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

      <Card className="mt-4" style={{ borderRadius: "20px" }}>
        <Card.Body style={{ minHeight: "400px" }}>
          <Chart
            options={options}
            series={series}
            type="area"
            height={450}
            style={{ marginTop: "10px", color: "black" }}
          />
        </Card.Body>
      </Card>
      {/* </Container> */}
    </div>
  );
};

export default UIDashboard;
