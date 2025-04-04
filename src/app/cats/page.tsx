import "./cats.css"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <img src="https://angelstudios.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F182b30db-6c36-40c8-90ff-075c79dbb5ea%2Fcatalog-logo.png?table=block&id=569818d1-9637-47cf-a950-57837ba6065c&spaceId=323f87db-5e5a-420d-baa2-c2314d070723&width=1010&userId=&cache=v2"/>
        
        <div className="flex flex-col">
            <input type="text" placeholder="Search"></input>
            <input type="select" placeholder="Select a tag"></input>
            <button>Find a Cat</button>
        </div>
      </main>
    </div>
  );
}