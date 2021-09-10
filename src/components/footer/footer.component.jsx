import React from "react";
//import { Link } from "react-router-dom";

//import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <div id="footer" className=" bg-grey-lightest mx-auto shadow rounded pb-4 bg-cover">
      <div className="mt-2 p-4 border-b border-grey-light  text-center">
        <span className="text-4xl font-thin">Mountain View, US</span>
        <span className="hidden sm:inline-block align-bottom text-xs">
          ( 94041 )
        </span>
      </div>
      <div className="text-center text-xl text-grey-light p-4">
        <span>Fog</span>
        <span>, fog</span>
      </div>
      <div className="flex justify-center">
        <div className="text-center p-2">
          <div className="text-lg text-grey-light">
            <span className="text-right">15˚C</span>
            <span className="text-center text-5xl text-gray-400 mx-6  font-thin">
              17˚C
            </span>
            <span className="text-left">20˚C</span>
          </div>
          <div className="text-grey-light tracking-wide mt-2">
           {new Date().getFullYear()}{" "} <span className="text-gray-900 bg-gray-200 px-2 py-1 rounded-lg opacity-30" >Arsim Sejdiu</span> | Saturday | 30 Dec | 10:30pm
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
