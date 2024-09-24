import React from "react";
import Day from "./Day";
export default function Month({ month }) {
  return (
    <div className="hidden md:flex-1 md:grid md:grid-cols-7 md:grid-rows-5 ">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}