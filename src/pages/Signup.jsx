import React, { useEffect, useState } from "react";
import "./../App";
import { useDispatch } from "react-redux";
import { userSignupAction } from "../actions/userAction";

export default function Signup({ history }) {
  const dispatch = useDispatch();
  const myStyle = {
    backgroundImage:
      "url('https://img.freepik.com/free-photo/what-are-you-waiting-sign-up-now-confident-determined-happy-friendlylooking-attractive-woman-yellow-tshirt-pointing-upper-left-corner-advice-buy-black-friday-sale-smiling-pleased_176420-50940.jpg?w=996&t=st=1671866974~exp=1671867574~hmac=9b6950f6a057112cf6b7d8c71967e8f9bcc9f5ca5416b417dbb529a305fbeda3')",
    height: "89vh",
    // marginTop: "10px",
    // fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const [isAdmin, setIsAdmin] = useState(false);
  const [formData, setformData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });
  const [error, seterror] = useState({
    name: undefined,
    email: undefined,
    password: undefined,
  });
  const handleSignup = async (e) => {
    e.preventDefault();
    if (formData.email === "") {
      seterror((pre) => {
        return {
          ...pre,
          email: "Please enter email ",
        };
      });
    }
    if (formData.name === "") {
      seterror((pre) => {
        return {
          ...pre,
          name: "Please enter name",
        };
      });
    }
    if (formData.password === "" || formData.cpassword === "") {
      seterror((pre) => {
        return {
          ...pre,
          password: "Please enter password",
          cpassword: "Please confirm password",
        };
      });
    }

    if (
      formData.email !== "" &&
      formData.name !== "" &&
      formData.password !== "" &&
      formData.cpassword !== "" &&
      formData.password === formData.cpassword
    ) {
      dispatch(userSignupAction(formData));
      history.push("/login");
      console.log(isAdmin);
    }
  };
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      history.push("/");
    }
  }, []);
  return (
    <div style={myStyle}>
      <div className="container color">
        <div className="row">
          <div className="col-sm-6 mt-5 ">
            {/* {JSON.stringify(formData)}
          {JSON.stringify(error)} */}
            <div className="card">
              <div className="card-header">Signup</div>
              <div className="card-body">
                <form onSubmit={handleSignup}>
                  <div className="input-group">
                    <span className="input-group-text  w-25">Name</span>
                    <input
                      onChange={(e) =>
                        setformData({ ...formData, name: e.target.value })
                      }
                      type="text"
                      placeholder="Enter Your Name"
                      className={
                        error.name ? "form-control is-invalid" : "form-control"
                      }
                    />
                    <span className="invalid-feedback">{error.name}</span>
                  </div>
                  <br />
                  <div className="input-group">
                    <span className="input-group-text  w-25">Mobile No</span>
                    <input
                      onChange={(e) =>
                        setformData({ ...formData, mobile: e.target.value })
                      }
                      type="text"
                      placeholder="Enter Mobile No"
                      className={
                        error.name ? "form-control is-invalid" : "form-control"
                      }
                    />
                    <span className="invalid-feedback">{error.name}</span>
                  </div>
                  <br />
                  <div className="input-group">
                    <span className="input-group-text w-25">email</span>
                    <input
                      onChange={(e) =>
                        setformData({ ...formData, email: e.target.value })
                      }
                      placeholder="Enter Your Email"
                      type="text"
                      className={
                        error.email ? "form-control is-invalid" : "form-control"
                      }
                    />
                    <span className="invalid-feedback">{error.email}</span>
                  </div>
                  <br />
                  <div className="input-group">
                    <span className="input-group-text w-25">password</span>
                    <input
                      onChange={(e) =>
                        setformData({
                          ...formData,
                          password: e.target.value,
                        })
                      }
                      type="password"
                      placeholder="Enter Your Password"
                      className={
                        error.password
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />
                    <span className="invalid-feedback">{error.password}</span>
                  </div>
                  <br />
                  <div className="input-group">
                    <span className="input-group-text w-25">confirm</span>
                    <input
                      onChange={(e) =>
                        setformData({
                          ...formData,
                          cpassword: e.target.value,
                        })
                      }
                      type="password"
                      placeholder="Enter Your Confirm Password"
                      className={
                        error.cpassword
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />
                    <span className="invalid-feedback">{error.cpassword}</span>
                  </div>

                  <div className="input-group">
                    <div className="d-flex">
                      {/* onChange={this.onChangeValue} */}
                      <div className="m-3">
                        <input
                          type="radio"
                          value="Male"
                          name="gender"
                          className="text-info bg-dark"
                          onClick={(e) => setIsAdmin(true)}
                        />{" "}
                        Recruiter
                      </div>
                      <div className="m-3">
                        <input
                          type="radio"
                          value="Female"
                          name="gender"
                          className="text-info bg-dark"
                          onClick={(e) => setIsAdmin(false)}
                        />{" "}
                        Employee
                      </div>
                    </div>
                  </div>

                  <button className="btn btn-warning btn-lg w-100">
                    Signup
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
