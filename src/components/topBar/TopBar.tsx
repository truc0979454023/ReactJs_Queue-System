import React, { useState } from "react";
import "./TopBar.css";
import avatar from "../../assets/avatar.jpg";
import Notify from "./Notify";

type TopBarProps = {
  title: string;
};

const TopBar = ({ title }: TopBarProps) => {
  const [showNotify, setShowNotify] = useState<boolean>(false);
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <p className="topbar-title">{title}</p>
      </div>
      <div className="topbar-right">
        <div onClick={() => setShowNotify(!showNotify)} className="topbar-icon">
          <span className="material-symbols-outlined">notifications</span>
          {showNotify && <Notify />}
        </div>
        <div className="topbar-right-info">
          <img className="topbar-right-avatar" src={avatar} alt="" />
          <div className="topbar-right-info-text">
            <p className="topbar-right-hello">Xin chào</p>
            <p className="topbar-right-name">Vương Minh Trực</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
