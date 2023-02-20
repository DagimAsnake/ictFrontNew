import React, { useEffect, useState, useContext } from "react";
import EmpAuthContext from "../Store/Emp-authContext";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", Request: 1 },
  { name: "Feb", Request: 3 },
  { name: "Mar", Request: 2 },
  { name: "Apr", Request: 9 },
  { name: "May", Request: 8 },
  { name: "Jun", Request: 3 },
  { name: "July", Request: 4 },
  { name: "Aug", Request: 3 },
  { name: "Sep", Request: 1 },
  { name: "Oct", Request: 4 },
  { name: "Nov", Request: 6 },
  { name: "Dec", Request: 5 },
];

export default function ChartSup() {
  const empAuthCtx = useContext(EmpAuthContext);

  // const [requestEmployee, setRequestEmployee] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      const response = await fetch(
        "http://localhost:8080/task/getannualrequest",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + empAuthCtx.token,
          },
        }
      );
      const data = await response.json();
      console.log(data);
    };
    fetchEmployee();
  }, [empAuthCtx]);
  return (
    <>
      <div className="my-10">
        <BarChart
          className="mx-10 bg-white shadow-md"
          width={850}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 5, right: 5 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Request" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </>
  );
}
