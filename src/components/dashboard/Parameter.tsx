import React from "react";

type ParamterProps = {
  data: {
    icon: string;
    title: string;
    value: number;
    percent: number;
    colorIcon: string;
    colorBgIcon: string;
  };
};

const Parameter = ({ data }: ParamterProps) => {
  return (
    <div className="parameter-container">
      <div className="parameter-title">
        <div
          className="parameter-title-icon"
          style={{ background: `${data.colorBgIcon}` }}
        >
          <span
            className="material-symbols-outlined"
            style={{ color: `${data.colorIcon}` }}
          >
            {data.icon}
          </span>
        </div>
        <div className="parameter-title-text">{data.title}</div>
      </div>
      <div className="parameter-number">
        <p className="parameter-number-value">{data.value}</p>
        <div
          style={{ background: `${data.percent > 0 ? "#ffefd9" : "#fbe2e2"}` }}
          className="paramter-number-percent"
        >
          <span
            style={{ color: `${data.percent > 0 ? "#FF9138" : "#E73F3F"}` }}
            className="material-symbols-outlined"
          >
            arrow_upward
          </span>
          <p style={{ color: `${data.percent > 0 ? "#FF9138" : "#E73F3F"}` }}>
            {data.percent > 0 ? data.percent : -data.percent} %
          </p>
        </div>
      </div>
    </div>
  );
};

export default Parameter;
