import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate("");
  const adminMail = "imr4h47@gmail.com";
  if (user.email !== adminMail) {
    navigate("/");
  }
  //   useEffect(() => {
  //     if (!user.email === "imr4h47@gmail.com") {
  //       navigate("/login");
  //     }
  //   });
  return (
    <>
      <h2 className="my-10 text-blue-700">Admin Dashboard</h2>
    </>
  );
};

export default Dashboard;
