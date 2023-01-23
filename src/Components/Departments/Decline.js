import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DepAuthContext from "../Store/Dep-authContext";

function Decline() {
  const navigate = useNavigate();

  const depAuthCtx = useContext(DepAuthContext);

  const { id } = useParams();
  const [reason, setReason] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const DeclineHandler = async () => {
      const response = await fetch(`http://localhost:8080/task/${id}/decline`, {
        method: "POST",
        body: JSON.stringify({
          reason: reason,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + depAuthCtx.token,
        },
      });
      if (!response.ok) {
        console.log("Something went wrong");
      }
      const data = await response.json();

      console.log(data);

      if (data.msg === "Task declined Successfully") {
        navigate("/department/requests");
      }
    };

    DeclineHandler();
  };

  return (
    <>
      <div className="bg-neutral-50 bg">
        <div className="text-3xl text-center text-blue-500 font-bold">
          Enter Reason for Decline the Request
        </div>
        <div className="border-x-4 mx-10 border-b-4 rounded-lg">
          <div className="m-10">
            <div className="w-1/2 bg-white border border-gray-200 rounded-lg rounded-t-2xl shadow-md p-4 text-2xl font-bold text-blue-500 my-5">
              Reason
            </div>
            <div>
              <div>
                <textarea
                  onChange={(e) => {
                    setReason(e.target.value);
                  }}
                  rows="5"
                  className="block p-2.5 w-full text-lg text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Description"
                >
                  {reason}
                </textarea>
              </div>
            </div>

            <div className="w-44 text-center text-blue-500 rounded-lg hover:bg-blue-400 my-10 hover:text-white p-2 text-xl font-bold cursor-pointer tracking-wider border">
              <button onClick={submitHandler}> Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Decline;
