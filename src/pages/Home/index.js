import React from "react";
import c from "./home.module.css";
import NavBar from "../../components/Navbar/NavBar";

export default function Home() {
  return (
    <div className={c.HomeContainer}>
      <div className={c.purpleBox}></div>
      <NavBar />
    </div>
  );
}
