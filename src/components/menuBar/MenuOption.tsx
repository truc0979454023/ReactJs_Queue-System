import React from "react";

type MenuOptionProps = {
  icon: string;
  title: string;
  subIcon?: string;
  subOption?: string[];
};

const MenuOption = ({ icon, title, subIcon, subOption }: MenuOptionProps) => {
  return (
    <div className="menu-option">
      <span className="material-symbols-outlined menu-option-icon">{icon}</span>
      <span className="menu-option-title">{title}</span>
      {subIcon && (
        <span className="material-symbols-outlined menu-option-icon">
          {subIcon}
        </span>
      )}
      <ul className="menu-suboption">
        {subOption?.map((so, index) => (
          <li key={index}>{so}</li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOption;
