import React from "react";
import "./Dashboard.css";
import Select from "../../common/select/Select";
import Chart from "./Chart";
import Parameter from "./Parameter";
import Statistical from "./Statistical";
import Calendar from "./Calendar";
import Page from "../main/Page";

const Dashboard = () => {
  const parameterData = [
    {
      icon: "calendar_today",
      title: "Số thứ tự đã cấp",
      value: 4221,
      percent: 32.21,
      colorIcon: "#6493F9",
      colorBgIcon: "#e8effe",
    },

    {
      icon: "event_available",
      title: "Số thứ tự đã sử dụng",
      value: 3721,
      percent: -32.41,
      colorIcon: "#35C75A",
      colorBgIcon: "#e1f7e6",
    },

    {
      icon: "call",
      title: "Số thứ tự đang chờ",
      value: 3541,
      percent: 26.57,
      colorIcon: "#FFAC6A",
      colorBgIcon: "#fff3e9",
    },

    {
      icon: "bookmark",
      title: "Số thứ tự đã bỏ qua",
      value: 4221,
      percent: -19.15,
      colorIcon: "#F86D6D",
      colorBgIcon: "#fee9e9",
    },
  ];

  const statisticalData = [
    {
      icon: "calendar_today",
      title: "Thiết bị",
      value: 4221,
      percent: 90,
      color: "#6493F9",
      online: 3999,
      offline: 254,
    },

    {
      icon: "event_available",
      title: "Dịch vụ",
      value: 726,
      percent: 76,
      color: "#35C75A",
      online: 210,
      offline: 266,
    },

    {
      icon: "call",
      title: "Cấp số",
      value: 3541,
      percent: 86,
      color: "#FFAC6A",
      online: 1236,
      offline: 266,
      miss: 12,
    },
  ];

  return (
    <Page title="Dashboard">
      <div className="dashboard-container">
        <div className="dash-left">
          <h3 className="dash-left-title">Biếu đồ cấp số</h3>
          <div className="dash-left-parameter">
            {parameterData.map((data, index) => (
              <div key={index}>
                <Parameter data={data} />
              </div>
            ))}
          </div>
          <div className="dash-left-chart">
            <div className="dash-left-chart-header">
              <div className="dash-left-chart-header-title">
                <p>Bảng thống kê theo ngày</p>
                <span>Tháng 11/2021</span>
              </div>
              <div className="dash-left-chart-header-filter">
                <span className="dash-left-chart-header-filter-text">
                  Xem theo
                </span>
                <Select width={106} />
              </div>
            </div>

            <div className="dash-left-chart-body">
              <Chart />
            </div>
          </div>
        </div>
        <div className="dash-right">
          <div className="dash-right-content">
            <h3 className="dash-right-title">Tổng quan</h3>
            <div>
              {statisticalData.map((data) => (
                <Statistical data={data} />
              ))}
            </div>

            <Calendar />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Dashboard;
