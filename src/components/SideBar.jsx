import { TbCone, TbFolder } from "react-icons/tb";
import { BsGearWide } from "react-icons/bs";
import "../styles/SideBar.css";

const SideBar = () => {
  return (
    <div className="d-flex ">
      <nav className="navbar sidebar  navbar-dark bg-primary">
        <div className=" nav-container container-fluid d-flex flex-column gap-5 align-items-center justify-content-start ">
          <a className="navbar-brand" href="#">
            <TbCone size={"3em"} />
          </a>
          <a className="navbar-brand" href="#">
            <TbFolder size={"1.6em"} />
          </a>
          <a className="navbar-brand" href="#">
            <BsGearWide size={"1.5em"} />
          </a>
        </div>
      </nav>
    </div>
  );
};
export default SideBar;
