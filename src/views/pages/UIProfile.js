import React, { useState } from "react";
import { Row, Col, Avatar, Button, Card, Image, Tabs } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Label } from "../compoenents/FloatingInput.styled";
import { WifiOutlined } from "@ant-design/icons";

const UIProfile = () => {
  const [value, setValue] = useState(1);

  console.log(value);

  return (
    <div style={{ padding: " 10px" }}>
      <Row style={{ background: "White" }} className="mt-2">
        <Col
          lg={12}
          style={{ display: "flex", alignItems: "center", padding: "15px" }}
        >
          <Row>
            <Avatar
              shape="square"
              size={64}
              src={<Image src="https://joeschmoe.io/api/v1/random" />}
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
          </Row>
        </Col>
        <Col
          lg={12}
          style={{
            textAlign: "right",
            marginTop: "32px",
            marginBottom: "32px",
          }}
        >
          <Button className="mx-2" type="primary" onClick={() => setValue(1)}>
            Home
          </Button>
          <Button className="mx-2" type="primary" onClick={() => setValue(2)}>
            Info
          </Button>
          <Button className="mx-2" type="primary" onClick={() => setValue(3)}>
            Contact
          </Button>
        </Col>
      </Row>

      {value === 1 && (
        <>
          <Row gutter={[16, 0]} className="mt-4">
            <Col lg={8}>
              <Card
                style={{
                  minHeight: "130px",
                  borderRadius: "20px",
                  height: "100%",
                }}
              >
                <Row>
                  <Col lg={24}>
                    <h5>Profile Information</h5>
                    <p>
                      Hi, I'm just a human.I love to eat everything in this
                      world.
                    </p>
                    <p>It's joke.</p>
                  </Col>
                </Row>
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
                <Row>
                  <Col lg={24}>
                    <h5>My target</h5>
                    <p>Dont't know.</p>
                  </Col>
                </Row>
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
                <Row>
                  <Col lg={24}>
                    <h5>Conversations</h5>
                    <Row>
                      <Avatar
                        shape="square"
                        size={64}
                        src={<Image src="https://joeschmoe.io/api/v1/random" />}
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
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={8} sm={24}>
              <Card style={{ minHeight: "130px", borderRadius: "20px" }}>
                <Row>
                  <Col lg={24} sm={24}>
                    <Card
                      style={{
                        backgroundImage:
                          "url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/card-visa.jpg')",
                        height: "220px",
                        borderRadius: "1rem",
                      }}
                    >
                      <Row>
                        <Col lg={24} sm={24} style={{ height: "100%" }}>
                          <WifiOutlined
                            style={{ color: "white", fontSize: "22px" }}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          lg={24} sm={24}
                          style={{
                            marginTop:"25px",
                            height: "100%",
                            color: "white",
                            fontSize: "20px",
                          }}
                        >
                          <p>4124 5648 1484 4541</p>
                        </Col>
                      </Row>
                      <Row >
                        <Col
                          lg={6} sm={6}
                          style={{
                            height: "100%",
                            color: "white",
                            fontSize: "15px",
                            marginTop: "10px",
                          }}
                        >
                          <p style={{ color: "gray" }}>Card Holder</p>
                          <br />
                          <p style={{ marginTop: "-40px" }}>Plug Jackson</p>
                        </Col>
                        <Col
                          lg={12} sm={12}
                          style={{
                            height: "100%",
                            color: "white",
                            fontSize: "15px",
                            marginTop: "10px",
                          }}
                        >
                          <p style={{ color: "gray" }}>Expires</p>
                          <br />
                          <p style={{ marginTop: "-40px" }}>11/22</p>
                        </Col>
                        <Col
                          lg={6} sm={6}
                          style={{
                            height: "100%",
                            color: "white",
                            fontSize: "15px",
                            marginTop: "10px",
                            textAlign:"right",
                          }}
                        >
                          <p>right</p>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>

                <Row>
                  <Col lg={24} sm={24}>
                    <h5 style={{ marginTop: "10px" }}>My Project 1</h5>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg={8}>
              <Card style={{ minHeight: "130px", borderRadius: "20px" }}>
                <Row>
                  <Col lg={24}>
                    <Image
                      style={{ width: "100%" }}
                      src="https://i.imgur.com/zHVV2E9.jpg"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col lg={24}>
                    <h5 style={{ marginTop: "10px" }}>My Project 3</h5>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg={8}>
              <Card style={{ minHeight: "130px", borderRadius: "20px" }}>
                <Row>
                  <Col lg={24}>
                    <Image
                      style={{ width: "100%" }}
                      src="https://i.imgur.com/zHVV2E9.jpg"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col lg={24}>
                    <h5 style={{ marginTop: "10px" }}>My Project 4</h5>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </>
      )}
      {value === 2 && (
        <>
          <Row gutter={[16, 0]} className="mt-4">
            <Col lg={8}>
              <Card
                style={{
                  minHeight: "130px",
                  borderRadius: "20px",
                  height: "100%",
                }}
              >
                <Row>
                  <Col lg={24}>
                    <h5>My hobby</h5>
                    <p style={{ marginTop: "20px" }}>I'm a chief.</p>
                    <p>I'm an apple.... wah what!</p>
                  </Col>
                </Row>
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
                <Row>
                  <Col lg={24}>
                    <h5>My Name</h5>
                    <p style={{ marginTop: "20px" }}>Papee Julaskar</p>
                  </Col>
                </Row>
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
                <Row>
                  <Col lg={24}>
                    <h5>My other detail</h5>
                    <p style={{ marginTop: "20px" }}>Age: 29</p>
                    <p>From: Thailand</p>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col lg={6}>
              <Card
                style={{
                  minHeight: "130px",
                  borderRadius: "20px",
                  height: "100%",
                }}
              >
                <Row>
                  <Col lg={24}>
                    <Image
                      style={{ width: "100%" }}
                      src="https://i.imgur.com/zHVV2E9.jpg"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col lg={24}>
                    <h5 style={{ marginTop: "10px" }}>My Picture 1</h5>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg={6}>
              <Card style={{ minHeight: "130px", borderRadius: "20px" }}>
                <Row>
                  <Col lg={24}>
                    <Image
                      style={{ width: "100%" }}
                      src="https://i.imgur.com/zHVV2E9.jpg"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col lg={24}>
                    <h5 style={{ marginTop: "10px" }}>My Picture 1</h5>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg={6}>
              <Card style={{ minHeight: "130px", borderRadius: "20px" }}>
                <Row>
                  <Col lg={24}>
                    <Image
                      style={{ width: "100%" }}
                      src="https://i.imgur.com/zHVV2E9.jpg"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col lg={24}>
                    <h5 style={{ marginTop: "10px" }}>My Picture 1</h5>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg={6}>
              <Card style={{ minHeight: "130px", borderRadius: "20px" }}>
                <Row>
                  <Col lg={24}>
                    <Image
                      style={{ width: "100%" }}
                      src="https://i.imgur.com/zHVV2E9.jpg"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col lg={24}>
                    <h5 style={{ marginTop: "10px" }}>My Picture 1</h5>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </>
      )}
      {value === 3 && (
        <>
          <Row gutter={[16, 0]} className="mt-4">
            <Col lg={8}>
              <Card
                style={{
                  minHeight: "130px",
                  borderRadius: "20px",
                  height: "100%",
                }}
              >
                <Row>
                  <Col lg={24}>
                    <h5>My Facebook</h5> <p>Mr.Showy</p>
                  </Col>
                </Row>
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
                <Row>
                  <Col lg={24}>
                    <h5>My Instagram</h5> <p>Papelus</p>
                  </Col>
                </Row>
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
                <Row>
                  <Col lg={24}>
                    <h5>My Twitter</h5> <p>Detail Man</p>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col lg={6}>
              <Card style={{ minHeight: "130px", borderRadius: "20px" }}>
                <Row>
                  <Col lg={24}>
                    <Image
                      style={{ width: "100%" }}
                      src="https://i.imgur.com/zHVV2E9.jpg"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col lg={24}>
                    <h5 style={{ marginTop: "10px" }}>My Facebook profile</h5>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg={6}>
              <Card style={{ minHeight: "130px", borderRadius: "20px" }}>
                <Row>
                  <Col lg={24}>
                    <Image
                      style={{ width: "100%" }}
                      src="https://i.imgur.com/zHVV2E9.jpg"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col lg={24}>
                    <h5 style={{ marginTop: "10px" }}>My Instagram profile</h5>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg={6}>
              <Card style={{ minHeight: "130px", borderRadius: "20px" }}>
                <Row>
                  <Col lg={24}>
                    <Image
                      style={{ width: "100%" }}
                      src="https://i.imgur.com/zHVV2E9.jpg"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col lg={24}>
                    <h5 style={{ marginTop: "10px" }}>My Twitter profile</h5>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg={6}>
              <Card style={{ minHeight: "130px", borderRadius: "20px" }}>
                <Row>
                  <Col lg={24}>
                    <Image
                      style={{ width: "100%" }}
                      src="https://i.imgur.com/zHVV2E9.jpg"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col lg={24}>
                    <h5 style={{ marginTop: "10px" }}>My recommend picture</h5>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default UIProfile;
