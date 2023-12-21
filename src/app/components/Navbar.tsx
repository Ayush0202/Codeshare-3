"use client";
import { UserButton, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { isSignedIn } = useAuth();
  const pathname = usePathname();

  return (
    <>
      <div
        className="flex justify-between p-5"
        style={{ backgroundColor: "#141e30 " }}
      >
        <div>
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src="logo.svg" width={30} height={30} alt="Homepage GIF" />

            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              Codeshare
            </span>
          </a>
        </div>
        <div className="flex justify-center ">
          {/* navbar on home page when user is not signed in */}
          {pathname === "/" && !isSignedIn && (
            <>
              <div className="mr-2 mt-1 text-sm text-gray-50">
                <Link href="/sign-in">Login</Link>
              </div>
            </>
          )}

          {/* navbar on home page when user is signed in */}
          {pathname === "/" && isSignedIn && (
            <>
              <UserButton />
            </>
          )}

          {/* navbar on dashboard page when user is signed in */}
          {pathname === "/codes" && isSignedIn && (
            <>
              <div className="mr-1">
                <Link className="text-white" href="/new">
                  New
                </Link>
              </div>
            </>
          )}

          {/* navbar on new page */}
          {pathname === "/new" && isSignedIn && (
            <button type="submit">
              <span className="text-white">Save</span>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
