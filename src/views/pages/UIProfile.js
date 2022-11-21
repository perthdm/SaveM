import React, { useState } from "react";
import { Row, Col, Avatar, Button } from "antd";
import { Card } from "react-bootstrap";
import CreditCard from "src/views/compoenents/Card/CreditCard";
import { WifiOutlined } from "@ant-design/icons";

const UIProfile = () => {
  const [value, setValue] = useState(1);

  console.log(value);

  return (
    <div style={{ padding: " 10px" }}>
      <Card style={{ borderRadius: "20px" }} className="mt-4">
        <Card.Body>
          <Row style={{ background: "White" }}>
            <Col
              lg={12}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0px 15px",
              }}
            >
              <Avatar
                shape="square"
                size={64}
                src="https://joeschmoe.io/api/v1/random"
                style={{ border: "1px solid #c3c3c3", borderRadius: "10px" }}
              />
              <div
                className="mx-3"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div>
                  Plug Single <br />
                  <span style={{ color: "#c3c3c3" }}>Developer (Junior)</span>
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    padding: "8px",
                    borderRadius: "8px",
                    backgroundColor: "#f8f9fa",
                  }}
                >
                  <Button
                    className={`mx-2 ${value === 1 && "shadow-box"}`}
                    style={{
                      width: "100px",
                      backgroundColor: value === 1 ? "white" : "transparent",
                      border: "0px",
                      borderRadius: "7px",
                    }}
                    onClick={() => setValue(1)}
                  >
                    Home
                  </Button>
                  <Button
                    className={`mx-2 ${value === 2 && "shadow-box"}`}
                    style={{
                      width: "100px",
                      backgroundColor: value === 2 ? "white" : "transparent",
                      border: "0px",
                      borderRadius: "7px",
                    }}
                    onClick={() => setValue(2)}
                  >
                    Info
                  </Button>
                  <Button
                    className={`mx-2 ${value === 3 && "shadow-box"}`}
                    style={{
                      width: "100px",
                      backgroundColor: value === 3 ? "white" : "transparent",
                      border: "0px",
                      borderRadius: "7px",
                    }}
                    onClick={() => setValue(3)}
                  >
                    Contact
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {value === 1 && (
        <>
          <Row gutter={[16, 16]} className="mt-4">
            <Col lg={8}>
              <Card
                style={{
                  minHeight: "130px",
                  borderRadius: "20px",
                }}
              >
                <Card.Body>
                  <h5>Profile Information</h5>
                  <p style={{ fontSize: "14px", color: "#878787" }}>
                    Hi, I'm just a human.I love to eat everything in this world.
                  </p>
                  <p style={{ fontSize: "14px", color: "#878787" }}>
                    It's joke.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={8}>
              <Card
                style={{
                  minHeight: "130px",
                  borderRadius: "20px",
                  height: "100%",
                }}
              >
                <Card.Body>
                  <h5>My target</h5>
                  <p style={{ fontSize: "14px", color: "#878787" }}>
                    Dont't know.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={8}>
              <Card
                style={{
                  minHeight: "130px",
                  borderRadius: "20px",
                  height: "100%",
                }}
              >
                <Card.Body>
                  <h5>Conversations</h5>
                  <Row>
                    <Avatar
                      shape="square"
                      size={64}
                      src="https://joeschmoe.io/api/v1/random"
                      style={{
                        border: "1px solid #c3c3c3",
                        borderRadius: "10px",
                      }}
                    />
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div style={{ padding: "10px", marginTop: "-15px" }}>
                        Joruno Jobana
                      </div>
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Card
            style={{
              minHeight: "130px",
              borderRadius: "20px",
              marginTop: "1.5rem",
            }}
          >
            <Card.Body>
              <Row className="mt-4" gutter={[16, 16]}>
                <Col xl={8} lg={24} sm={24}>
                  <Row gutter={[16, 16]}>
                    <Col xl={24} lg={16}>
                      {/* CREDIT CARD */}
                      <CreditCard
                        bgImage="https://png.pngtree.com/thumb_back/fh260/background/20200731/pngtree-blue-carbon-background-with-sport-style-and-golden-light-image_371487.jpg"
                        ownerName="Plug Jackson"
                        acNumber="4124 5648 1484 4541"
                        expDate="11/22"
                      />
                    </Col>

                    <Col xl={24} lg={8}>
                      <div>Saving Account</div>

                      <p style={{ fontSize: "14px", color: "#878787" }}>
                        Eakkasit Praprutkittorn
                      </p>
                    </Col>
                  </Row>
                </Col>

                <Col xl={8} lg={24} sm={24}>
                  <Row gutter={[16, 16]}>
                    <Col xl={24} lg={16}>
                      <CreditCard
                        bgImage="https://i.pinimg.com/736x/bd/30/d1/bd30d1c32ee44e050119e06d57a8bfa6.jpg"
                        ownerName="John JingJang"
                        acNumber="6558 4741 4228 4556"
                        expDate="20/22"
                      />
                    </Col>

                    <Col xl={24} lg={8}>
                      <div>Saving Account</div>

                      <p style={{ fontSize: "14px", color: "#878787" }}>
                        Somsak Jimmy
                      </p>
                    </Col>
                  </Row>
                </Col>

                <Col xl={8} lg={24} sm={24}>
                  <Row gutter={[16, 16]}>
                    <Col xl={24} lg={16}>
                      <CreditCard
                        bgImage="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/card-visa.jpg"
                        ownerName="Limp Dilee"
                        acNumber="8778 5414 4564 7414"
                        expDate="14/22"
                      />
                    </Col>

                    <Col xl={24} lg={8}>
                      <div>Saving Account</div>

                      <p style={{ fontSize: "14px", color: "#878787" }}>
                        Thimmer Hell
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </>
      )}

      {value === 2 && (
        <>
          <Row gutter={[16, 16]} className="mt-4">
            <Col lg={8}>
              <Card
                style={{
                  minHeight: "130px",
                  borderRadius: "20px",
                }}
              >
                <Card.Body>
                  <h5>Profile Information</h5>
                  <p>
                    Hi, I'm just a human.I love to eat everything in this world.
                  </p>
                  <p>It's joke.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={8}>
              <Card
                style={{
                  minHeight: "130px",
                  borderRadius: "20px",
                  height: "100%",
                }}
              >
                <Card.Body>
                  <h5>My target</h5>
                  <p>Dont't know.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={8}>
              <Card
                style={{
                  minHeight: "130px",
                  borderRadius: "20px",
                  height: "100%",
                }}
              >
                <Card.Body>
                  <h5>Conversations</h5>
                  <Row>
                    <Avatar
                      shape="square"
                      size={64}
                      src="https://joeschmoe.io/api/v1/random"
                      style={{
                        border: "1px solid #c3c3c3",
                        borderRadius: "10px",
                      }}
                    />
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div style={{ padding: "10px", marginTop: "-15px" }}>
                        Joruno Jobana
                      </div>
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      )}

      {value === 3 && (
        <>
          <Row gutter={[16, 16]} className="mt-4">
            <Col lg={8}>
              <Card
                style={{
                  minHeight: "130px",
                  borderRadius: "20px",
                }}
              >
                <Card.Body>
                  <h5>Profile Information</h5>
                  <p>
                    Hi, I'm just a human.I love to eat everything in this world.
                  </p>
                  <p>It's joke.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default UIProfile;
