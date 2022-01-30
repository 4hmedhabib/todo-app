import { PlusCircleIcon } from "@heroicons/react/solid";

const Main = () => {
  return (
    // Main
    <section id="main" className="grow font-nunito">
      <header className="m-4 flex items-center justify-between">
        <div id="logo-text">
          <h1 className="text-2xl font-bold tracking-wider">Tiigsi Todo App</h1>
          <p className="text-sm text-gray-500 tracking-wider">
            Save Your Tasks in Tiigsi Todo
          </p>
        </div>
        <div className="bg-white  rounded-full text-xl w-10 h-8 flex justify-center items-center ">
          <button>
            <PlusCircleIcon className="w-7 h-7 text-blue-500 rounded-full"></PlusCircleIcon>
          </button>
        </div>
      </header>
      <main className="bg-white m-3 px-3 py-5 shadow-lg shadow-gray-100 rounded-md">
        main
      </main>
    </section>
  );
};

export default Main;
