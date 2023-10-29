import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="border-4 border-green-500 bg-random h-50% w-screen flex justify-center gap-12">
        <p className="text-green-600 text-sm underline decoration-wavy decoration-red-400 underline-offset-2 capitalize break-all">
          Started learning Tailwind css
        </p>
      </div>
      <div className="font-bold text-white bg-red-300 p-4 w-1/2 mt-4 mx-auto">
        <p className="mx-auto w-fit -m-4">Sizes and spaces</p>
      </div>
      <div className="w-full flex mt-3.5">
        <div className="w-1/2 h-16 bg-cyan-400"></div>
        <div className="w-1/2 h-16 bg-red-950"></div>
      </div>
    </Fragment>
  );
}

export default App;
