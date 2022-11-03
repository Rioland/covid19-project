import { Fragment } from "react";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Loading from "../../components/loading";
import { validateEmail } from "../../firbase/constant";
import Swal from "sweetalert2";
import { onAuthStateChanged } from "firebase/auth";
import SideBar from "../../components/SideBar";
import { useRouter } from "next/router";
import app from "../../firbase/firebaseAuth";
import { getDoc, getFirestore, doc, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
const db = getFirestore(app);
const Amin = ({ users }) => {
  const route=useRouter();
  const [alluser, setAllUsers] = useState(users);
  const getAllUSer = async () => {
    try {
      var docRef = collection(db, "users")
      var queryRef = await getDocs(docRef)
      if (!queryRef.empty) {
        queryRef.docs.forEach((data) => {
          console.log(data.data())
        })
        // console.log(queryRef.docs.)
      }
    } catch (error) {
      console.log(error);
    }
  }
  // getAllUSer()

  return <SideBar>
    
<div id="topnavbar">
            <div className="topnav mb-3">
              <div className="d-flex px-1">
                {" "}
                <a href="#home" className="active">
                  merchants
                </a>{" "}
                <a href="#news">users</a>{" "}
                <a href="#contact">
                  company<span className="px-1">&amp;</span>mid
                </a>{" "}
                <a href="#contact">account</a>{" "}
              </div>
            </div>
            <div className="d-flex align-items-center mb-3 px-md-3 px-2">
              {" "}
              <span className="text-uppercase fs13 fw-bolder pe-3">
                search<span className="ps-1">by</span>
              </span>
              <form className="example d-flex align-items-center">
                {" "}
                <input
                  type="text"
                  placeholder="Type in Company Name Or Mid id"
                  name="search"
                />{" "}
                <button type="submit">
                  <i className="fa fa-search" />
                </button>{" "}
              </form>
            </div>
            <div className="table-responsive px-2">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">
                      FullName
                    </th>
                    <th scope="col">State/LGA</th>
                    <th scope="col">Gender</th>
                    <th scope="col">
                      Phone number
                    </th>
                    <th scope="col">Vacine Id</th>
                    <th className="text-center" scope="col">
                      Facility ID
                    </th>
                    <th className="text-center" scope="col">
                      Next Date
                    </th>
                    <th className="text-center" scope="col">
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((data) => {
                    return <tr key={data['Vacine_Id']}>
                      <td>
                        <span className="bg-blight">{data['last_name']} {data['first_name']}</span>
                      </td>
                      <td>
                        <span className="bg-bdark">
                          {data['currentstate']} <span className="ps-1">{data['CurrentLga']}</span>
                        </span>
                      </td>
                      <td>
                        <span className="bg-blight">{data['gender']}</span>
                      </td>
                      <td>
                        <span className="bg-bdark">
                          {data['phoneNumber']}
                        </span>
                      </td>
                      <td>
                        <span className="bg-bdark">{data['Vacine_Id']}</span>
                      </td>
                      <td className="text-center px-0">
                        {data['facilityId']}
                      </td>
                      <td className="text-center">
                        {data['first_date']}
                      </td>
                      <td className="text-center">
                        <button className="btn btn-outline-info me-1" onClick={() => {
                          route.push(`./admin/userprofile?vid=${data['Vacine_Id']}`)
                        }} >edit</button>
                        <button className="btn btn-outline-danger"  >del</button>
                      </td>
                    </tr>
                  })}

                </tbody>
              </table>
            </div>
            <div className="d-flex align-items-center justify-content-between px-3 mt-3">
              <div className="bg-bdark fs13">
                {" "}
                <span>Page</span>{" "}
                <input
                  className="input-10 text-center"
                  type="text"
                  defaultValue={1}
                />{" "}
                <span>
                  <span className="px-1">of</span>1
                </span>{" "}
              </div>
              <div className="d-flex justify-content-end bg-bdark fs13">
                {" "}
                <span className="pe-1">Show</span>{" "}
                <input className="input-10" type="number" defaultValue={25} />{" "}
                <span className="ps-2">
                  <span className="pe-2">/</span>Page
                </span>{" "}
              </div>
            </div>
          </div>

  </SideBar>;
};

export default Amin;





export async function getServerSideProps(context) {
  var allusers = []
  // try {
  var docRef = collection(db, "users")
  var queryRef = await getDocs(docRef)
  if (!queryRef.empty) {

    // for (var idex=0;idex<= queryRef.size;idex++){
    //   allusers.push(queryRef.docs[idex].data())
    // }
    queryRef.docs.forEach((data) => {
      allusers.push(data.data())
    })

    console.log(allusers)
  }



  return {
    props: {
      users: allusers
    }, // will be passed to the page component as props
  }
}