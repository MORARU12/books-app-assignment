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
    element: <Layout />, // Use Layout as the root element
    children: [
      {
        path: "/",
        element: <Search />,
        // errorElement: <NotFoundPage />, // Uncomment if you have a NotFoundPage component
      },
      {
        path: "/favorites",
        element: <Favorites />,
        // errorElement: <NotFoundPage />, // Uncomment if you have a NotFoundPage component
      },
      {
        path: "/book",
        element: <Book />,
        // errorElement: <NotFoundPage />, // Uncomment if you have a NotFoundPage component
      },
      // {
      //   path: '/profiles',
      //   element: <ProfilesPage />,
      //   children: [
      //     {
      //       path: '/profiles/:profileId',
      //       element: <ProfilePage />,
      //     },
      //   ],
      // },
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
