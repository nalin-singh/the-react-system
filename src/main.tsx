import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import { Application } from "./App.tsx";
import { Dashboard } from "./pages/dashboard.tsx";
import { store } from "./redux/store.ts";

// To understand the router configuration, refer to the official documentation: https://reactrouter.com/en/6.24.1/routers/create-browser-router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Application />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
