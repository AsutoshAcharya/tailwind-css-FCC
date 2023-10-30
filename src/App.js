import { Fragment } from "react";
import Gridlayout from "./Gridlayout";
import Layouts from "./Layouts";

function App() {
  return (
    <div className="w-scheen h-screen bg-blue-950">
      <div className="border-4 border-green-500 bg-random h-50% w-screen flex justify-center gap-12">
        <p className="text-green-600 text-sm underline decoration-wavy decoration-red-400 underline-offset-2 capitalize break-all">
          Started learning Tailwind css
        </p>
      </div>
      <div className="font-bold text-white bg-red-300 p-4 w-1/2 mt-4 mx-auto">
        <p className="mx-auto w-fit -m-4">Sizes and spaces</p>
      </div>
      <div className="w-full flex flex-col mt-3.5 md:flex-row flex-wrap">
        <div className="flex-1 h-16 bg-cyan-400">display</div>
        <div className="flex-1 h-16 bg-red-950">flex</div>
      </div>

      <div className="w-full flex flex-row gap-5 text-green-300 justify-between">
        <div className="flex-1">EL1</div>
        <div className="flex-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
          suscipit consectetur! Voluptatem optio, perspiciatis dicta molestiae
        </div>
        <div className="flex-1">EL3</div>
      </div>
      {/* <Gridlayout />*/}
      <Layouts />
    </div>
  );
}

export default App;
