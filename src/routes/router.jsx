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
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>,
      },
      {
        path: "/job/:id",
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
      },
      {
        path:"/my-jobs",
        element:<PrivateRoute><MyJobs></MyJobs></PrivateRoute>
      },
      {
        path:"/applied-jobs",
        element:<PrivateRoute><AppliedJobs></AppliedJobs> </PrivateRoute>
      },
    ],
  },
]);

export default router;
