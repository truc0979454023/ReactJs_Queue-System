import { useRef, useState } from "react";
import "./Select.css";

type SelectProps = {
  width: number;
  bgColor?: string;
};

const Select = ({ width, bgColor }: SelectProps) => {
  const filters = ["Ngày", "Tuần", "Tháng"];
  const [data, setData] = useState(filters[0]);
  const [isDropdown, setIsDropdown] = useState(false);
  const [isActive, setIsActive] = useState(0);

  const chooseValue = (data: string, index: number) => {
    setData(data);
    setIsDropdown(false);
    setIsActive(index);
  };

  return (
    <div style={{ width: `${width}px` }} className="select-container ">
      <label
        htmlFor="select"
        className="material-symbols-outlined dropdown-icon"
      >
        arrow_drop_down
      </label>

      <div
        style={{ background: `${bgColor}` }}
        onClick={() => setIsDropdown(!isDropdown)}
        className="select"
      >
        {data}
      </div>
      {isDropdown && (
        <ul className="dropdown">
          {filters.map((filter, index) => (
            <li
              onClick={() => chooseValue(filter, index)}
              key={index}
              className={`dropdown-item ${isActive === index && "isActive"} `}
            >
              {filter}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
