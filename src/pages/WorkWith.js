import React from "react";
import { Link } from "react-router-dom";

// components
import BackButton from "../components/BackButton";


const WorkWith = () => {
  return (
    <div className="page-transition">
      <h1>I WORK WITH</h1>
        <div>
            <Link to="/about-hiab/page01">EFFER</Link>
        </div>
        <div>
            <Link to="/about-effer/page01">Hiab</Link>
        </div>
        <BackButton toWhere="/"/>
    </div>
  );
}

export default WorkWith;