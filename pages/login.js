/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { app } from "../firbase/firebaseAuth";
import Loading from "../components/loading";
import {validateEmail} from '../firbase/constant'
import Swal from "sweetalert2";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import Link from "next/link";
import { Fragment, useState } from "react";
import { Footer, MainNavBar } from "../components/navbars";
import { useRouter } from "next/router";
const auth = getAuth(app);
auth;
const Login = () => {
  var route = useRouter();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function loginFunction() {
    if (email && password) {
      if(validateEmail(email)){
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            route.push("/client");
            setLoading(false);
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            setLoading(false);
            Swal.fire({
              title: "Error!",
              text: "Error code",
              icon: "error",
              confirmButtonText: "ok",
            });
          });
      }else{
        Swal.fire({
            title: "Error!",
            text: "Enter a valid email address",
            icon: "error",
            confirmButtonText: "ok",
          });
      }
    } else {
      Swal.fire({
        title: "Error!",
        text: "All fields are required",
        icon: "error",
        confirmButtonText: "ok",
      });
    }
  }
  onAuthStateChanged(auth, (user) => {
    if (user) {
      route.push("/client");
      setLoading(false);
    } else {
      setLoading(false);
    }
  });
  return loading == true ? (
    <Loading />
  ) : (
    <Fragment>
      <MainNavBar />
      <div className="reg">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="card">
            <div className="row">
              <div className="col-md-6">
                <div className="form">
                  <h2>Registration</h2>

                  <div className="inputbox mt-3">
                    {" "}
                    <span>Email</span>{" "}
                    <input
                      type="email"
                      placeholder="Email"
                      name=""
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}
                      className="form-control"
                    />{" "}
                  </div>
                  <div className="inputbox mt-3">
                    {" "}
                    <span>Password</span>{" "}
                    <input
                      type="password"
                      placeholder="password"
                      name=""
                      onChange={(e) => {
                        setPassword(e.target.value)
                      }}
                      className="form-control"
                    />{" "}
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="text-right">
                      {" "}
                      <button
                        onClick={() => {
                          loginFunction();
                        }}
                        className="btn btn-success register btn-block"
                      >
                        Login
                      </button>{" "}
                    </div>{" "}
                    <Link href={"/register"}>
                      <a href="#" className="login">
                        Register
                      </a>
                    </Link>
                  </div>
                  <div className="form-check mt-2">
                    {" "}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckChecked"
                      defaultChecked=""
                    />{" "}
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      {" "}
                      I agree to the terms and conditions of{" "}
                      <a href="" className="login">
                        Privacy &amp; Policy
                      </a>{" "}
                    </label>{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-center mt-5">
                  {" "}
                  <img
                    src="images/xprotect.png.pagespeed.ic.isMGsjEM4C.png"
                    width={400}
                    height={500}
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

// const Loading  = () => {

//    return <div className="" style={{ marginTop: "15%" }}>
//       <center>
//         <img src="images/Loading_icon.gif" alt="loading" />
//       </center>
//     </div>

// }

export default Login;
