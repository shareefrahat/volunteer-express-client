import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;

    fetch("https://volunteer-express.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setToken(data.accessToken);
        // navigate(from, { replace: true });
        localStorage.setItem("accessToken", data.accessToken);
      });
  }, [user]);
  return [token];
};

export default useToken;
