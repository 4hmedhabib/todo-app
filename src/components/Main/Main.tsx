import {
  PlusCircleIcon,
  BadgeCheckIcon,
  TrashIcon,
  CheckIcon,
} from "@heroicons/react/solid";
import { CalendarIcon } from "@heroicons/react/outline";

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
      <main className="card-white">
        <div className="tasks flex flex-col items-center gap-3 w-full">
          <div
            id="task"
            className="card-white  max-w-lg w-full shadow  border-l-4 border-blue-500 flex justify-between relative"
          >
            <div className="flex flex-col gap-3">
              <h5 className="font-semibold tracking-wider text-green-500">
                Trip
              </h5>
              <h1 className="text-lg font-bold tracking-wider">
                Learnig Lesson
              </h1>
              <hr />
              <div className="flex items-center gap-2 ml-3 ">
                <BadgeCheckIcon className="w-7 h-7 text-green-500 rounded-full"></BadgeCheckIcon>
                <span className="text-green-500 font-semibold tracking-wide">
                  Complete
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-around items-center">
              <div className="flex gap-2">
                <span className="text-sm text-slate-500"> Apr 12</span>
                <CalendarIcon className="w-5 h-5 text-slate-500 rounded-full"></CalendarIcon>
              </div>
              <div className="flex justify-between w-14 h-5">
                <CheckIcon className="w-5 h-5 text-green-500 cursor-pointer rounded-full"></CheckIcon>
                <TrashIcon className="w-5 h-5 text-red-500  cursor-pointer rounded-full"></TrashIcon>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Main;
