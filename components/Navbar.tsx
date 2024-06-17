"use client";
import React, { useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import UserInfoContainer from "./UserInfoContainer";

export default function Navbar() {
  return (
    <NavigationMenu className="m-auto mt-6">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "text-xl")}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-xl">
            Recipes
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] justify-center items-center text-center">
              <li className="row-span-2">
                <NavigationMenuLink href="/recipes/new">
                  Add New Recipe Command
                </NavigationMenuLink>
              </li>
              <li className="row-span-2">
                <NavigationMenuLink href="/recipes/edit">
                  Edit Recipe Commands
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-xl">
            Commands
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] justify-center items-center text-center">
              <li className="row-span-2">
                <NavigationMenuLink href="/commands/new">
                  Add New Command
                </NavigationMenuLink>
              </li>
              <li className="row-span-2">
                <NavigationMenuLink href="/commands/edit">
                  Edit Commands
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <UserInfoContainer />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
