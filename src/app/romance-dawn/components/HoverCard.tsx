"use client"

// import { useState } from "react";
type CardProps = {
    text?: string;
    img?: string;
}

const HoverCard = ({ text, img } : CardProps) => {

  return (
    <div className="flex items-center content-center size-20 bg-(--foreground) rounded-xl">
        <img className="w-full h-full object-contain" src={img} alt="Image"/>
        <h1>{text}</h1>
    </div>
  );
}

export default HoverCard