"use client";
import React from "react";
import { signIn } from "next-auth/react";
const signin = () => {
  return <button onClick={() => signIn()} className="text-green-600  " />;
};

export default signin;
