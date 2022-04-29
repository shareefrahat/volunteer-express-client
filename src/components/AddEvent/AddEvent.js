import { ClipboardListIcon, PlusCircleIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";

const AddEvent = () => {
  return (
    <>
      <div className="flex flex-row">
        <section className="w-fit h-[1000px] px-10 py-10  border border-blue-700 shadow-md flex flex-col gap-10">
          <h2 className="text-2xl text-blue-700 font-bold">DASHBOARD</h2>
          <div>
            <Link
              className="flex flex-row items-center hover:text-blue-700"
              to="/dashboard/eventList"
            >
              <ClipboardListIcon className="w-6 mx-2 text-slate-500 inline"></ClipboardListIcon>
              <span className="text-lg font-serif">List Of Events</span>
            </Link>
          </div>
          <div>
            <Link
              className="flex flex-row items-center text-blue-700"
              to="/dashboard/addEvent"
            >
              <PlusCircleIcon className="w-6 mx-2 text-slate-500 inline"></PlusCircleIcon>
              <span className="text-lg font-serif">Add Event</span>
            </Link>
          </div>
        </section>
        <section></section>
      </div>
    </>
  );
};

export default AddEvent;
