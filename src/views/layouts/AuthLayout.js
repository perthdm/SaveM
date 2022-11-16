import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Routes, Route } from "react-router-dom";
import UIDashboard from "src/views/pages/UIDashboard";

const AuthLayout = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div style={{ display: "flex", height: "100%" }}>
        <Sidebar>
          <Menu>
            <SubMenu label="Charts">
              <MenuItem> Pie charts </MenuItem>
              <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <MenuItem> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>
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
              borderRadius: "10px"
            }}
          >
            Header
          </div>
          <Routes>
            <Route path="/dashboard" element={<UIDashboard />} />
            <Route path="/regis" element={<UIDashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
