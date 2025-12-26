import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-[4%]">
      <Link href={"/"}>
        <img src="/logo.png" alt="logo" className="w-16" />
      </Link>

      <div className="space-x-5">
        <Link href={"/"}>Home</Link>
        <Link href={"/universities"}>Universities</Link>
        <Link href={"/compare"}>Compare</Link>
      </div>
    </nav>
  );
};

export default Navbar;
