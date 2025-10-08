import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { UserProvider } from "./Context/UserContext";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </UserProvider>
);
