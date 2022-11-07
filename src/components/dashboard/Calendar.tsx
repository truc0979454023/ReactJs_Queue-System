// import { DatePicker } from "antd";
import React from "react";
import DatePicker from "../../assets/datepicker.png";

const Calendar = () => {
  return (
    <div className="calendar-container">
      {/* <DatePicker
        autoFocus={true}
        open
        style={{ width: "100%" }}
        popupClassName="popup-calendar"
        className="calendar"
      /> */}
      <img className="calendar" src={DatePicker} alt="" />
    </div>
  );
};

export default Calendar;
