import React from "react";
//import Lottie from "lottie-react";
//import animation404 from "../assets/404-animation.json"; // your animation file

export default function NotFound() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      flexDirection: "column"
    }}>
      <h1>Page Not Found</h1>
      <p>The page you are looking for doesn’t exist.</p>
    </div>
  );
}
