import { TbBell } from "react-icons/tb";
import { BsQuestionCircle, BsPersonCircle } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="container">
      <div className="row">
        <nav className="navbar navbar-expand bg-light">
          <div className="container-fluid ">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <ul className="navbar-nav d-flex gap-2 justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <TbBell size={"1.7em"} fill="true" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <BsQuestionCircle size={"1.5em"} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <BsPersonCircle size={"1.6em"} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
