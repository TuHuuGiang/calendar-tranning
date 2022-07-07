﻿import { Route, Routes } from "react-router-dom";
import Settings from "../components/settings";
import SideBar from "../components/sideBar";
import CalendarPage from "../pages/calendarPage";
import ContructionPage from "../pages/contructionPage";

import "./style.scss";

export default function Layouts() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <SideBar />
          <Routes>
            <Route index element={<CalendarPage />} />
            <Route path="/calendar" element={<CalendarPage />}>
              <Route path=":actions" element={<Settings />} />
            </Route>
            <Route path="*" element={<ContructionPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
