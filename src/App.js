import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UILogin from "./views/pages/UILogin";
import AuthLayout from "./views/layouts/AuthLayout";
import { ProtectedRoute } from "./views/compoenents/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<UILogin />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/*" element={<AuthLayout />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
