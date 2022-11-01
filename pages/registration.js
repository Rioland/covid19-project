/* eslint-disable @next/next/no-img-element */
import { Footer, BenefitFooter, BenefitNav } from "../components/navbars";
import { Fragment, useState } from "react";

import Head from "next/head";
import Link from "next/link";
import NaijaStates from "naija-state-local-government";
import Swal from "sweetalert2";
import { getNetDate, generateAlphaNumericCode, generateAlphaCode } from "../firbase/constant";
import app from "../firbase/firebaseAuth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import cookies from "js-cookie"
// import { async } from "@firebase/util";

const db = getFirestore(app);

const Registration = ({ nigeriaState }) => {
  return (
    <Fragment>
      <Head>
        <title>Employment</title>
        <link
          rel="shortcut icon"
          href="./images/logo eeeee.png"
          type="image/x-icon"
        />
      </Head>
      <BenefitNav />
      <div className="container bluenav ">
        <Link href={"/registration"}>
          <a>
            <div
              className="ms-auto  me-5 container"
              style={{ width: "fit-content", height: "fit-content" }}
            >
              <img
                className="Applynow "
                src="images/us-embassy-embassy.gif"
                alt=""
              />
            </div>
          </a>
        </Link>
      </div>
      <h1 className=" container EUPA pt-2 mt-4">Corona Vacine Registration</h1>
      <Form nigeriaState={nigeriaState} />
      <BenefitFooter />
    </Fragment>
  );
};

const Form = ({ nigeriaState }) => {
  const cus = async () => { };
  cus();

  const [lgas, setLgas] = useState([]);
  const [currentstate, setCurrentstate] = useState("");
  const [CurrentLga, setCurrentLga] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [middleName, setMiddlename] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cphoneNumber, setCPhoneNumber] = useState("");
  const [aphoneNumber, setAPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [ispreg, setIspreg] = useState("NO");
  const [hAdress, setHadress] = useState("");
  const [ninType, setNINType] = useState("");
  const [nin, setNIN] = useState("");
  const [medicalCondi, setMedicalCondi] = useState("NO");
  const [facilityType, setFacilityType] = useState("Public");
  const [loading, setLoading] = useState(false);
  var route=useRouter();
  const Vacine_Id= "NG-NF" + generateAlphaNumericCode(10)
  const handleChange = async (e) => {
    const { name, value } = e.target;
    
    setIspreg(
    `${value.rad}`,
    );
  };

  const registerHandler = async (e) => {
   
    if (
      nin &&
      medicalCondi &&
      facilityType &&
      fname &&
      lname &&
      middleName &&
      email &&
      phoneNumber &&
      aphoneNumber &&
      cphoneNumber &&
      dob &&
      ispreg &&
      hAdress &&
      ninType &&
      currentstate &&
      CurrentLga
    ) {
      if (cphoneNumber == phoneNumber) {
        setLoading(true);

        try {
          const docRef = doc(db, "users/" + email);
          const data = {
            first_name: fname,
            last_name: lname,
            meddle_name: middleName,
            phoneNumber: phoneNumber,
            alternativ_contact: aphoneNumber,
            email: email,
            facilityType: facilityType,
            nin: nin,
            ninType: ninType,
            medical_Condition: medicalCondi,
            gender: gender,
            ispregnant: ispreg.rad||"NO",
            dob: dob,
            home_address: hAdress,
            currentstate: currentstate,
            CurrentLga: CurrentLga,
            // uid: uid,
            first_dose: false,
            second_dose: false,
            third_does: false,
            vacine_type: null,
            first_date: getNetDate((48)),
            third_date: null,
            second_date: null,
            Vacine_Id: Vacine_Id,
            facilityId: generateAlphaNumericCode(11)
          };
          await setDoc(docRef, data)
          setLoading(false);
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Registration Successfull Vercination details has been sent you your mail",
            confirmButtonText: "Okay",
          }).then(()=>{
            cookies.set("vid",Vacine_Id,{ expires: 7, path: '' })
            route.push("./confirmation?VID="+Vacine_Id)
          });
          

        } catch (error) {
          console.log(`Error: ${error}`);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error,
            confirmButtonText: "Okay",
          });
          setLoading(false);
        }


        // var couter=1;
        //  while (true) {
        //   try {
        //     // const custom = query(
        //     //   collection(firestore, "users"),
        //     //   where("first_date", "==", "" + getNetDate((24)*couter))
        //     // );
        //     // const snap = await getDocs(custom);
        //     if (snap.docs.length > 20) {
        //       couter++;
        //     } else {
        //       const data = {
        //         first_name: fname,
        //         last_name: lname,
        //         meddle_name: middleName,
        //         phoneNumber: phoneNumber,
        //         alternativ_contact: aphoneNumber,
        //         email: email,
        //         facilityType: facilityType,
        //         nin: nin,
        //         ninType: ninType,
        //         medical_Condition: medicalCondi,
        //         gender: gender,
        //         ispregnant: ispreg.rad,
        //         dob: dob,
        //         home_address: hAdress,
        //         currentstate: currentstate,
        //         CurrentLga: CurrentLga,
        //         // uid: uid,
        //         first_dose: false,
        //         second_dose: false,
        //         third_does: false,
        //         vacine_type: null,
        //         first_date: getNetDate((24)*couter),
        //         third_date:null,
        //         second_date:null,
        //         Vacine_Id:"NG-NF"+generateAlphaNumericCode(10),
        //         facilityId:generateAlphaNumericCode(11)
        //       };
        //       setDoc(docRef, data, { merge: true })
        //         .then((res) => {

        //           Swal.fire({
        //             icon: "success",
        //             title: "Success",
        //             text: "Registration Successfull Vercination details has been sent you your mail",
        //             confirmButtonText: "Okay",
        //           });
        //           setLoading(false);
        //         })
        //         .catch((e) => {

        //           Swal.fire({
        //             icon: "error",
        //             title: "Oops...",
        //             text: "something went wrong",
        //             confirmButtonText: "Okay",
        //           });
        //           setLoading(false);
        //           console.log(e);
        //         });
        //         setLoading(false);
        //         break;

        //     }
        //   } catch (error) {
        //     console.error(error);
        //     setLoading(false);
        //     Swal.fire({
        //       icon: "error",
        //       title: "Oops...",
        //       text: error,
        //       confirmButtonText: "Okay",
        //     });
        //   }

        //  }


      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Phone Number Not Match",
          confirmButtonText: "Okay",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required",
        confirmButtonText: "Okay",
      });
    }
  };


  return (
    <form id="fff" className="fff" method="POST" encType="multipart/form-data">
      <div className="container my-5 px-5 py-5 w-50 shadow">
        <div className="row">
          {/* fnama */}
          <div className="col-12 col-sm-12   col-lg-6 col-lg-6 col-xxl-6  col-lg-6 mb-5">
            <div className="form-group">
              <input
                type="text"
                id="firstname"
                onChange={(e) => {
                  setFname(e.target.value);
                }}
                name="firstname"
                required=""
                className="form-control"
              />
              <label className="form-control-placeholder" htmlFor="firstname">
                First Name
              </label>
            </div>
          </div>
          {/* lname */}
          <div className="col-12  col-lg-6col-sm-12   col-lg-6 col-lg-6col-xxl-6 mb-5 ">
            <div className="form-group">
              <input
                type="text"
                onChange={(e) => {
                  setLname(e.target.value);
                }}
                id="lastname"
                name="lastname"
                required=""
                className="form-control"
              />
              <label className="form-control-placeholder" htmlFor="lastname">
                Last Name
              </label>
            </div>
          </div>
          {/* medile name */}
          <div className="col-12  col-lg-6col-sm-12   col-lg-6 col-lg-6col-xxl-6 mb-5 ">
            <div className="form-group">
              <input
                type="text"
                id="meddlename"
                onChange={(e) => {
                  setMiddlename(e.target.value);
                }}
                name="meddlename"
                required=""
                className="form-control"
              />
              <label className="form-control-placeholder" htmlFor="meddlename">
                Meddle Name
              </label>
            </div>
          </div>

          {/* email */}

          <div className="col-12  col-sm-12 mb-5 ">
            <div className="form-group">
              <input
                type="email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                required=""
                className="form-control"
              />
              <label className="form-control-placeholder" htmlFor="email">
                Email
              </label>
            </div>
          </div>
          {/* contact formation */}
          {/* Phone number */}
          <div className="col-12  col-lg-6col-sm-12   col-lg-6 col-lg-6col-xxl-6 mb-5 mt-2">
            <div className="form-group">
              <input
                type="text"
                id="phonenumber"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                name="phonenumber"
                required=""
                className="form-control"
              />
              <label className="form-control-placeholder" htmlFor="phonenumber">
                Contact phone number
              </label>
            </div>
          </div>
          {/* confirm phone number */}
          <div className="col-12  col-lg-6col-sm-12   col-lg-6 col-lg-6col-xxl-6 mb-5 mt-2">
            <div className="form-group">
              <input
                type="text"
                id="confirm-number"
                onChange={(e) => {
                  setCPhoneNumber(e.target.value);
                }}
                name="confirm-number"
                required=""
                className="form-control"
              />
              <label
                className="form-control-placeholder"
                htmlFor="confirm-number"
              >
                Confirm your phone number
              </label>
            </div>
          </div>
          {/* auternative number */}
          <div className="col-12  col-lg-6col-sm-12   col-lg-6 col-lg-6col-xxl-6 mb-5 mt-2">
            <div className="form-group">
              <input
                type="text"
                onChange={(e) => {
                  setAPhoneNumber(e.target.value);
                }}
                id="alt-number"
                name="alt-number"
                required=""
                className="form-control"
              />
              <label className="form-control-placeholder" htmlFor="alt-number">
                Alternative phone number
              </label>
            </div>
          </div>
          {/* dob */}
          <div className="col-12  col-lg-6col-sm-12   col-lg-6 col-lg-6col-xxl-6 mb-5 mt-2">
            <div className="form-group">
              <input
                type="date"
                id="dob"
                name="dob"
                onChange={(e) => {
                  setDob(e.target.value);
                }}
                className="form-control"
              />
              <label className="form-control-placeholder" htmlFor="dob">
                Date of birth
              </label>
            </div>
          </div>
          {/* gender */}
          <div className="col-12  col-lg-6col-sm-12   col-lg-6 col-lg-6col-xxl-6 mb-5 mt-2">
            <div className="form-group">
              <select
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                name="gender border-0"
                className="form-control form-select-lg mb-3"
                // className="form-select "
                id="gen"
                aria-label=".form-select-lg example"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <label className="form-control-placeholder mb-4" htmlFor="gen">
                Gender
              </label>
            </div>
          </div>
          {/* is pregnat */}
          {gender.toUpperCase() == "FEMALE" ? (
            <div className="col-12  col-lg-6col-sm-12   col-lg-6 col-lg-6col-xxl-6 mb-5 mt-2">
              <p className="" htmlFor="preg">
                Are You Pregnant?
              </p>

              <span>
                Yes{" "}
                <input
                  type={"radio"}
                  value="YES"
                  name="rad"
                  onChange={(e) => handleChange(e)}
                />{" "}
              </span>
              <span>
                No{" "}
                <input
                  type={"radio"}
                  value="NO"
                  name="rad"
                  onChange={(e) => handleChange(e)}
                />
              </span>
            </div>
          ) : (
            <span></span>
          )}
          {/* address */}
          <div className="col-12  col-sm-12 mb-5 mx-auto">
            <div className="form-group">
              <textarea
                id="ha"
                required=""
                name="address"
                onChange={(e) => {
                  setHadress(e.target.value);
                }}
                className="form-control"
                defaultValue={""}
              />
              <label className="form-control-placeholder" htmlFor="ha">
                Home Address
              </label>
            </div>
          </div>
          {/* state */}
          <div className="col-12  col-lg-6col-sm-12   col-lg-6 col-lg-6col-xxl-6 mb-5 mt-2">
            <div className="form-group">
              <select
                onChange={(e) => {
                  var nstate = e.target.value;
                  if (nstate.toUpperCase() != "SELECT") {
                    setCurrentstate(nstate);

                    setLgas(NaijaStates.lgas(nstate).lgas);
                  }
                }}
                name="gender border-0"
                className="form-control form-select-lg mb-3"
                // className="form-select "
                aria-label=".form-select-lg example"
              >
                <option value="select">Select State</option>
                {nigeriaState.map((state) => {
                  return (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  );
                })}
                <option value="">Select State</option>
              </select>
              <label className="form-control-placeholder mb-4" htmlFor="dob">
                Current State
              </label>
            </div>
          </div>

          {/* city */}
          <div className="col-12  col-lg-6col-sm-12   col-lg-6 col-lg-6col-xxl-6 mb-5 mt-2">
            <div className="form-group">
              <select
                onChange={(e) => {
                  setCurrentLga(e.target.value);
                }}
                name="gender border-0"
                className="form-control form-select-lg mb-3"
                // className="form-select "
                aria-label=".form-select-lg example"
              >
                <option value="select">Select LGA</option>
                {lgas.map((state) => {
                  return (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  );
                })}
                <option value="">Select State</option>
              </select>
              <label className="form-control-placeholder mb-4" htmlFor="dob">
                Local goverments
              </label>
            </div>
          </div>
          {/* id_type */}

          <div className="col-12  col-lg-6col-sm-12   col-lg-6 col-lg-6col-xxl-6 mb-5 mt-2">
            <div className="form-group">
              <select
                name="gender border-0"
                className="form-control form-select-lg mb-3"
                onChange={(e) => {
                  setNINType(e.target.value);
                }}
                // className="form-select "
                aria-label=".form-select-lg example"
              >
                <option value="">Select ID</option>
                <option value="nin">National ID (NIN)</option>
                <option value="vin">Voters Card(VIN)</option>
                <option value="diver">Drivers Licence </option>
                <option value="vin">Internamtion Passport</option>
                <option value="vin">I dont have </option>
              </select>
              <label className="form-control-placeholder mb-4" htmlFor="dob">
                Type of Identification
              </label>
            </div>
          </div>
          {/* idnum */}
          <div className="col-12  col-lg-6col-sm-12   col-lg-6 col-lg-6col-xxl-6 mb-5 mt-2">
            <div className="form-group">
              <input
                type="number"
                id="id"
                onChange={(e) => {
                  setNIN(e.target.value);
                }}
                name="id"
                required=""
                className="form-control"
              />
              <label className="form-control-placeholder" htmlFor="id">
                Enter Id Number
              </label>
            </div>
          </div>
          {/*medical issus */}

          <div className="col-12  col-lg-6col-sm-12   col-lg-6 col-lg-6col-xxl-6 mb-5 mt-2">
            <div className="form-group">
              <select
                onChange={(e) => {
                  setMedicalCondi(e.target.value);
                }}
                name="gender border-0"
                className="form-control form-select-lg mb-3"
                // className="form-select "
                aria-label=".form-select-lg example"
              >
                <option value="NO">No</option>
                <option value="Yes">Yes</option>
              </select>
              <label className="form-control-placeholder mb-4" htmlFor="dob">
                Any known medical condition?
              </label>
            </div>
          </div>
          {/* pub/pr */}

          <div className="col-12  col-lg-6col-sm-12   col-lg-6 col-lg-6col-xxl-6 mb-5 mt-2">
            <div className="form-group">
              <select
                name="gender border-0"
                onChange={(e) => {
                  setFacilityType(e.target.value);
                }}
                className="form-control form-select-lg mb-3"
                // className="form-select "
                aria-label=".form-select-lg example"
              >
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
              <label className="form-control-placeholder mb-4" htmlFor="dob">
                Preferred Health Facility type
              </label>
            </div>
          </div>

          <button
            id="sbtn"
            type="button"
            disabled={loading}
            onClick={(e) => {
              registerHandler(e);
            }}
            className="btn btn-primary ps-5 pe-5 text-white"
          >
            {loading == false ? "Submit" : "Proccessing..."}
          </button>
        </div>
      </div>
    </form>
  );
};

export async function getStaticProps(context) {
  const nnjaState = NaijaStates.states();
  return {
    props: {
      nigeriaState: nnjaState,
    }, // will be passed to the page component as props
  };
}

export default Registration;
