"use client"

import { useState } from "react";

// import { useState } from "react";
type CardProps = {
    text?: string;
    img?: string;
    index: number;
}

const HoverCard = ({ text, img, index } : CardProps) => {
    const [activeHover, setHover] = useState(false)
    const [activeIndex, setIndex] = useState<number | null>(null)

    const hoverFunc = (enter : boolean, hovIndex: number | null = null) => {
        console.log('hit', enter, hovIndex)
        if(enter){
            setIndex(hovIndex)
            setHover(true)
        } else {
            setHover(false)
            setIndex(null)
            console.log('hit 2', activeHover, activeIndex)
        }
    }

  return (
    <div className="flex">
        <div className="flex items-center content-center size-20 bg-(--foreground) rounded-xl" onMouseEnter={() => hoverFunc(true, index)} onMouseLeave={() => hoverFunc(false)}>
            <img className="w-full h-full object-contain" src={img} alt="Image"/>
            <h1>{text}</h1>
        </div>
        {activeHover && activeIndex === index && <div className="flex absolute ml-25 items-center content-center size-80 bg-(--primary) rounded-xl"></div>}
        {/* <div className="flex absolute ml-25 items-center content-center size-80 bg-(--primary) rounded-xl"></div> */}
    </div>
  );
}

export default HoverCard