"use client";
import { SignUp } from "@clerk/nextjs";
import React from "react";
import { dark } from "@clerk/themes";

const SignUpPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignUp
        appearance={{
          baseTheme: dark,
        }}
      />
    </main>
  );
};

export default SignUpPage;
