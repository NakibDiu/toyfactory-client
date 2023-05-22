import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ErrorPage from "./components/ErrorPage";
import Home from "./pages/Home";
import Blogs from "./components/Blogs";
import Alltoys from "./components/Alltoys";
import Mytoys from "./components/Mytoys";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AuthProviders from "./providers/AuthProviders";
import ToyModal from "./components/common/ToyModal";
import AddToy from "./components/AddToy";
import PrivateRoute from "./routes/PrivateRoute";

const backendUrl = import.meta.env.VITE_backendUrl;
// const backendUrl = "http://localhost:3000";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/allToys",
        element: <Alltoys />,
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <Mytoys />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/toys/:id",
        element: (
          <PrivateRoute>
            <ToyModal />
          </PrivateRoute>
        ),
        loader: async ({ params }) => fetch(`${backendUrl}/toys/${params.id}`),
      },
      {
        path: "/addToy",
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
