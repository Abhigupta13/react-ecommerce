import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">

      <header className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
        <div>
          <img src="/ecommerce.png" alt="QuickMart Logo" className="h-10 w-auto" />
        </div>
        <div>
          <Link to="/login" className="text-gray-900 hover:text-indigo-600 px-4">
            Log In
          </Link>
          <Link
            to="/signup"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-500"
          >
            Sign Up
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-grow flex-col-reverse md:flex-row items-center justify-between px-2 py-2 lg:px-16">
        <div className="md:w-1/2 space-y-8 text-center md:text-left">
          <h1 className="text-5xl -mt-5 font-bold text-gray-900">
            Welcome to <span className="text-indigo-600">QuickMart</span>
          </h1>
          <p className="text-gray-700 text-lg">
            QuickMart is your ultimate destination for shopping conveniently and effortlessly. Explore a wide range of products, enjoy amazing discounts, and experience seamless shopping like never before!
          </p>
          <ul className="list-disc text-gray-700 pl-5 space-y-2">
            <li>Exclusive deals and offers on top brands.</li>
            <li>Fast and reliable delivery right to your doorstep.</li>
            <li>Secure payment options for worry-free shopping.</li>
            <li>24/7 customer support to assist you anytime.</li>
          </ul>
          <div>
            <Link
              to="/login"
              className="bg-indigo-600 text-white px-10 py-3 md-8 rounded-md shadow-sm hover:bg-indigo-500"
            >
              Get Started
            </Link>
            {/* <div className="mt-8 p-4 bg-yellow-100 border border-blue-200 rounded-lg shadow-sm">
              <p className="text-md text-blue-800">
                <span className="font-semibold">⚠️ Please Note:</span> Login and Sign up may take 50-60 seconds to process as our backend is deployed on Render. Thank you for your patience! 🙏
              </p>
            </div> */}
          </div>
        </div>
   
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/e-commerce1.gif"
            alt="QuickMart Shopping"
            className="max-w-full h-max"
          />
        </div>
      </div>
    </div>
  );
}
