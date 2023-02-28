import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EmpAuthContext from "../Store/Emp-authContext";

function EditEvent() {
  const empAuthCtx = useContext(EmpAuthContext);

  const navigate = useNavigate();

  const { eventid } = useParams();

  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState(null);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const singleFetch = async () => {
      const response = await fetch(
        `http://localhost:8080/home/event/` + eventid,
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
      console.log(data);

      setTitle(data.msg.title);
      setDate(data.msg.date);
      setDescription(data.masg.description);
      //   setPhoto(data)
    };

    singleFetch();
  }, [eventid, empAuthCtx]);

  return (
    <>
      <div>EditEvent</div>
    </>
  );
}

export default EditEvent;
