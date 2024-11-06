import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../actions/authAction";
export default function Navbar() {
  const { cartItem } = useSelector((state) => state.cart);
  const { loginUser } = useSelector((state) => state.loggedIn);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    dispatch(logoutAction());
    history.push("/login");
  };
  const auth = localStorage.getItem("user");
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-dark ">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            <img
              style={{
                height: 50,
                width: 150,
                borderRadius: 30,
              }}
              src="https://t3.ftcdn.net/jpg/04/93/13/42/360_F_493134256_DsdRygnyk1VflTXXuAjI211fWJqDLu1W.jpg"
              className="img-fluid rounded-start"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarID"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarID">
            <div className="navbar-nav">
              <Link className="nav-link text-white " to={"/dashboard"}>
                Dashboard
              </Link>
              <Link className="nav-link text-white " to={"/add-job"}>
                Add Jobs
              </Link>
              {loginUser?.name ? (
                <li className="nav-item dropdown  text-white ">
                  <a
                    className="nav-link dropdown-toggle active text-white"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    Welcome {loginUser.name}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item " to="/order-history">
                        Order History
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item " onClick={handleLogout}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              ) : (
                <Link className="nav-link text-white " to={"/login"}>
                  Login
                </Link>
              )}

              {auth ? (
                " "
              ) : (
                <Link className="nav-link active text-white" to={"/signup"}>
                  Signup
                </Link>
              )}

              <Link className="nav-link text-white" to={"/cart"}>
                Applied Job
                <span className="badge bg-dark">{cartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
