import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/router.jsx";
import Aos from "aos";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
// 1.1 import css by copy from documentation
import "aos/dist/aos.css";
import AuthProvider from "./context/AuthContext/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

// 1.0 My requirement is implement  animation on scroll. run "npm install aos --save" from https://github.com/michalsnik/aos

// 1.2 call Aos.init()
Aos.init({ delay: 1000 });

// 16.1
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="font-urbanist">
      {/* 7.5 apply the <AuthProvider></AuthProvider> */}
      {/* 16.3  */}
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
          <Toaster></Toaster>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  </StrictMode>
);
