import Link from "next/link";
import { Fragment } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import app from "../firbase/firebaseAuth";
const auth = getAuth(app);
auth;
const Client = () => {
  var route = useRouter();

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      route.push("/login");
    } else {
      return (
        <div>
          client
          <button
            onClick={() => {
              signOut(auth)
                .then(() => {
                  // Sign-out successful.
                })
                .catch((error) => {
                  // An error happened.
                });
            }}
          >
            logout
          </button>
        </div>
      );
    }
  });
};

export default Client;
