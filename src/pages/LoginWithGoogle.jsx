import React, { useState } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export default function LoginWithGoogle() {
  const history = useHistory();
  const [user, setuser] = useState(
    localStorage.getItem("google")
      ? JSON.parse(localStorage.getItem("google"))
      : null
  );
  if (LoginWithGoogle == true) {
    history.push("/");
  }
  const handleSuccess = async (result) => {
    console.log(result);
    const { data } = await axios.post(
      `${process.env.REACT_APP_URL}/api/auth/login/google`,
      { token: result.tokenId }
    );
    setuser(data.result);
    localStorage.setItem("google", JSON.stringify(data.result));
  };
  const handleFail = (result) => console.log(result);
  const handleLogout = (result) => {
    console.log(result);
    setuser(null);
    localStorage.removeItem("google");
  };

  return (
    <div className="container">
      {user ? (
        <>
          <h1>welcom {user?.name}</h1>
          <h1>email {user?.email}</h1>
          <img src={user?.picture} alt="" />{" "}
          <GoogleLogout
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            onLogoutSuccess={handleLogout}
          ></GoogleLogout>
        </>
      ) : (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          onSuccess={handleSuccess}
          onFailure={handleFail}
        ></GoogleLogin>
      )}
    </div>
  );
}
