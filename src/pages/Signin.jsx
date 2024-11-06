import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { loginAction } from "../actions/authAction";
export default function Signin({ history }) {
  const dispatch = useDispatch();
  const myStyle = {
    backgroundImage:
      "url('https://img.freepik.com/free-photo/businessman-with-leather-briefcase_53876-101890.jpg?w=1060&t=st=1671866154~exp=1671866754~hmac=a87cd4cbd341dc68e407c7e3af1cca6b7db2a6179adeac7244b423c0a14aab00')",
    height: "89vh",
    // marginTop: "10px",
    // fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const [email, setemail] = useState("addu@gmail.com");
  const [password, setpassword] = useState("123");
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginAction({ email, password }));
    history.push("/");
    e.target.reset();
  };
  return (
    <div style={myStyle}>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-sm-6">
            <div className="card mt-5 bg-light">
              <div className="card-header">Login</div>
              <div className="card-body">
                <form onSubmit={handleLogin}>
                  <input
                    type="text"
                    value={email}
                    placeholder="Enter Email"
                    className="form-control"
                    onChange={(e) => setemail(e.target.value)}
                  />
                  <br />
                  <input
                    type="password"
                    value={password}
                    className="form-control"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                  <br />
                  <Link to="forget-password" className="offset-sm-5">
                    forgetPassword
                  </Link>
                  <br />
                  <br />
                  <button className="btn btn-info btn-lg w-100">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
