"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const UserInfoContainer = () => {
  return (
    <>
      <SignedIn>
        <UserButton
          afterSignOutUrl="/sign-in"
          appearance={{
            baseTheme: dark,
          }}
        />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </>
  );
};

export default UserInfoContainer;
