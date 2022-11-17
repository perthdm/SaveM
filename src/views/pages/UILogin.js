import React, { useState } from "react";
import { Row, Col, Card, Button, Checkbox } from "antd";
import { UserOutlined, LockFilled } from "@ant-design/icons";
import FloatingInput from "src/views/compoenents/FloatingInput";
import { useNavigate } from "react-router-dom";
import { ImageBox } from "./UILogin.styled";

import SavingIcon from "src/assets/image/icon-login.png";
import GoogleIcon from "src/assets/image/icon-google.png";

const UILogin = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("Username ==> ", username);
    console.log("Password ==> ", password);
    navigate("/dashboard");
  };

  return (
    <div
      className="container-login"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundImage: "linear-gradient(to right, #D6F1F0, #A7E3E1)",
        backgroundColor: "#e3edff",
        fontFamily: "Comic Sans MS"
      }}
    >
      <Card className="card-login">
        <Row style={{ height: "100%" }}>
          {/* LEFT */}
          <Col xs={0} md={0} lg={11}>
            <ImageBox>
              <img src={SavingIcon} />
            </ImageBox>
          </Col>

          {/* RIGHT */}
          <Col xs={24} md={24} lg={13}>
            <Row
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "15px"
              }}
            >
              <Col xs={24} className="detail-side">
                <h2
                  style={{
                    color: "#2899db",
                    marginBottom: "50px"
                  }}
                >
                  Welcome to Save-M.
                  <br />
                  <span style={{ fontSize: "16px", color: "#5bc3ff" }}>
                    Saving for the better life
                  </span>
                </h2>
                <FloatingInput
                  labelText="Username"
                  icon={<UserOutlined className="antd-fixed-icon" />}
                  textValue={username}
                  onChangeValue={(value) => setUsername(value)}
                  inputType="text"
                />

                <FloatingInput
                  labelText="Password"
                  icon={<LockFilled className="antd-fixed-icon" />}
                  textValue={password}
                  onChangeValue={(value) => setPassword(value)}
                  inputType="password"
                />

                <Row
                  style={{ paddingLeft: "4%", paddingRight: "10%" }}
                  className="mt-2"
                >
                  <Col sm={12}>
                    <Checkbox onChange={() => {}}>
                      <span style={{ color: "#c5c5c5" }}>Remember Me</span>
                    </Checkbox>
                  </Col>
                  <Col
                    sm={12}
                    style={{
                      textAlign: "right"
                    }}
                  >
                    <a style={{ color: "#2899db", fontSize: "14px" }}>
                      Forgot Password ?
                    </a>
                  </Col>
                </Row>

                <Button
                  className="btn-pocket btn-bg-blue"
                  style={{ marginTop: "3rem" }}
                  onClick={handleSubmit}
                >
                  Login
                </Button>

                <Button
                  className="btn-pocket btn-bg-white mt-3"
                  // onClick={() => history.push("/register")}
                >
                  <img src={GoogleIcon} width={35} height={35} /> Sign in with
                  Google
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default UILogin;
