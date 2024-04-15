"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Image } from "@nextui-org/react";
import { ThemeSwitcher } from "./theme-toggle";
export default function Nav() {
  const { data: session } = useSession();
  const router = useRouter();
  const menuItems = [
    "Home",
    "Contact Us",
    "About Us",
    "Log Out",
  ];
  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.replace("/");
  };
  const handleDashboard = () => {
    router.replace("/" + session?.user?.role)
  }
  return (
    <Navbar className="w-full" isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label="Open menu"
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarContent justify="center" >
        <NavbarBrand className="w-[4    +0vw] ml-0 mr-28">
          <Image
            width={50}
            src="/logo.png"
            alt="Logo"
            className="mr-28"
          />
          <p className="font-bold text-inherit text-blue-600 ml-4">Swasthya Samriddhi</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/" className="hover:text-blue-600 transition-colors duration-300">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/about" color="foreground" className="hover:text-blue-600 transition-colors duration-300">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact" className="hover:text-blue-600 transition-colors duration-300">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {session ? (
          <>
            <NavbarItem>
              <Button color="primary" variant="flat" onClick={handleDashboard}>
                Dashboard
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button onClick={handleSignOut} color="primary" variant="flat">
                Log Out
              </Button>
            </NavbarItem>
          </>
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="/login" className="text-base font-medium text-gray-600 hover:text-blue-600 transition-colors duration-300">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="/register" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
      <NavbarItem>
              <ThemeSwitcher />           
       </NavbarItem>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full text-base font-medium text-gray-600 hover:text-blue-600 transition-colors duration-300"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

    </Navbar>
  );
}
