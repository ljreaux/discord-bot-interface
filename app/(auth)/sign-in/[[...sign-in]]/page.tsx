"use client";
import { SignIn } from "@clerk/nextjs";
import React from "react";
import { dark } from "@clerk/themes";

const SignInPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignIn
        appearance={{
          baseTheme: dark,
        }}
      />
    </main>
  );
};

export default SignInPage;
