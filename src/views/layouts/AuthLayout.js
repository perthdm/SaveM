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
  const [isCollapse, setIsCollapse] = useState();

  const checkActive = (name) => {
    return name === current;
  };

  return (
    <div style={{ height: "100vh" }}>
      <div style={{ display: "flex", height: "100%" }}>
        <Sidebar
          defaultCollapsed={isCollapse}
          backgroundColor="rgb(22 30 63 / 85%)"
          style={{ color: "white" }}
          image="https://demos.themeselection.com/chameleon-admin-template/app-assets/images/backgrounds/04.jpg"
        >
          <Menu>
            <MenuItem
              style={{ color: checkActive("Dashboard") ? "#29f" : "white" }}
              className="menu-item"
              active={current === "Dashboard"}
              routerLink={<Link to="/dashboard" />}
              onClick={() => setCurrent("Dashboard")}
            >
              Dashboard
            </MenuItem>
            <MenuItem
              style={{ color: checkActive("Statistics") ? "#29f" : "white" }}
              className="menu-item"
              active={current === "Statistics"}
              routerLink={<Link to="/statistics" />}
              onClick={() => setCurrent("Statistics")}
            >
              Statistics
            </MenuItem>
            <MenuItem
              style={{ color: checkActive("Management") ? "#29f" : "white" }}
              className="menu-item"
              active={current === "Management"}
              routerLink={<Link to="/management" />}
              onClick={() => setCurrent("Management")}
            >
              Management
            </MenuItem>
            <SubMenu label="Account">
              <MenuItem
                style={{
                  color: checkActive("Summary") ? "#29f" : "white",
                  backgroundColor: checkActive("Summary")
                    ? "#e2eef9"
                    : "rgb(22 30 63 / 85%)"
                }}
                className="menu-item"
                active={current === "Summary"}
                routerLink={<Link to="/summary" />}
                onClick={() => setCurrent("Summary")}
              >
                Summary
              </MenuItem>
              <MenuItem
                style={{
                  color: checkActive("My Statement") ? "#29f" : "white",
                  backgroundColor: checkActive("My Statement")
                    ? "#e2eef9"
                    : "rgb(22 30 63 / 85%)"
                }}
                className="menu-item"
                active={current === "My Statement"}
                routerLink={<Link to="/statement" />}
                onClick={() => setCurrent("My Statement")}
              >
                My Statement
              </MenuItem>
            </SubMenu>
            <MenuItem
              style={{
                color: checkActive("Schedule") ? "#29f" : "white"
              }}
              className="menu-item"
              active={current === "Schedule"}
              routerLink={<Link to="/schedule" />}
              onClick={() => setCurrent("Schedule")}
            >
              Schedule
            </MenuItem>
            <MenuItem
              style={{ color: checkActive("Profile") ? "#29f" : "white" }}
              className="menu-item"
              active={current === "Profile"}
              routerLink={<Link to="/profile" />}
              onClick={() => setCurrent("Profile")}
            >
              Profile
            </MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Sidebar>

        <div
          style={{ backgroundColor: "#f5f6fb", width: "100%", padding: "20px" }}
        >
          <Row
            className="shadow-box"
            style={{
              height: "60px",
              borderRadius: "10px",
              background: "white",
              padding: "10px 15px 10px 15px"
            }}
          >
            <Col span={8} style={{ display: "flex", alignItems: "center" }}>
              <BarChartOutlined
                style={{
                  marginRight: "10px",
                  fontSize: "28px",
                  color: "#289efa"
                }}
              />
              <h5 style={{ marginBottom: "0px" }}>{current}</h5>
            </Col>
            <Col
              span={16}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end"
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
                    verticalAlign: "middle"
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
