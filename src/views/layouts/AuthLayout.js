import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Routes, Route, Link } from "react-router-dom";
import { Row, Col, Space, Avatar, Badge } from "antd";
import UIDashboard from "src/views/pages/UIDashboard";
import UIManagement from "../pages/UIManagement";
import { BarChartOutlined, BellOutlined } from "@ant-design/icons";
import UIProfile from "../pages/UIProfile";

const AuthLayout = () => {
  const [current, setCurrent] = useState("Dashboard");

  return (
    <div style={{ height: "100vh" }}>
      <div style={{ display: "flex", height: "100%" }}>
        <Sidebar>
          <Menu>
            <MenuItem
              routerLink={<Link to="/dashboard" />}
              onClick={() => setCurrent("Dashboard")}
            >
              Dashboard
            </MenuItem>
            <MenuItem
              routerLink={<Link to="/statistics" />}
              onClick={() => setCurrent("Statistics")}
            >
              Statistics
            </MenuItem>
            <MenuItem
              routerLink={<Link to="/management" />}
              onClick={() => setCurrent("Management")}
            >
              Management
            </MenuItem>
            <SubMenu label="Account">
              <MenuItem> Summary </MenuItem>
              <MenuItem> My Statement </MenuItem>
            </SubMenu>
            <MenuItem> Statistics </MenuItem>
            <MenuItem> Schedule </MenuItem>
            <MenuItem
              routerLink={<Link to="/profile" />}
              onClick={() => setCurrent("Profile")}
            >
              Profile
            </MenuItem>
            <MenuItem> Logout </MenuItem>
          </Menu>
        </Sidebar>

        <div
          style={{ backgroundColor: "#f5f6fb", width: "100%", padding: "20px" }}
        >
          {/* <div
            className="shadow-box"
            style={{
              background: "white",
              height: "60px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              padding: "10px 15px 10px 15px"
            }}
          > */}
          <Row
            className="shadow-box"
            style={{
              height: "60px",
              borderRadius: "10px",
              background: "white",
              padding: "10px 15px 10px 15px",
            }}
          >
            <Col span={8} style={{ display: "flex", alignItems: "center" }}>
              <BarChartOutlined
                style={{
                  marginRight: "10px",
                  fontSize: "28px",
                  color: "#289efa",
                }}
              />{" "}
              <h5 style={{ marginBottom: "0px" }}>{current}</h5>
            </Col>
            <Col
              span={16}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <Space>
                <div style={{ marginRight: "1rem" }}>
                  <Badge count={4}>
                    <BellOutlined
                      style={{ fontSize: "24px", color: "#7b7b7b" }}
                    />
                  </Badge>
                </div>

                <Avatar
                  style={{
                    backgroundColor: "orange",
                    verticalAlign: "middle",
                  }}
                  size="large"
                  gap={4}
                >
                  EP
                </Avatar>
              </Space>
            </Col>
          </Row>
          {/* </div> */}

          {/* Wrarpper */}
          <Routes>
            <Route path="/dashboard" element={<UIDashboard />} />
            <Route path="/management" element={<UIManagement />} />
            <Route path="/profile" element={<UIProfile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
