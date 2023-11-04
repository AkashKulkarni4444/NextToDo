"use client";
import React, { useState } from "react";
// import { Box, Button, Link, Text, useColorMode } from "@chakra-ui/react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FaGoogle, FaMoon, FaSun } from "react-icons/fa";
import { auth } from "@/firebase/index";
import useAuth from "@/hooks/useAuth";
const Auth = () => {
  const [colorMode, setColorMode] = useState("dark");
  const { isLoggedIn, user } = useAuth();
  const toggleColorMode=()=>{
    setColorMode((prev)=>{
      if (prev==="dark") {
        return "light";
      }
      else{
        return "dark";
      }
    })
  }
  const handleAuth = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div className="fixed border-[rgba(255,255,255,0.08)] ml-[75%] flex flex-row">
      {/* <button
        onClick={() => toggleColorMode()}
        className="inline-flex appearance-none align-middle items-center justify-center relative whitespace-nowrap outline-none leading-[1.2] rounded-md font-semibold h-10 pr-4"
      >
        {colorMode == "dark" ? <FaSun /> : <FaMoon />}
      </button> */}
      {isLoggedIn && (
        <div className="w-full flex flex-col" >
          <div className="text-green-600">{user.email}</div>
          <div className="text-red-800 cursor-pointer" onClick={() => auth.signOut()}>
            Logout
          </div>
        </div>
      )}
      {!isLoggedIn && (
        <div className="rounded-lg border-[white] border-[2px] flex flex-row w-full items-center align-middle ps-4 py-4" >
          <FaGoogle/>
          <button className="px-4"  onClick={() => handleAuth()}>Login with Google</button>
        </div>
      )}
    </div>
  );
};

export default Auth;
