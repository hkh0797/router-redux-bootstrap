import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Index from "./pages/Index";
import Board from "./pages/board";

const AddPost = React.lazy(() => import("./pages/AddPost"));
const EditPost = React.lazy(() => import("./pages/EditPost"));
const Details = React.lazy(() => import("./pages/Details"));

const AddBoard = React.lazy(() => import("./pages/board/AddBoard"));
const EditBoard = React.lazy(() => import("./pages/board/EditBoard"));
const Detail = React.lazy(() => import("./pages/board/Detail"));

const postParamHandler = ({ params }) => {
  if (isNaN(params.id)) {
    throw new Response("Bad Request", {
      statusText: "please make sure to insert correct post ID",
      status: 400,
    });
  }
  // return을 반드시 해줘야 합니다. 안하면 0-3 에러 납니다.
  return "";
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route path="post" element={<Index />} />
        <Route
          path="post/add"
          element={
            <Suspense fallback="loading please wait...">
              <AddPost />
            </Suspense>
          }
        />
        <Route
          path="post/:id"
          element={
            <Suspense fallback="loading please wait...">
              <Details />
            </Suspense>
          }
          loader={postParamHandler}
        />
        <Route
          path="post/:id/edit"
          element={
            <Suspense fallback="loading please wait...">
              <EditPost />
            </Suspense>
          }
          loader={postParamHandler}
        />
        <Route
          path="board/add"
          element={
            <Suspense fallback="loading please wait...">
              <AddBoard />
            </Suspense>
          }
        />
        <Route
          path="board"
          element={
            <Suspense fallback="loading please wait...">
              <Board />
            </Suspense>
          }
        />
        <Route
          path="board/:id"
          element={
            <Suspense fallback="loading please wait...">
              <Detail />
            </Suspense>
          }
          loader={postParamHandler}
        />
        <Route
          path="board/:id/edit"
          element={
            <Suspense fallback="loading please wait...">
              <EditBoard />
            </Suspense>
          }
          loader={postParamHandler}
        />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
