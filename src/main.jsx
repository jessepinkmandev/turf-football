import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import Photos from "./routes/photos";
import Details from "./routes/services";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoutes from "./components/ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "",
    index: true,
    element: <Root />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "/signin",
    //     element: <SignIn />,
    //   },
    //   {
    //     path: "/signup",
    //     element: <SignUp />,
    //   },

    //   {
    //     path: "/more",
    //     element: (
    //       <ProtectedRoutes>
    //         <Details />,
    //       </ProtectedRoutes>
    //     ),
    //   },
    //   {
    //     path: "/photos",
    //     element: (
    //       <ProtectedRoutes>
    //         <Photos />,
    //       </ProtectedRoutes>
    //     ),
    //   },
    //   {
    //     path: "/contactus",
    //     element: (
    //       <ProtectedRoutes>
    //         <Contact />,
    //       </ProtectedRoutes>
    //     ),
    //   },
    // ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
