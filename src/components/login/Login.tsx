import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import loginImage from "../../assets/login-img.svg";
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string | number>("");
  const [isCheck, setIsCheck] = useState<boolean>(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!username.trim() || !password) {
      setIsCheck(true);
    } else {
      setIsCheck(false);
      localStorage.setItem("firstLogin", "true");
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <img src={logo} alt="logo" className="login-content-logo" />
        <form className="login-form">
          <Input
            setData={setUsername}
            title="Tên đăng nhập *"
            id="username"
            type="text"
            className=""
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            setData={setPassword}
            title="Mật khẩu *"
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {isCheck ? (
            <p className="login-form-text">
              <span className="material-symbols-outlined login-form-text-icon">
                error
              </span>
              Sai mật khẩu hoặc tên đăng nhập
            </p>
          ) : (
            <Link to="/forget">
              <p className="login-form-text">Quên mật khẩu?</p>
            </Link>
          )}
        </form>
        <Button handleSubmit={handleSubmit} title="Đăng nhập" />

        {isCheck && (
          <Link to="/forget">
            <p className={`login-form-text ${isCheck && "active"}`}>
              Quên mật khẩu?
            </p>
          </Link>
        )}
      </div>
      <div className="login-images">
        <img src={loginImage} alt="" />
        <div className="login-iamges-text">
          <h4>Hệ thống</h4>
          <h2>Quản lý xếp hàng</h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
