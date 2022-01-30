import React from "react";
import { AsideLeft, AsideRight } from "./components";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="bg-blue-50 w-screen h-screen flex justify-between">
      <AsideLeft></AsideLeft>
      <Main></Main>
      <AsideRight></AsideRight>
    </div>
  );
}

export default App;
