import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import { Application } from "./App.tsx";
import { store } from "./redux/store.ts";
import { Dashboard } from "./pages/dashboard.tsx";

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
