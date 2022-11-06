import dropDownData from "../data/dropDownData";
import React from "react";

const StatusNavigation = () => {
  console.log(dropDownData);
  return (
    <div className="container ">
      <div className="row ">
        <ul className="mt-3 d-flex gap-3 ">
           {dropDownData.map((dropItem) => (
            <li key={dropItem.id}>
              <a className="fs-6 fw-semibold" href="#">
                {dropItem.name} <span className="bg-primary  p-1 align-center rounded"
                        style={{ "--bs-bg-opacity": 0.2 }} >{dropItem.count}</span>
              </a>
            </li>
          ))} 
        </ul>
      </div>
    </div>
  );
};
export default StatusNavigation;
