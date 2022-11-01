/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Fragment, useState } from "react";
import Loading from "../../components/loading"
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../../firbase/firebaseAuth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { datePlus } from "../../firbase/constant";

import { Footer, MainNavBar } from "../../components/navbars";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const Register = () => {
  var route = useRouter();
  const auth = getAuth(app);
  const [fname, setFname] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");
  const db = getFirestore();
  auth;


  async function registerFunction() {
    if (fname && email && password && Cpassword) {
      if (password == Cpassword) {
        setLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            const user = userCredential.user;

            try {
              const docRef = doc(db, "admin/" + user.uid);

              var userData = {
                fullname: fname,
                email: email,
                first_vacine: false,
                second_vacine: false,
                third_vacine: false,
                first_vdate: datePlus(5),
                second_vdate: "",
                third_vdate: "",
              };
              setDoc(docRef, userData)
                .then((v) => {
                  setLoading(false);
                })
                .catch((e) => {
                  setLoading(false);
                  console.log(e);
                });
            } catch (error) {
              setLoading(false);
              Swal.fire({
                title: "Error!",
                text: "Error with server",
                icon: "error",
                confirmButtonText: "Ok",
              });
              console.log(error);
            }
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Swal.fire({
              title: "Error!",
              text: errorMessage,
              icon: "error",
              confirmButtonText: "Ok",
            });
            setLoading(false);
            // ..
          });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Password not match",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    } else {
      Swal.fire({
        title: "Error!",
        text: "All fields Are required",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  }
  return (
    // loading==true?<Loading/>:
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
                    <span>Full Name</span>{" "}
                    <input
                      type="text"
                      placeholder="Name"
                      id="fname"
                      onKeyUp={(e) => {
                        setFname(e.target.value);
                      }}
                      // onChange={(e)=>{
                      //     setFname(e.target.value)
                      // }}
                      name=""
                      className="form-control"
                    />{" "}
                  </div>
                  <div className="inputbox mt-3">
                    {" "}
                    <span>Email</span>{" "}
                    <input
                      type="email"
                      id="email"
                      onKeyUp={(e) => {
                        setEmail(e.target.value);
                      }}
                      placeholder="Email"
                      name=""
                      className="form-control"
                    />{" "}
                  </div>

                  <div className="inputbox mt-3">
                    {" "}
                    <span>Password</span>{" "}
                    <input
                      type="password"
                      id="password"
                      onKeyUp={(e) => {
                        setPassword(e.target.value);
                      }}
                      placeholder="password"
                      name=""
                      className="form-control"
                    />{" "}
                  </div>

                  <div className="inputbox mt-3">
                    {" "}
                    <span> Password Again</span>{" "}
                    <input
                      type="password"
                      id="cpassword"
                      onKeyUp={(e) => {
                        setCPassword(e.target.value);
                      }}
                      placeholder="password Again"
                      name=""
                      className="form-control"
                    />{" "}
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="text-right">
                      {" "}
                      <button
                        disabled={loading}
                        onClick={() => {
                          registerFunction();
                        }}
                        className="btn btn-success register btn-block"
                      >
                        {loading == true ? "Proccessing..." : "Register"}
                      </button>{" "}
                    </div>{" "}
                    <Link href={"/login"}>
                      <a className="login">login</a>
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
                  />
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





export async function getServerSideProps(context) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return {
        redirect: {
          permanent: false,
          destination: `/client`
        },
      };
    
    }
  });
  return {
    props: {}, // will be passed to the page component as props
  }
}
export default Register;
