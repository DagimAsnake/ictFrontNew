import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import InvAuthContext from "./Components/Store/Inv-authContext";
import DepAuthContext from "./Components/Store/Dep-authContext";
import EmpAuthContext from "./Components/Store/Emp-authContext";
import LayoutDep from "./Components/Departments/LayoutDep";
import Dashboard from "./Components/Departments/Dashboard";
import Allhistory from "./Components/Departments/Allhistory";
import Employee from "./Components/Departments/Employee";
import EmpListDetails from "./Components/Departments/EmpListDetails";
import DepDetails from "./Components/Departments/DepDetails";
import DepRequest from "./Components/Departments/DepRequest";
import Escalated from "./Components/Departments/Escalated";
import AssignEmp from "./Components/Departments/AssignEmp";
import AddEmployee from "./Components/Departments/AddEmployee";
import AsEmpTo from "./Components/Departments/AsEmpTo";
import Decline from "./Components/Departments/Decline";
import DeleteEmp from "./Components/Departments/DeleteEmp";
import LayoutEmp from "./Components/Employee/LayoutEmp";
import Tasks from "./Components/Employee/Tasks";
import EmpDetails from "./Components/Employee/EmpDetails";
import EscalateTask from "./Components/Employee/EscalateTask";
import Profile from "./Components/Employee/Profile";
import LayoutInv from "./Components/Investor/LayoutInv";
import InvDashboard from "./Components/Investor/InvDashboard";
import Request from "./Components/Investor/Request";
import MyRequests from "./Components/Investor/MyRequests";
import Completed from "./Components/Investor/Completed";
import Report from "./Components/Investor/Report";
import InvDetails from "./Components/Investor/InvDetails";
import CompRequest from "./Components/Investor/CompRequest";
import LayoutSup from "./Components/SuperAdmin/LayoutSup";
import Department from "./Components/SuperAdmin/Department";
import Investor from "./Components/SuperAdmin/Investor";
import Declined from "./Components/SuperAdmin/Declined";
import SupDetails from "./Components/SuperAdmin/SupDetails";
import AddDepartment from "./Components/SuperAdmin/AddDepartment";
import AddInvestor from "./Components/SuperAdmin/AddInvestor";
import AssignDepartment from "./Components/SuperAdmin/AssignDepartment";
import AsToDep from "./Components/SuperAdmin/AsToDep";
import DelDep from "./Components/SuperAdmin/DelDep";
import DelInv from "./Components/SuperAdmin/DelInv";
import IncomReport from "./Components/SuperAdmin/IncomReport";
import LogDepartment from "./Components/Auth/LogDepartment";
import LogEmployee from "./Components/Auth/LogEmployee";
import LogInvestor from "./Components/Auth/LogInvestor";
import Home from "./Components/Home/Home";

function App() {
  const invAuthCtx = useContext(InvAuthContext);
  const depAuthCtx = useContext(DepAuthContext);
  const empAuthCtx = useContext(EmpAuthContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/department/"
          element={
            <>
              {depAuthCtx.isDepLoggedIn && <LayoutDep />}
              {!depAuthCtx.isDepLoggedIn && <LogDepartment />}
            </>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="allhistory" element={<Allhistory />} />
          <Route path="requests/:id" element={<DepDetails />} />
          <Route path="employee" element={<Employee />} />
          <Route path="employee/:empId" element={<EmpListDetails />} />
          <Route path="requests" element={<DepRequest />} />
          <Route path="escalated" element={<Escalated />} />
          <Route path="assign/:taskid" element={<AssignEmp />} />
          <Route path="addemployee" element={<AddEmployee />} />
          <Route path="assign/:taskid/:userid" element={<AsEmpTo />} />
          <Route path=":id/decline" element={<Decline />} />
          <Route path="delete/:userid" element={<DeleteEmp />} />
        </Route>
        <Route
          path="/employee/"
          element={
            <>
              {empAuthCtx.isEmpLoggedIn && <LayoutEmp />}
              {!empAuthCtx.isEmpLoggedIn && <LogEmployee />}
            </>
          }
        >
          <Route path="task" element={<Tasks />} />
          <Route path="task/:id" element={<EmpDetails />} />
          <Route path="escalate/:id" element={<EscalateTask />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route
          path="/investor/"
          element={
            <>
              {invAuthCtx.isInvLoggedIn && <LayoutInv />}
              {!invAuthCtx.isInvLoggedIn && <LogInvestor />}
            </>
          }
        >
          <Route path="dashboard" element={<InvDashboard />} />
          <Route path="request" element={<Request />} />
          <Route path="myrequest" element={<MyRequests />} />
          <Route path="myrequest/:id" element={<InvDetails />} />
          <Route path="completed" element={<Completed />} />
          <Route path="report" element={<Report />} />
          <Route path=":id" element={<CompRequest />} />
        </Route>
        <Route
          path="/superadmin/"
          element={
            <>
              {empAuthCtx.isEmpLoggedIn && <LayoutSup />}
              {!empAuthCtx.isEmpLoggedIn && <LogEmployee />}
            </>
          }
        >
          <Route path="departments" element={<Department />} />
          <Route path="investors" element={<Investor />} />
          <Route path="decline" element={<Declined />} />
          <Route path="decline/:id" element={<SupDetails />} />
          <Route path="adddepartment" element={<AddDepartment />} />
          <Route path="addinvestor" element={<AddInvestor />} />
          <Route path="assign/:taskid" element={<AssignDepartment />} />
          <Route path="assign/:taskid/:depid" element={<AsToDep />} />
          <Route path="department/delete/:userid" element={<DelDep />} />
          <Route path="investor/delete/:userid" element={<DelInv />} />
          <Route path="reports" element={<IncomReport />} />
        </Route>
        <Route path="/loginDepartment" element={<LogDepartment />} />
        <Route path="/loginEmployee" element={<LogEmployee />} />
        <Route path="/loginInvestor" element={<LogInvestor />} />
      </Routes>
    </>
  );
}

export default App;
