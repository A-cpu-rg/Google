import dayjs from "dayjs";
import React, { useContext } from "react";
import logo from "../assets/logo.png";
import GlobalContext from "../context/GlobalContext";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <header className="px-4 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col sm:flex-row items-center sm:space-x-5 space-y-3 sm:space-y-0">
        <img src={logo} alt="calendar" className="w-10 h-10 sm:w-12 sm:h-12" />
        <h1 className="text-lg sm:text-xl text-gray-500 font-bold">Calendar</h1>

        <div className="flex space-x-2">
          <button onClick={handleReset} className="border rounded py-1 px-3 sm:py-2 sm:px-4 text-sm sm:text-base">
            Today
          </button>
          <button onClick={handlePrevMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 text-base sm:text-xl">
              chevron_left
            </span>
          </button>
          <button onClick={handleNextMonth}>
            <span className="material-icons-outlined cursor-pointer text-gray-600 text-base sm:text-xl">
              chevron_right
            </span>
          </button>
        </div>

        <h2 className="text-lg sm:text-xl text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </h2>
      </div>

      <div className="mt-3 sm:mt-0">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-blue-500 text-white py-1 px-3 sm:py-2 sm:px-4 rounded text-sm sm:text-base">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
