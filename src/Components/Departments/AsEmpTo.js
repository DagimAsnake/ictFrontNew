import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import DepAuthContext from "../Store/Dep-authContext";

function AsEmpTo({ priority }) {
  const depAuthCtx = useContext(DepAuthContext);

  const { taskid, userid } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const AssignedTask = async () => {
      const response = await fetch(
        `http://localhost:8080/task/${taskid}/${userid}`,
        {
          method: "post",
          body: JSON.stringify({
            priority: priority,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + depAuthCtx.token,
          },
        }
      );
      if (!response.ok) {
        console.log("Something went wrong");
      }
      const data = await response.json();

      console.log(priority);

      console.log(data);
      setIsLoading(false);
    };

    AssignedTask();
  }, [taskid, userid, depAuthCtx, priority]);

  return (
    <>
      <div className="bg-neutral-50">
        <div className="text-3xl text-center  text-blue-500 font-bold">
          {isLoading && <h4>Loading...</h4>}
          {!isLoading && <h1>Task Assigned successfully</h1>}
        </div>
      </div>
    </>
  );
}

export default AsEmpTo;
