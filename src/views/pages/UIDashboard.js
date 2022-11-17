import React, { useState, useEffect } from "react";
import { Row, Col, List, Avatar } from "antd";
import { Card } from "react-bootstrap";
import Chart from "react-apexcharts";
import VirtualList from "rc-virtual-list";
import { InfoCircleTwoTone } from "@ant-design/icons";

const fakeDataUrl =
  "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";
const ConstantHeight = 650;
const ApexChart = ({ colorLine, textLabel }) => {
  console.log(colorLine);
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
              size: "60%"
              // background: "#293450"
            }
          }
        },
        labels: [textLabel],
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
        colors: [colorLine]
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
  const [data, setData] = useState([]);

  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        console.log(body);
        setData(data.concat(body.results));
        // message.success(`${body.results.length} more items loaded!`);
      });
  };

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = (e) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      ConstantHeight
    ) {
      appendData();
    }
  };

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
          //   fontFamily: "Comic Sans MS",
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
      //   fontFamily: "Comic Sans MS",
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
      <Row gutter={[16, 0]} className="mt-4">
        <Col xl={18} md={24}>
          <Row gutter={[16, 16]}>
            <Col xl={8} lg={8} md={12} sm={24}>
              <Card style={{ minHeight: "130px", borderRadius: "20px" }}>
                <Card.Body>
                  <Row>
                    <Col xl={14} lg={24} sm={12}>
                      <h5 style={{ color: "#289efa" }}>SUMMARY</h5>
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
                    <Col xl={10} lg={24} sm={12}>
                      <ApexChart colorLine="#289efa" textLabel="Summary" />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            <Col xl={8} lg={8} md={12} sm={24}>
              <Card style={{ minHeight: "130px", borderRadius: "20px" }}>
                <Card.Body>
                  <Row>
                    <Col xl={14} lg={24} sm={12}>
                      <h5 style={{ color: "#ffc000" }}>INCOME</h5>
                      <h2> 5,672</h2>
                      <span
                        style={{
                          fontWeight: "bold",
                          color: "#ffc000",
                          fontSize: "16px"
                        }}
                      >
                        14% Inc.
                      </span>
                    </Col>
                    <Col xl={10} lg={24} md={12} sm={12}>
                      <ApexChart colorLine="#ffc000" textLabel="Imcome" />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            <Col xl={8} lg={8} md={12} sm={24}>
              <Card style={{ minHeight: "130px", borderRadius: "20px" }}>
                <Card.Body>
                  <Row>
                    <Col xl={14} lg={24} md={12} sm={12}>
                      <h5 style={{ color: "#ff7948" }}>EXPENSES</h5>
                      <h2> 5,672</h2>
                      <span
                        style={{
                          fontWeight: "bold",
                          color: "#ff7948",
                          fontSize: "16px"
                        }}
                      >
                        14% Inc.
                      </span>
                    </Col>
                    <Col xl={10} lg={24} md={12} sm={12}>
                      <ApexChart colorLine="#ff7948" textLabel="Expenses" />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={24} md={24}>
              <Card style={{ borderRadius: "20px" }}>
                <Card.Body style={{ minHeight: "510px" }}>
                  <Chart
                    options={options}
                    series={series}
                    type="area"
                    height={450}
                    style={{ marginTop: "10px", color: "black" }}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col xl={6} md={24}>
          <Card style={{ borderRadius: "20px" }}>
            <Card.Body style={{ minHeight: "720px" }}>
              <h4>Community</h4>
              <List>
                <VirtualList
                  data={data}
                  height={ConstantHeight}
                  itemHeight={47}
                  itemKey="email"
                  onScroll={onScroll}
                >
                  {(item) => (
                    <List.Item key={item.email}>
                      <List.Item.Meta
                        avatar={<Avatar src={item.picture.large} />}
                        title={
                          <span href="https://ant.design">
                            {item.name.first} {item.name.last}
                          </span>
                        }
                        description={item.email}
                      />
                      <InfoCircleTwoTone style={{ fontSize: "24px" }} />
                    </List.Item>
                  )}
                </VirtualList>
              </List>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UIDashboard;
