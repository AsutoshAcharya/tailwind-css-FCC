import React from "react";

const Gridlayout = () => {
  function createArray(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
      result.push(i);
    }
    return result;
  }
  return (
    <div className="flex gap-5 flex-col">
      <div className="w-full grid  md:grid-cols-2 lg:grid-cols-2 gap-1 p-2">
        {createArray(7).map((item, idx) => (
          <div
            key={item}
            className={`flex justify-center bg-pink-400  rounded text-yellow-50 p-3 ${
              idx === 3 ? "col-span-3 bg-red-500" : ""
            }`}
          >
            {item} element
          </div>
        ))}
      </div>
      <div className="w-full grid  grid-flow-col grid-rows-4 gap-1 p-2">
        {createArray(12).map((item, idx) => (
          <div
            key={item}
            className={`flex justify-center bg-sky-500 rounded text-yellow-50 p-3
              ${
                idx === 0 || idx === 4 || idx === 8 || idx === 10
                  ? "row-span-2"
                  : undefined
              }`}
          >
            {item} element
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gridlayout;
