import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import AddJob from "../pages/AddJob";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from "./PrivateRoute";
import MyJobs from "../pages/MyJobs";
import AppliedJobs from "../pages/AppliedJobs";
import UpdateJob from "../pages/UpdateJob";
import axios from "axios";
import AllJobs from "../pages/AllJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/blogs/blog/:id",
        element: <BlogDetails></BlogDetails>,
      },
      {
        path: "/add-job",
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <PrivateRoute>
            <MyJobs></MyJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/applied-jobs",
        element: (
          <PrivateRoute>
            <AppliedJobs></AppliedJobs>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateJob></UpdateJob>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          return axios
            .get(
              `http://localhost:5000/api/v1/all-jobs/job/details/${params.id}`
            )
            .then((res) => {
              return res.data;
            });
        },
      },
      {
        path: "/all-jobs",
        element: <AllJobs></AllJobs>,
      },
    ],
  },
]);

export default router;
