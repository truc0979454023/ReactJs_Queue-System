import "./Page.css";
import Dashboard from "../dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Deivce from "../device/Deivce";
import Login from "../login/Login";
import MenuBar from "../menuBar/MenuBar";
import TopBar from "../topBar/TopBar";

type PageProps = {
  children: React.ReactNode;
  title: string;
};

const Page = ({ children, title }: PageProps) => {
  return (
    <div className="page">
      <MenuBar />
      <TopBar title={title} />
      <div className="body">{children}</div>
    </div>
  );
};

export default Page;
