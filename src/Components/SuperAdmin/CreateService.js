import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import EmpAuthContext from "../Store/Emp-authContext";

function CreateService() {
  const empAuthCtx = useContext(EmpAuthContext);

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [department, setDepartment] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const addrequest = async () => {
      const response = await fetch("http://localhost:8080/user/services/post", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          description: description,
          department: department,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + empAuthCtx.token,
        },
      });

      if (!response.ok) {
        console.log("something is wrong");
      }

      const data = await response.json();
      console.log(data);

      if (data.msg === "Service Added Successfully") {
        navigate("/superadmin/decline");
      }
    };

    addrequest();
  };

  return (
    <>
      <div className="bg-neutral-50">
        <div className="text-3xl text-center  text-blue-500 font-bold">
          Services
        </div>

        <div className="m-5 mx-96">
          <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-md p-5 mb-20">
            <form onSubmit={formSubmitHandler}>
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
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </div>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    type="text"
                    className="w-full pl-14 bg-white border border-blue-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                  />
                </div>
              </div>

              <div className="text-xl font-bold text-blue-500 my-3">
                <h4 className="mb-2">Department</h4>

                <div className="grid grid-cols-4">
                  <div className="flex items-center text-2xl">
                    <input
                      value="ict"
                      onChange={(e) => setDepartment(e.target.value)}
                      id="4"
                      type="radio"
                      name="priority"
                      className="w-4 h-4 focus:ring-2 focus:ring-blue-300"
                    />
                    <label
                      for="4"
                      className="block ml-2 font-bold text-gray-900"
                    >
                      Ict
                    </label>
                  </div>

                  <div className="flex items-center text-2xl">
                    <input
                      value="facility"
                      onChange={(e) => setDepartment(e.target.value)}
                      id="5"
                      type="radio"
                      name="priority"
                      className="w-4 h-4 focus:ring-2 focus:ring-blue-300"
                    />
                    <label
                      for="5"
                      className="block ml-2 font-bold text-gray-900"
                    >
                      Facility
                    </label>
                  </div>

                  <div className="flex items-center text-2xl">
                    <input
                      value="investor"
                      onChange={(e) => setDepartment(e.target.value)}
                      id="6"
                      type="radio"
                      name="priority"
                      className="w-4 h-4 focus:ring-2 focus:ring-blue-300"
                    />
                    <label
                      for="6"
                      className="block ml-2 font-bold text-gray-900"
                    >
                      Investor
                    </label>
                  </div>

                  <div className="flex items-center text-2xl">
                    <input
                      value="general"
                      onChange={(e) => setDepartment(e.target.value)}
                      id="4"
                      type="radio"
                      name="priority"
                      className="w-4 h-4 focus:ring-2 focus:ring-blue-300"
                    />
                    <label
                      for="4"
                      className="block ml-2 font-bold text-gray-900"
                    >
                      General
                    </label>
                  </div>
                </div>
              </div>

              <div className="text-xl font-bold text-blue-500 my-3">
                <h4 className="mb-2">Description</h4>
                <div>
                  <div>
                    <textarea
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      rows="5"
                      className="block p-2.5 w-full text-lg text-gray-900 bg-white rounded-lg border border-blue-300 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Description"
                    >
                      {description}
                    </textarea>
                  </div>
                </div>
              </div>

              <div className="w-44 items-center text-center text-blue-500 rounded-lg hover:bg-blue-400 my-5 hover:text-white p-2 text-xl font-bold cursor-pointer tracking-wider border">
                <button>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateService;
