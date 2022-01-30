import React from "react";

interface Props {}

function AsideLeft(props: Props) {
  return (
    <aside className="flex-none w-20 rounded-md shadow-lg shadow-gray-200">
      <div className=" shadow mx-2 mt-5 rounded-full">
        <img src="/todo-logo.png" alt="" className=" rounded-full" />
      </div>
    </aside>
  );
}

export default AsideLeft;
