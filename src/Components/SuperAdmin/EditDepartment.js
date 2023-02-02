import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EmpAuthContext from "../Store/Emp-authContext";

function EditDepartment() {
  const empAuthCtx = useContext(EmpAuthContext);

  const navigate = useNavigate();

  const { depid } = useParams();

  const [name, setName] = useState("");

  useEffect(() => {
    const singleFetch = async () => {
      const response = await fetch(
        `http://localhost:8080/user/department/details/` + depid,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + empAuthCtx.token,
          },
        }
      );
      if (!response.ok) {
        console.log("Something went wrong");
      }
      const data = await response.json();

      setName(data.msg.title);
    };

    singleFetch();
  }, [depid, empAuthCtx]);

  console.log(name);

  const submitHandler = (e) => {
    e.preventDefault();

    const signupDepartment = async () => {
      const response = await fetch(
        `http://localhost:8080/user/department/` + depid,
        {
          method: "PUT",
          body: JSON.stringify({
            title: name,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        console.log("something is wrong");
      }

      const data = await response.json();

      console.log(data);

      if (data.msg === "Department Updated Successfully") {
        navigate("/superadmin/departments");
      }
    };

    signupDepartment();
  };

  return (
    <>
      <div className="bg-neutral-50 bg">
        <div className="text-3xl text-center text-blue-500 font-bold">
          Edit Department
        </div>
        <div className="m-32 mx-96">
          <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-md p-5 mb-20">
            <form onSubmit={submitHandler}>
              <div className="text-xl font-bold text-blue-500 my-3">
                <h4 className="mb-2">Title</h4>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-8 h-8 text-blue-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Department Name"
                    type="text"
                    className="w-full pl-14 bg-white border border-blue-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                  />
                </div>
              </div>

              <div className="w-44 items-center text-center text-blue-500 rounded-lg hover:bg-blue-400 my-5 hover:text-white p-2 text-xl font-bold cursor-pointer tracking-wider border">
                <button> Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditDepartment;