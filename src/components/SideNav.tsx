import Image from "next/image";
import React from "react";

const SideNav = () => {
  return (
    <div className="h-screen  p-6 shadow-sm">
      <div className="flex justify-center">
        <Image src={"/logo.svg"} width={120} height={100} alt="logo" />
      </div>
      SideNav
    </div>
  );
};

export default SideNav;
