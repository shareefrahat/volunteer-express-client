import {
  ClipboardListIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";
import useServices from "../../hooks/useServices";

const EventList = () => {
  const [services] = useServices();
  let count = 1;
  return (
    <>
      <div className="flex flex-row">
        <section className="w-fit h-[1000px] px-10 py-10  border border-blue-700 shadow-md flex flex-col gap-10">
          <h2 className="text-2xl text-blue-700 font-bold">DASHBOARD</h2>
          <div>
            <Link
              className="flex flex-row items-center text-blue-700"
              to="/dashboard/eventList"
            >
              <ClipboardListIcon className="w-6 mx-2 text-slate-500 inline"></ClipboardListIcon>
              <span className="text-lg font-serif">List Of Events</span>
            </Link>
          </div>
          <div>
            <Link
              className="flex flex-row items-center hover:text-blue-700"
              to="/dashboard/addEvent"
            >
              <PlusCircleIcon className="w-6 mx-2 text-slate-500 inline"></PlusCircleIcon>
              <span className="text-lg font-serif">Add Event</span>
            </Link>
          </div>
        </section>
        <section className="w-full px-20 py-10">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Serial
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Event Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr
                    key={service._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {count++}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {service.name}
                    </th>
                    <td className="px-6 py-4 text-right">
                      <a
                        href="/"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button>
                        <TrashIcon className="w-5 text-red-700"></TrashIcon>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
};

export default EventList;
