import React from "react";
import CardDashboard from "./CardDashboard";
import EmpDashboard from "./EmpDashboard";

function Dashboard() {
  return (
    <>
      <div className="bg-neutral-50">
        <CardDashboard />
        <EmpDashboard />
      </div>
    </>
  );
}

export default Dashboard;
