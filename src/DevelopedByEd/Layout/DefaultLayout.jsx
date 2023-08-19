import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { SideBar } from "../components/SideBar";
import { useState } from "react";

const DefaultLayout = () => {

  const [collapsed, setCollapsed] = useState(true)

  return (
    <div className="flex-col">
      <NavBar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className="flex">
        <SideBar collapsed={collapsed} />
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
