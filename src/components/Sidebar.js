import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";
export default function Sidebar() {
  return (
    <aside className="border p-5 w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 bg-white">
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
    </aside>
  );
}
