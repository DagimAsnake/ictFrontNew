import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import EmpAuthContext from "../Store/Emp-authContext";

function RequestInt() {
  const empAuthCtx = useContext(EmpAuthContext);

  const navigate = useNavigate();

  const [workLoc, setWorkLoc] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const addrequest = async () => {
      const response = await fetch(
        "http://localhost:8080/employee/internalRequest",
        {
          method: "POST",
          body: JSON.stringify({
            description: desc,
            taskType: category,
            location: workLoc,
            requested_date: date,
            department: category,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + empAuthCtx.token,
          },
        }
      );

      if (!response.ok) {
        console.log("something is wrong");
      }

      const data = await response.json();
      console.log(data);

      if (data.msg === "Task submitted Successfully") {
        navigate("/employee/task");
      }
    };

    addrequest();
  };

  return (
    <>
      <div className="bg-neutral-50">
        <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-md p-5 mb-20">
          <div className="text-3xl text-center  text-blue-500 font-bold">
            Information Communication Technology Park Service Internal Request
            Form
          </div>
        </div>

        <div className="border-x-4 mx-10 border-b-4 rounded-lg">
          <form onSubmit={formSubmitHandler}>
            <div className="m-10">
              <div className="w-1/2 bg-white border border-gray-200 rounded-2xl shadow-md p-4 text-2xl font-bold text-blue-500 my-5">
                Requester Information
              </div>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <h4 className="mb-2">Work Location</h4>
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
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                    <input
                      value={workLoc}
                      onChange={(e) => {
                        setWorkLoc(e.target.value);
                      }}
                      placeholder="Location"
                      type="text"
                      class="w-full pl-14 bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                    />
                  </div>
                </div>
              </div>

              <div className="w-1/2 bg-white border border-gray-200 rounded-2xl shadow-md p-4 text-2xl font-bold text-blue-500 my-5">
                Department Service Category
              </div>
              <div className="grid grid-cols-3 gap-10">
                <div className="flex">
                  <div className="flex items-center text-2xl">
                    <input
                      value="ict"
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                      id="3"
                      type="radio"
                      name="department"
                      className="w-4 h-4 focus:ring-2 focus:ring-blue-300"
                    />
                    <label
                      for="3"
                      className="block ml-2 font-bold text-gray-900"
                    >
                      Ict
                    </label>

                    <select className="ml-2 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ">
                      <option value="Internet Service" selected>
                        Internet Service
                      </option>
                      <option value="VOI (Voice Over Internet)">
                        VOI (Voice Over Internet)
                      </option>
                      <option value="Web Hosting">Web Hosting</option>
                      <option value="Video Conference">Video Conference</option>
                      <option value="Enterprise Email System">
                        Enterprise Email System
                      </option>
                      <option value="Collocation">Collocation</option>
                      <option value="ICT Support">ICT Support</option>
                    </select>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex items-center text-2xl">
                    <input
                      value="facility"
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                      id="2"
                      type="radio"
                      name="department"
                      className="w-4 h-4 focus:ring-2 focus:ring-blue-300"
                    />
                    <label
                      for="2"
                      className="block ml-2 font-bold text-gray-900"
                    >
                      Facility
                    </label>
                    <select className="ml-2 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ">
                      <option value="General Maintenance" selected>
                        General Maintenance
                      </option>
                      <option value="Sewer">Sewer</option>
                      <option value="Electricity">Electricity</option>
                      <option value="Water">Water</option>
                    </select>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center text-2xl">
                    <input
                      value="investor"
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                      id="1"
                      type="radio"
                      name="department"
                      className="w-4 h-4 focus:ring-2 focus:ring-blue-300"
                    />
                    <label
                      for="1"
                      className="block ml-2 font-bold text-gray-900"
                    >
                      Investor follow up & Support
                    </label>
                  </div>
                  <div>
                    <select className="ml-2 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ">
                      <option value="Make Promotion" selected>
                        Make Promotion
                      </option>
                      <option value="Follow Up & Support Investor">
                        Follow Up & Support Investor
                      </option>
                      <option value="Collect Plan Report">
                        Collect Plan Report
                      </option>
                      <option value="Compel Plan & Report">
                        Compel Plan & Report
                      </option>
                      <option value="Organize Social Responsibilty Activities">
                        Organize Social Responsibilty Activities
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="w-1/2 bg-white border border-gray-200 rounded-lg rounded-t-2xl shadow-md p-4 text-2xl font-bold text-blue-500 my-5">
                Description of Requested Work
              </div>
              <div>
                <div>
                  <textarea
                    onChange={(e) => {
                      setDesc(e.target.value);
                    }}
                    rows="5"
                    className="block p-2.5 w-full text-lg text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Description"
                  >
                    {desc}
                  </textarea>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-10">
                <div>
                  <h4 className="w-2/5 bg-white border border-gray-200 rounded-2xl shadow-md p-4 text-2xl font-bold text-blue-500 my-5">
                    Date of Request
                  </h4>
                  <input
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    type="date"
                    className="w-full pl-14 bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                  />
                </div>
              </div>

              <div className="w-44 text-center text-blue-500 rounded-lg hover:bg-blue-400 my-10 hover:text-white p-2 text-xl font-bold cursor-pointer tracking-wider border">
                <button> Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RequestInt;
