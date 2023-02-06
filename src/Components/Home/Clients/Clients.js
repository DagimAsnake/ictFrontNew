import React, { useState, useEffect } from "react";
import Circleimg from "./Circleimg";

function Clients() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const addreport = async () => {
      const response = await fetch("http://localhost:8080/clients");

      if (!response.ok) {
        console.log("something is wrong");
      }

      const data = await response.json();
      console.log(data);
      setData(data);
      setIsLoading(false);
    };

    addreport();
  }, []);

  return (
    <div className="mb-[219px]">
      <div>
        <p className="text-[36px] font-[300] leading-[22px] text-center underline mb-[56px] text-[#00000094]">
          Clients
        </p>
      </div>

      <div className="grid grid-cols-5 pl-[178px] h-[198px] bg-[#d9d9d92e] items-center">
        {isLoading && <h1>Loading</h1>}
        {!isLoading &&
          data.msg.map((d) => <Circleimg key={d._id} profile={d.logo} />)}
      </div>
    </div>
  );
}

export default Clients;
