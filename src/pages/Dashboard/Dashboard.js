import React from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import EventList from "../../components/EventList/EventList";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate("");
  const adminMail = "imr4h47@gmail.com";
  if (user.email !== adminMail) {
    navigate("/");
  }
  return (
    <>
      <EventList></EventList>
    </>
  );
};

export default Dashboard;
