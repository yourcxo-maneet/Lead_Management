import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { gapi } from "gapi-script";

import SignIn from "./components/loginForm/SignIn";
import DashboardLayout from "./layouts/DashboardLayout";
import { useEffect } from "react";
import AppState from "./contexts/AppState";
import Dashboard from "./components/dashboard/Dashboard";
import Form from "./components/form/Form";
import Checkout from "./components/form/Checkout";
import { fetchToken, getZohoToken } from "./utils/helperFunctions";

function App() {
  const clientId =
    "960090898668-2k4l617rghg4pmc2pc51j4bcr47f5mk2.apps.googleusercontent.com";

  useEffect(() => {
    function start() {
      if (gapi.client) {
        // Check if gapi.client is defined before calling init
        gapi.client
          .init({ clientId: clientId, scope: "" })
          .then(() => {
            console.log("Google API initialized successfully!");
            // Your code after initialization
          })
          .catch((error) => {
            console.error("Error initializing Google API:", error);
          });
      } else {
        console.error("gapi.client is undefined. Initialization failed.");
      }
    }

    // Check if gapi is loaded before calling load
    if (gapi && gapi.load) {
      gapi.load("client:auth2", start);
    } else {
      console.error(
        "gapi.load is not available. Google API may not be properly loaded."
      );
    }
  }, []);
  fetchToken();
  // getZohoToken();

  return (
    <BrowserRouter>
      <AppState>
        <div className="App">
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route
              path="/dashboard"
              element={<DashboardLayout View={<Dashboard />} />}
            />
            <Route
              path="/dashboard/form"
              element={<DashboardLayout View={<Checkout />} />}
            />
          </Routes>
        </div>
      </AppState>
    </BrowserRouter>
  );
}

export default App;
