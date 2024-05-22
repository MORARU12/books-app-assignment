import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/index.scss";
import Layout from "./components/Layout";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import Book from "./pages/Book";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Search />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/book",
        element: <Book />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
