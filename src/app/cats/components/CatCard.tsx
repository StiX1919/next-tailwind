"use client"

// import { useState } from "react";
// import "./cats.css"
import Image from "next/image";
type CatProps = {
    catImg: string;
}

const CatCard = ({ catImg } : CatProps) => {

  return (
    <div className="w-2xs h-2xs bg-(--accent)">
        <img src={catImg} alt="cat image"/>
    </div>
  );
}

export default CatCard