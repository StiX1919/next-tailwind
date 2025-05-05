"use client"

// import { useState } from "react";
// import "./cats.css"
import Image from "next/image";
type CatProps = {
    catImg: string;
}

const CatCard = ({ catImg } : CatProps) => {

  return (
    <div className="flex items-center content-center size-60 bg-(--accent)">
        <img className="w-full h-full object-contain" src={catImg} alt="cat image"/>
    </div>
  );
}

export default CatCard