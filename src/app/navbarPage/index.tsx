import React from "react";

const NavbarPage = () => {
  return (
    <div className="flex justify-between gap-9 shadow-lg px-[50px]">
      <div className="flex gap-10  flex-1">
        <div className="text-[40px]">Logo</div>
        <ul className="flex gap-3 items-center justify-center">
          <li>Men</li>
          <li>Woman</li>
          <li>Kids</li>
          <li>Beauty</li>
        </ul>
      </div>
      <div className="flex gap-10 justify-end items-center  flex-1">
        <div>
          <input type="text" placeholder="Search for Products"  className="w-96 h-10"/>
        </div>
        <div className="flex gap-5">
          <button>Profile</button>
          <button>Wishlist</button>
          <button>Bag</button>
        </div>
      </div>
    </div>
  );
};

export default NavbarPage;
