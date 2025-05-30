"use client";
import { x } from "@/x/client";
import { HomeIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function NavbarClient() {
  const pathname = usePathname();

  const menu = (
    <>
      <li>
        <Link href="/" className={twMerge(pathname === "/" && "menu-active")}>
          <HomeIcon className="h-4 w-4" />
          Home
        </Link>
      </li>
    </>
  );

  return (
    <div className="border-b-base-300 border-b">
      <div className="container mx-auto">
        <div className="navbar p-0">
          <div className="navbar-start">
            <Link href="/" className="text-xl font-bold">
              {x.config.name}
            </Link>
          </div>

          <div className="navbar-end">
            <div className="hidden md:flex">
              <ul className="menu menu-horizontal">{menu}</ul>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost md:hidden"
              >
                <MenuIcon className="h-5 w-5" />
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content rounded-box bg-base-100 text-base-content border-base-300 z-[1] mt-1 w-max min-w-52 border"
              >
                {menu}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
