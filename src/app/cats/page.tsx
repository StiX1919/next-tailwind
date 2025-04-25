"use client"

import { useState } from "react";
import "./cats.css"
import CatCard from "./components/CatCard";

export default function Home() {
    const [currCats, setCats] = useState([])

    // function, request cats
    const request = new Request("https://cataas.com/cat", {
        // adjust request to use text input if it exists
        headers: {accept: "application/json"}
    });
    const getCat = async () => {
        try {
            const cat = await (await fetch(request)).json()
            console.log('hit', cat)
            setCats([...currCats, cat.url])
        } catch (error){
            console.log(error)
        }
    }

    const catImgContainer = (cats: [string]) => {
        return cats.map((catImg: string, i: number) => (<CatCard key={`cat-in:${i}`} catImg={catImg}/>))
    }

    // As a user, I can search for a random cat and see it’s picture.

    // As a user, I can see all of the cats I have found within this session.

    // As a user, I can enrich my search with a text phrase, using the `:text` parameter.

    // As a user, I can enrich my search using the tags provided by the API.

    // As a user, I am delighted by an animation as the new images enter my screen.

    // As a user, I can navigate to a “detail” page for a single image.


  return (
    <main className="flex flex-col gap-[32px] items-center">
        <div>
            <img src="https://angelstudios.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F182b30db-6c36-40c8-90ff-075c79dbb5ea%2Fcatalog-logo.png?table=block&id=569818d1-9637-47cf-a950-57837ba6065c&spaceId=323f87db-5e5a-420d-baa2-c2314d070723&width=1010&userId=&cache=v2"/>
            
            <div className="flex flex-col p-5 bg-(--background)">
                <input className="rounded-sm" type="text" placeholder="Search"></input>
                <input className="rounded-sm my-2" type="select" placeholder="Select a tag"></input>
                {/* add list of available tags from api */}
                <button 
                    className="rounded-sm bg-(--primary) p-3 text-white items-center drop-shadow-lg/50"
                    onClick={() => getCat()}
                >Find a Cat</button>
            </div>
            <div>
                {catImgContainer(currCats)}
                {/* loop over found images */}
                {/* animate images as they are added to list of cats */}
                {/* on click, navigate to detail page of cat */}
            </div>
        </div>
    </main>
  );
}