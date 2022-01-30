import React from "react";
import { AsideLeft, AsideRight } from "./components";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="w-screen h-screen flex justify-between">
      <AsideLeft></AsideLeft>
      <Main></Main>
      <AsideRight></AsideRight>
    </div>
  );
}

export default App;
