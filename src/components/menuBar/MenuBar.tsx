import React from "react";
import "./MenuBar.css";
import logo from "../../assets/logo.svg";
import MenuOption from "./MenuOption";

const data = [
  {
    icon: "dashboard",
    title: "Dashboard",
  },
  {
    icon: "desktop_windows",
    title: "Thiết bị",
  },
  {
    icon: "forum",
    title: "Dịch vụ",
  },
  {
    icon: "filter_1",
    title: "Cấp số",
  },
  {
    icon: "feed",
    title: "Báo cáo",
  },
  {
    icon: "settings",
    title: "Cài đặt hệ thống",
  },
];

const MenuBar = () => {
  return (
    <div className="menu-container">
      <div className="menu-container-img">
        <img src={logo} alt="" />
      </div>

      {data.map((d, idx) => (
        <MenuOption icon={d.icon} title={d.title} />
      ))}

      <div className="menu-container-button">
        <button>
          <span className="material-symbols-outlined">logout</span>
          <p>Đăng xuất</p>
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
