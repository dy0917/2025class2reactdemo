import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import DashboardPage from "./Pages/DashboardPage";
import DashboardMessages from "./Pages/DashboardMessages";
import DashboardTasks from "./Pages/DashboardTasks";
import PageNotFound from "./Pages/PageNotFound";

export default function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<Homepage {...props} />} />
      <Route path="dash" element={<DashboardPage {...props} />}>
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
      <Route path="/about" element={<AboutPage {...props} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
