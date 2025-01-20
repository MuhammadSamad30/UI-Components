"use client";
import Image from "next/image";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { IoIosCart } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="bg-[#f0d9d9a4] shadow-md">
      <div className="container mx-auto px-4 lg:px-10 py-4 flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/nav-logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="max-w-[100px]"
          />
        </Link>

        <button
          type="button"
          className="lg:hidden p-2 text-gray-500 hover:text-gray-800 focus:outline-none"
          aria-label="Toggle navigation"
        >
          <span className="text-xl">☰</span>
        </button>

        <div className="hidden lg:flex w-full lg:w-auto lg:items-center">
          <ul className="flex flex-col lg:flex-row lg:space-x-6 w-full lg:w-auto">
            <li>
              <Link
                href="/"
                className="text-gray-800 hover:text-blue-500 px-2 py-1 block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="product"
                className="text-gray-800 hover:text-blue-500 px-2 py-1 block"
              >
                Products
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="/catagory"
                className="text-gray-800 hover:text-blue-500 px-2 py-1 block"
              >
                Catagory
              </Link>
            </li>
          </ul>
          <div className="flex items-center lg:ml-6 space-x-4">
           
            <div className="flex space-x-4 text-xl text-gray-700">
              <Link href="profile" aria-label="Profile">
                <CgProfile />
              </Link>
              <Link href="wishlist" aria-label="Wishlist">
                <FaHeartCirclePlus />
              </Link>
              <Link href="cart" aria-label="Cart">
                <IoIosCart />
              </Link>
              <Link href="checkout" aria-label="checkout">
                <IoBagCheckOutline />
              </Link>
            </div>
            <Link
                href="/login"
                className="inline-block mt-1 px-6 py-1 bg-[#6c4db47a] text-white border-spacing-8 border-4 border-[#2222] text-lg font-medium rounded-xl hover:bg-[#9373dd7a] transition"
              >
                Login
              </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
