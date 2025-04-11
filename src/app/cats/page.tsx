"use client"

import { useState } from "react";
import "./cats.css"

export default function Home() {
    const [cat, setCat] = useState('')

    // function, request cats
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const request = new Request("https://cataas.com/cat", {
        headers: {}
    });
    const getCat = async () => {
        try {
            const cat = await (await fetch(request)).json()
            console.log('hit', cat)
            // setCat(cat)
        } catch (error){
            console.log(error)
        }
        // fetch(request)
        //     .then((response) => {
        //         if (response.status === 200) {
        //             console.log(response.blob)
        //         // return response.json();
        //         } else {
        //             throw new Error("Something went wrong on API server!");
        //         }
        //     })
        //     .then((response) => {
        //         console.log(response)
        //         console.debug(response);
        //         // …
        //     })
        //     .catch((error) => {
        //         console.error(error);
        // });
    }


  return (
    <main className="flex flex-col gap-[32px] items-center">
        <div>
            <img src="https://angelstudios.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F182b30db-6c36-40c8-90ff-075c79dbb5ea%2Fcatalog-logo.png?table=block&id=569818d1-9637-47cf-a950-57837ba6065c&spaceId=323f87db-5e5a-420d-baa2-c2314d070723&width=1010&userId=&cache=v2"/>
            
            <div className="flex flex-col p-5 bg-(--background)">
                <input className="rounded-sm" type="text" placeholder="Search"></input>
                <input className="rounded-sm my-2" type="select" placeholder="Select a tag"></input>
                <button 
                    className="rounded-sm bg-(--primary) p-3 text-white items-center drop-shadow-lg/50"
                    onClick={() => getCat()}
                >Find a Cat</button>
            </div>
            <div>
                
            </div>
        </div>
    </main>
  );
}