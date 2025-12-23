import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1 className="text-5xl font-serif m-1" >Page Not Found</h1>
      <div className="max-w-4xl w-full text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img
              src="/items/detective-404.gif"
              alt="404"
              className="w-full max-w-md"
            />{" "}
          </div>
        </div>
      </div>{" "}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          to="/"
          className="inline-flex items-center px-8 py-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
         
          Back to Home
        </Link>
      </div>
    </div>
  );
}
