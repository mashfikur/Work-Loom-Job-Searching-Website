import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router.jsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./authentication/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Creating a query client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
