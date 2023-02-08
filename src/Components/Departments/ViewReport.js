import React, { useEffect, useState, useContext } from "react";
import DepAuthContext from "../Store/Dep-authContext";
import { useParams } from "react-router-dom";
import Download from "./Download";
import { saveAs } from "file-saver";
import kena from "../../assets/kena.jpg";

function ViewReport() {
  const { name } = useParams();

  const depAuthCtx = useContext(DepAuthContext);

  const [requestData, setRequestData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      const response = await fetch(
        `http://localhost:8080/user/report/${name}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + depAuthCtx.token,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setRequestData(data.msg);
      setIsLoading(false);
    };
    fetchEmployee();
  }, [depAuthCtx, name]);

  // const downloading = () => {
  //   saveAs(``, "image.jpg");
  // };

  return (
    <>
      <div className="bg-neutral-50">
        <div className="text-3xl text-center  text-blue-500 font-bold">
          Monthly Reports
        </div>
        <div className="m-16">
          {isLoading && <h3>Loading.....</h3>}
          {!isLoading && requestData.length <= 0 && (
            <h3 className="mt-5 pt-5">There are no reports for now.</h3>
          )}

          {!isLoading && requestData.length > 0 && (
            <div className="w-full bg-neutral-300 border border-gray-200 rounded-lg rounded-t-2xl shadow-md mb-20">
              <div className="grid grid-cols-3 text-center p-3 border-b-2 mx-5">
                <h6 className="text-lg">Filename</h6>
                <h6 className="text-lg">Download File</h6>
                <h6 className="text-lg">Download Image</h6>
              </div>
              <div className="bg-white rounded-lg rounded-t-2xl">
                {!isLoading &&
                  requestData.map((task) => {
                    return (
                      <div>
                        <div
                          className="grid grid-cols-3 text-center py-3 border-b-2"
                          key={task._id}
                        >
                          <p className="">{task.month}</p>
                          {/* <Link
                            to={`/superadmin/viewreport/download`}
                            className="text-blue-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-8 h-8  inline-block mr-1"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                              />
                            </svg> */}
                          <Download data={task} />
                          {/* </Link> */}
                          <img
                            className="w-[65px] h-[65px] mb-[25px]"
                            src={
                              "http://localhost:8080/" + task.additional_file
                            }
                            alt="additional file"
                            onClick={() =>
                              saveAs(
                                `http://localhost:8080/ + ${task.additional_file}`,
                                "image.jpg"
                              )
                            }
                          />
                        </div>
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

export default ViewReport;
