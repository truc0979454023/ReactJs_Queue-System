import React from "react";

const Notify = () => {
  const data = [
    {
      name: "Vương Minh Trực",
      content: "Thời gian nhận số: 12h20 ngày 30/12/2022",
    },
    {
      name: "Trần Quốc Anh",
      content: "Thời gian nhận số: 12h20 ngày 30/12/2022",
    },
    {
      name: "Nguyễn Thị Lệ Thu",
      content: "Thời gian nhận số: 12h20 ngày 30/12/2022",
    },
    {
      name: "Huấn Hoa Hồng",
      content: "Thời gian nhận số: 12h20 ngày 30/12/2022",
    },
    {
      name: "Lộc Phụ Hồ",
      content: "Thời gian nhận số: 12h20 ngày 30/12/2022",
    },
    {
      name: "Thông Soái Ca",
      content: "Thời gian nhận số: 12h20 ngày 30/12/2022",
    },
  ];

  return (
    <div className="notify-container">
      <h3 className="notify-title">Thông báo</h3>
      <div className="notify-content">
        {data.map((d, index) => (
          <div className="notify-content-item">
            <p className="notify-content-item-name">Nguời dùng: {d.name}</p>
            <p className="notify-content-item-content">{d.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notify;
