import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Routes, Route } from "react-router-dom";
import UIDashboard from "src/views/pages/UIDashboard";

const AuthLayout = () => {
  const items = [
    { label: "item 1", key: "item-1" }, // remember to pass the key prop
    { label: "item 2", key: "item-2" }, // which is required
    {
      label: "sub menu",
      key: "submenu",
      children: [{ label: "item 3", key: "submenu-item-1" }]
    }
  ];

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

        <div style={{ backgroundColor: "red", width: "100%" }}>
          <Routes>
            <Route path="/dashboard" element={<UIDashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
