import React from "react";
import Search from "../../common/search/Search";
import Select from "../../common/select/Select";
import Page from "../main/Page";
import "./Device.css";
import Table from "./Table";

const Deivce = () => {
  return (
    <Page title="Thiết bị">
      <div className="device">
        <div>
          <h3 className="device-title">Danh sách thiết bị</h3>
          <div className="device-container">
            <div className="device-container-head">
              <div className="device-container-filter">
                <div className="device-container-filter-item">
                  <p>Trạng thái hoạt động</p>
                  <Select width={300} bgColor="white" />
                </div>

                <div className="device-container-filter-item">
                  <p>Trạng thái kết nối</p>
                  <Select width={300} bgColor="white" />
                </div>
              </div>

              <div className="device-container-search">
                <p>Từ khóa</p>
                <Search width={300} />
              </div>
            </div>

            <div className="device-container-body">
              <Table />
            </div>
            <div className="device-container-body-adddevice">
              <div className="adddevice-icon">
                <span className="material-symbols-outlined">add</span>
              </div>
              <p>Thêm thiết bị</p>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Deivce;
