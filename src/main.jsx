import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Contact from "./routes/contact";
import Photos from "./routes/photos";
import Details from "./routes/services";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./pages/Error";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter basename={"/turf-football/"}>
        <Routes>
          <Route
            path="/*"
            element={
              <ErrorBoundary FallbackComponent={Error}>
                <Root />
              </ErrorBoundary>
            }
          >
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
            <Route
              path="more"
              element={
                <ProtectedRoutes>
                  <Details />
                </ProtectedRoutes>
              }
            />
            <Route
              path="photos"
              element={
                <ProtectedRoutes>
                  <Photos />
                </ProtectedRoutes>
              }
            />
            <Route
              path="contactus"
              element={
                <ProtectedRoutes>
                  <Contact />
                </ProtectedRoutes>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
