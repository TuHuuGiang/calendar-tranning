import { Route, Routes } from "react-router-dom";
import Contents from "../components/contents";
import Settings from "../components/settings";
import SideBar from "../components/sideBar";
import CalendarPage from "../pages/calendarPage";
import DashboardPage from "../pages/dashboardPage";
import "./style.scss";

export default function Layouts() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <SideBar />
          <Routes>
            <Route index element={<DashboardPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
