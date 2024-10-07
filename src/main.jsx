import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./scss/_Global.scss";
import { AuthProvider } from "./context/AuthContext";
import { DateProvider } from "./context/DateContext"; // Cambiar a DateProvider

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <DateProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </DateProvider>
    </AuthProvider>
  </StrictMode>
);
