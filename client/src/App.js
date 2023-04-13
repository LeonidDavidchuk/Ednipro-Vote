import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./Pages/MainPage.jsx";
import LoginPage from "./components/admin/loginAdmin/LoginPage.jsx";
import AdminPage from "./components/admin/pageAdmin/AdminPage.js";
import PrivateRoute from "./components/admin/PrivateRoute.js";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/login"
            element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/login/adminpage"
            element={
              <PrivateRoute
                isAuthenticated={isAuthenticated}
                component={AdminPage}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
