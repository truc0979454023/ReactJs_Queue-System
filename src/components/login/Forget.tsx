import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";
import ForgetImg from "../../assets/forget-login-img.svg";

const Forget = () => {
  const [password, setPassword] = useState<string | number>("");
  const [cfpassword, setCfPassword] = useState<string | number>("");
  const [email, setEmail] = useState<string>("");
  const [isCheck, setIsCheck] = useState<boolean>(false);

  const checkEmail = () => {
    return (
      <>
        <form className="login-form">
          <h4 className="login-content-title">Đặt lại mật khẩu</h4>
          <Input
            setData={setEmail}
            title="Vui lòng nhập email để đặt lại mật khẩu cho bạn *"
            id="username"
            type="text"
          />
        </form>
        <div className="login-button">
          <Button title="Huỷ" className={"display-button"} />
          <Button title="Tiếp tục" handleSubmit={() => setIsCheck(true)} />
        </div>
      </>
    );
  };

  const changePassword = () => {
    return (
      <>
        <form className="login-form">
          <h4 className="login-content-title">Đặt lại mật khẩu mới</h4>
          <Input
            setData={setPassword}
            title="Mật khẩu "
            id="password"
            type="password"
          />

          <Input
            setData={setCfPassword}
            title="Nhập lại mật khẩu"
            id="cf_password"
            type="password"
          />
        </form>
        <div className="login-button">
          <Button title="Xác nhận" />
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-content">
          <img src={logo} alt="logo" className="login-content-logo" />
          {isCheck ? changePassword() : checkEmail()}
        </div>
        <div className="login-images">
          <img src={ForgetImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Forget;
