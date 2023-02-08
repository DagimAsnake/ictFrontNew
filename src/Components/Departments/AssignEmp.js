import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Star.css";
import DepAuthContext from "../Store/Dep-authContext";
import { useParams } from "react-router-dom";
import AsEmpTo from "./AsEmpTo";

function Assign() {
  const { taskid } = useParams();

  const depAuthCtx = useContext(DepAuthContext);

  const [requestEmployee, setRequestEmployee] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [priority, setPriority] = useState("");

  useEffect(() => {
    const fetchEmployee = async () => {
      const response = await fetch("http://localhost:8080/user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + depAuthCtx.token,
        },
      });
      const data = await response.json();
      console.log(data);
      setRequestEmployee(data.msg);
      setIsLoading(false);
      console.log(taskid);
    };
    fetchEmployee();
  }, [depAuthCtx, taskid, priority]);

  const assignHandler = () => {
    <AsEmpTo priority={priority} />;
  };

  console.log(priority);

  return (
    <>
      <div className="bg-neutral-50">
        <div className="text-3xl text-center  text-blue-500 font-bold">
          Assign To
        </div>
        <div className="m-16">
          {isLoading && <h3>Loading......</h3>}
          {!isLoading && requestEmployee.length <= 0 && (
            <h3 className="mt-5">There are no Employees.</h3>
          )}
          {!isLoading && requestEmployee.length > 0 && (
            <div className="w-full bg-blue-500 border border-gray-200 rounded-lg rounded-t-2xl shadow-md mb-20">
              <div className="grid grid-cols-2">
                <h6 className="text-white text-lg m-3">Employee Lists</h6>
                <div className="flex items-center text-2xl">
                  <label for="2" className="block text-white">
                    Task Priority
                  </label>
                  <select className="ml-2 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ">
                    <option
                      value="High"
                      onChange={(e) => setPriority(e.target.value)}
                    >
                      High
                    </option>
                    <option
                      value="Medium"
                      onChange={(e) => setPriority(e.target.value)}
                    >
                      Medium
                    </option>
                    <option
                      value="Low"
                      onChange={(e) => setPriority(e.target.value)}
                    >
                      Low
                    </option>
                  </select>
                </div>
              </div>
              <div className="bg-white rounded-lg rounded-t-2xl">
                {!isLoading &&
                  requestEmployee.map((emp) => {
                    return (
                      <div className="grid grid-cols-3 p-3 border-b-2 mx-5 items-center">
                        <p className="" key={emp._id}>
                          {emp.firstName} {emp.lastName}
                        </p>
                        <p className="starability-result" data-rating={3}></p>

                        <p className="flex justify-between">
                          <Link
                            to={`/department/employee/${emp._id}`}
                            className="w-44 text-center text-blue-500 rounded-lg hover:bg-blue-400 hover:text-white p-2 text-xl font-bold cursor-pointer tracking-wider border"
                          >
                            Details
                          </Link>
                          <Link
                            to={`/department/assign/${taskid}/${emp._id}`}
                            className="w-44 text-center text-green-500 rounded-lg hover:bg-green-400 hover:text-white p-2 text-xl font-bold cursor-pointer tracking-wider border"
                          >
                            <button onClick={assignHandler}>Assign Task</button>
                          </Link>
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Assign;
