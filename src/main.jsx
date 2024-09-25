import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import "./scss/_Global.scss";
<<<<<<< HEAD
=======

>>>>>>> 96a55ad67d9b714eeadf74adcd7e4876f26c69ce

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
