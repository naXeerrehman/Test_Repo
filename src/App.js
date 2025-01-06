import React from "react";
import FastFood from "./assets/FastFood.jpg";
import Book_now from './assets/Book_now.png'
import './App.css'
const Banner = () => {
  
  return (
    <div className="lora h-[100vh]">
    <div>
    <img
        src={FastFood}
        className="w-[1280px] h-[625px] mx-auto"
        alt="Fastfood_image"
      />
      <h1
        className="text-6xl text-white absolute bottom-[300px] ml-[30px] w-[550px]"
        style={{
          textShadow:
            "2px 2px 0 black, -2px 2px 0 black, 2px -2px 0 black, -2px -2px 0 black",
        }}
      >
        Welcome To<br></br>The Hinckley Beanery
        <br></br>The Tasty House
      </h1>
    </div>
    <div className="bg-red-600 w-[150px] h-[150px] rounded-full relative bottom-[500px] left-[1000px]">
     <img src={Book_now} alt="" className="relative bottom-[7px]"/>
    </div>
    </div>
  );
};

export default Banner;
