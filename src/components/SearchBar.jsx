import { BsCalendarRange } from "react-icons/bs";
import { TbFilter } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import dropDownData from "../data/dropDownData";

const SearchBar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-between">
          <div className="d-flex  gap-3">
            <button className="btn border rounded">
              <BsCalendarRange size={"1.5em"} />
            </button>
            <div
              className="btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div
                className="btn-group me-2"
                role="group"
                aria-label="Second group"
              >
                <button
                  type="button"
                  className="btn border rounded-start dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="dropdown">
                    <ul className="dropdown-menu">
                      {dropDownData.map((item) => {
                        return (
                          <li key={item.id}>
                            <a className="dropdown-item" href="#">
                              {item.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <TbFilter size={"1.9em"} /> All
                </button>
                <button className="btn border rounded-end">
                  <form className="d-flex" role="search">
                    <input
                      className="form-control "
                      type="search"
                      placeholder="🔍Search"
                      aria-label="Search"
                    />
                  </form>
                </button>
              </div>
            </div>
          </div>
          <button className="btn btn-primary">
            <IoMdAdd size={"1.5em"} /> New Project
          </button>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
