import React from "react";

type MenuOptionProps = {
  icon: string;
  title: string;
};

const MenuOption = ({ icon, title }: MenuOptionProps) => {
  return (
    <div className="menu-option">
      <span className="material-symbols-outlined menu-option-icon">{icon}</span>
      <span className="menu-option-title">{title}</span>
    </div>
  );
};

export default MenuOption;
