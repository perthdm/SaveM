import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UILogin from "./views/pages/UILogin";
import AuthLayout from "./views/layouts/AuthLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<UILogin />} />
          <Route>
            <Route path="/" element={<AuthLayout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
