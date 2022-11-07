import React from "react";
import "./MenuBar.css";
import logo from "../../assets/logo.svg";
import MenuOption from "./MenuOption";
import { Link } from "react-router-dom";

const data = [
  {
    icon: "dashboard",
    title: "Dashboard",
    link: "dashboard",
  },
  {
    icon: "desktop_windows",
    title: "Thiết bị",
    link: "device",
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
    subIcon: "more_vert",
    subOption: ["Quản ly vai trò", "Quản ly tài khoản", "Quản ly người dùng"],
  },
];

const MenuBar = () => {
  const logout = () => {
    localStorage.removeItem("firstLogin");
    window.location.href = "/";
  };

  return (
    <>
      <div className="menu-container">
        <div className="menu-container-img">
          <img src={logo} alt="" />
        </div>

        {data.map((d, idx) => (
          <div key={idx}>
            <Link to={`/${d.link}`}>
              <MenuOption
                icon={d.icon}
                title={d.title}
                subIcon={d.subIcon}
                subOption={d.subOption}
              />
            </Link>
          </div>
        ))}

        <div className="menu-container-button">
          <button onClick={logout}>
            <span className="material-symbols-outlined">logout</span>
            <p>Đăng xuất</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
