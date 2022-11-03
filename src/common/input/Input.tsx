import React, { useState, useEffect } from "react";
import "./Input.css";

type InputProps = {
  setData: React.Dispatch<React.SetStateAction<any>>;
  title: string;
  className?: string;
} & React.ComponentProps<"input">;

const Input = ({ setData, title, id, type, className }: InputProps) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [typeInput, setTypeInpt] = useState(type);

  useEffect(() => {
    if (type === "password") {
      setIsPassword(true);
      if (isShow) setTypeInpt("text");
      else setTypeInpt(type);
    }
  }, [isShow, type]);
  return (
    <div className={`${className}`} style={{ marginBottom: "24px" }}>
      <label className="input-label" htmlFor={id}>
        {title}
      </label>
      <div className="input">
        <input
          id={id}
          type={typeInput}
          onChange={(e) => setData(e.target.value)}
        />
        {isPassword && (
          <div>
            {isShow ? (
              <span
                className="material-symbols-outlined input-icon"
                onClick={() => setIsShow(false)}
              >
                visibility
              </span>
            ) : (
              <span
                className="material-symbols-outlined input-icon"
                onClick={() => setIsShow(true)}
              >
                visibility_off
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
