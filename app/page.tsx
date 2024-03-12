export default function Home() {
  return <main className="bg-slate-400 h-screen flex items-center justify-center p-2 sm:bg-red-100  md:bg-green-100 lg:bg-orange-100 xl:bg-blue-100 2xl:bg-gray-100">

    <div className=" bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-3">
      
      {['차차','뚜비','빙빙'].map((person, index)=><div key={index} className="flex items-center gap-5 odd:bg-yellow-100 p-2 rounded-md border-solid border-b-2 last:border-b-0">
        <div className=" bg-red-200 rounded-full size-6"></div>
        {/* <span>{person}</span> */}
        <div className="bg-gray-400 w-20 h-4 rounded-lg animate-pulse"></div>

        <div className="bg-gray-200 rounded-full size-4 flex items-center justify-center animate-ping">
        {/* animate-bounce */}
          <span className=" font-thin text-xs">{index}</span>
          
        </div>
        <span className=" animate-spin">⏳</span>
      </div>)}

    </div>

  </main>;
}
