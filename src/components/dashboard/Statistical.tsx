import { Progress } from "antd";
import React from "react";

type StatisticalProps = {
  data: {
    icon: string;
    title: string;
    value: number;
    percent: number;
    color: string;
    online: number;
    offline: number;
    miss?: number;
  };
};

const Statistical = ({ data }: StatisticalProps) => {
  return (
    <div className="statistical">
      <div className="statistical-left">
        <Progress
          type="circle"
          strokeColor={data.color}
          percent={data.percent}
          width={60}
        />
        <div className="statistical-left-param">
          <p className="statistical-left-value">{data.value}</p>
          <div className="statistical-left-title">
            <span
              style={{ color: `${data.color}` }}
              className="material-symbols-outlined statistical-left-title-icon"
            >
              {data.icon}
            </span>
            <p
              style={{ color: `${data.color}` }}
              className="statistical-left-title-text"
            >
              {data.title}
            </p>
          </div>
        </div>
      </div>
      <div className="statistical-right">
        <p className="statistical-right-online">
          <div className="dot"></div>
          Đang hoạt động:{" "}
          <span style={{ color: `${data.color}` }}>{data.online}</span>
        </p>
        <p className="statistical-right-offline">
          <div className="dot"></div>
          Ngưng hoạt động:{" "}
          <span style={{ color: `${data.color}` }}>{data.offline}</span>
        </p>
        {data.miss && (
          <p className="statistical-right-miss">
            <div className="dot"></div>
            Bỏ qua: <span style={{ color: `${data.color}` }}>{data.miss}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Statistical;
