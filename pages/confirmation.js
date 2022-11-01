/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import cookies from "js-cookie"
import { useRouter } from "next/router";
import app from "../firbase/firebaseAuth";
import { getDoc, getFirestore,doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { async } from "@firebase/util";

const db = getFirestore(app);

const Conf = () => {
  var route = useRouter();
  // var vid = cookies.get("vid");
  const [userData,setUserData]=useState(Object)
  var vid=route.query.VID
  console.log(vid);
  const docRef = doc(db, "users/" + vid);
   const fetchData=async()=>{
    try{
     const snap=await getDoc(docRef);
     if(snap.exists){
      console.log(snap.data());
      setUserData(snap.data())
     }
               
    }catch(e){
      console.log(e)
    }
   }
   useEffect(() =>{
    fetchData()
   },)

  
  return (
    <div className=" container pt-5 d-flex justify-content-center">
      <div className="w-50 shadow bg-smoke mt-5 mb-5 pb-5">

        <div className="bg-danger p-3 d-flex">
          <h1 className="text-white">Covid-19 Vacination Details </h1>
          <img src="./images/logo eeeee.png" width={50} height={50} />
        </div>
        <div className="container">
          <br />
          <br />
          <br />
          <div className="d-flex justify-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" className="bi bi-check-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
            </svg>
            <br />

          </div>
          <p className="h2 text-dark mt-4 mb-3"> Succeefully Register for Covid-19 Vacination</p>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium iste ipsa numquam odio dolores, nam
          </p>
          <div className="table">
            <div className="container">
              <div className="row table-secondary">
                <b className="col-6">TYPES</b>
             
                <b className="col-6">VALUES</b>
              </div>
              <div className="row">
                <p className="col-6">Vacine ID</p>
                
                <p className="col-6"> {userData.Vacine_Id} </p>
              </div>
              <div className="row">
                <p className="col-6">Facility ID</p>
                
                <p className="col-6"> {userData.facilityId} </p>
              </div>
              <div className="row">
                <p className="col-6">Facility type</p>
                
                <p className="col-6"> {userData.facilityType} </p>
              </div>
              <div className="row">
                <p className="col-6">First Dosage Date</p>
                
                <p className="col-6"> {userData.first_date} </p>
              </div>
              
            </div>
           
          </div>

          <div className="container d-flex justify-content-center ">
            <img width={50} height={50} src="./images/logo eeeee.png"/>
            <p> ksfhjdhfjsd ksjdfjksdhkfjsd lkfsdkjfhksdhkfj ksdkjfhsjdhfkjsd kfhsdjfhskjdhfkjsdh </p>
          </div>

        </div>
      </div>
    </div>

  );
}

export default Conf;