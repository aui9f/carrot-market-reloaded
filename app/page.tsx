export default function Home() {
  return <main className="bg-slate-400 h-screen flex items-center justify-center p-2 sm:bg-red-100  md:bg-green-100 lg:bg-orange-100 xl:bg-blue-100 2xl:bg-gray-100">

   <div className="group flex flex-col">
    <input type="text" className="bg-gray-100 w-full" placeholder="Email"/>
    <span className=" group-focus-within:block hidden">Make sure is a valid email</span>
    <button className=" m-apple rounded-banana">OK</button>

   </div>
  </main>;
}
