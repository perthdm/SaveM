import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UILogin from "./views/pages/UILogin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UILogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
