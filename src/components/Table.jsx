import { BsInfoCircleFill, BsPlusSquareDotted } from "react-icons/bs";
import { FcBusinessman, FcBusinesswoman, FcManager } from "react-icons/fc";
import { IoMdArrowDropright } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import projectdata from "../data/projectData";
import tableHeading from "../data/tableHeading";

const Table = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(projectdata);
  }, [projectdata]);
  return (
    <div>
      <table className="table table-light table-hover">
        <thead>
          <tr className="table-light ">
            {tableHeading.map((data) => {
              return (
                <th className="text-muted " scope="col">
                  {data.name} {data.symbol ? <BsInfoCircleFill /> : <></>}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {projects.map(
            ({
              id,
              projectName,
              resources,
              status,
              lastUpdate,
              projectManager,
              projectTimeStart,
              projectTimeEnd,
              estimation
            }) => {
              return (
                <tr className="align-middle" key={id}>
                  <th scope="row">{id}</th>
                  <td
                    className="text-primary fw-semibold"
                    style={{ "--bs-text-opacity": 0.7 }}
                  >
                    {projectName}
                  </td>
                  <td>
                    {projectManager === "male" ? (
                      <FcBusinessman size={"1.5em"} />
                    ) : projectManager === "female" ? (
                      <FcBusinesswoman size={"1.5em"} />
                    ) : (
                      <FcManager size={"1.5em"} />
                    )}
                  </td>
                  <td>
                    <span
                      className={`p-1 rounded text-start ${
                        status === "On track"
                          ? "text-success bg-success"
                          : status === "On hold"
                          ? "text-seconday bg-secondary"
                          : status === "At risk"
                          ? "text-danger bg-danger"
                          : "text-warning bg-warning"
                      }`}
                      style={{ "--bs-bg-opacity": 0.2 }}
                    >
                      ● {status}
                    </span>
                  </td>
                  <td>
                    <IoDocumentTextOutline /> {lastUpdate}
                  </td>
                  <td>
                    {resources === 0 ? (
                      <span
                        className="bg-primary p-1 align-center rounded"
                        style={{ "--bs-bg-opacity": 0.2 }}
                      >
                        <BsPlusSquareDotted size={"1.2em"} />
                      </span>
                    ) : (
                      <span
                        className="bg-primary rounded p-1"
                        style={{ "--bs-bg-opacity": 0.2 }}
                      >
                        {resources}
                      </span>
                    )}
                  </td>
                  <td>
                    <p
                      className="bg-primary rounded mb-0"
                      style={{ "--bs-bg-opacity": 0.2 }}
                    >
                      {projectTimeStart ? (
                        projectTimeStart
                      ) : (
                        <span className="pe-4">-</span>
                      )}
                      <IoMdArrowDropright size={"1.2em"} />
                      {projectTimeEnd ? (
                        projectTimeEnd
                      ) : (
                        <span className="ps-4">-</span>
                      )}
                    </p>
                  </td>
                  <td>{estimation}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
