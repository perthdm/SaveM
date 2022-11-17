import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Routes, Route } from "react-router-dom";
import { Button, Space, Avatar, Badge } from "antd";
import UIDashboard from "src/views/pages/UIDashboard";
import UIManagement from "../pages/UIManagement";
import { GlobalOutlined, BellOutlined } from "@ant-design/icons";

const AuthLayout = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div style={{ display: "flex", height: "100%" }}>
        <Sidebar>
          <Menu>
            <MenuItem> Dashboard </MenuItem>

            <SubMenu label="Management">
              <MenuItem> Summary </MenuItem>
              <MenuItem> My Statement </MenuItem>
            </SubMenu>
            <MenuItem> Statistics </MenuItem>
            <MenuItem> Schedule </MenuItem>
            <MenuItem> Logout </MenuItem>
          </Menu>
        </Sidebar>

        <div
          style={{ backgroundColor: "#f5f6fb", width: "100%", padding: "20px" }}
        >
          <div
            className="shadow-box"
            style={{
              background: "white",
              height: "60px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              padding: "10px 15px 10px 15px"
            }}
          >
            <Space>
              {/* <GlobalOutlined
                style={{
                  fontSize: "30px",
                  color: "#d8d8d8"
                }}
              /> */}

              <div style={{ marginRight: "1rem" }}>
                <Badge count={4}>
                  <BellOutlined
                    style={{ fontSize: "24px", color: "#7b7b7b" }}
                  />
                </Badge>
              </div>

              <Avatar
                style={{ backgroundColor: "orange", verticalAlign: "middle" }}
                size="large"
                gap={4}
              >
                EP
              </Avatar>
            </Space>
          </div>

          {/* Wrarpper */}
          <Routes>
            <Route path="/dashboard" element={<UIDashboard />} />
            <Route path="/management" element={<UIManagement />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
