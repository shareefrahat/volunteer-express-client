import { ClipboardListIcon, PlusCircleIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";

const AddEvent = () => {
  const handleSaveEvent = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const img = e.target.img.value;
    const description = e.target.details.value;
    const event = { name, img, description };
    const confirm = window.confirm("Are you sure to add new event?");
    if (confirm) {
      fetch("https://volunteer-express.herokuapp.com/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        });

      // toast.success("New Event Added", {
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
      console.log(event);
      e.target.reset();
    }
  };
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
        <section className="w-full px-20 py-10 ">
          <div className="shadow-md sm:rounded-lg border border-blue-700 p-5">
            <form onSubmit={handleSaveEvent}>
              <div className="mb-6">
                <label
                  htmlFor="event-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Event Name
                </label>
                <input
                  type="text"
                  id="event-name"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Name of new event"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="img-link"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Image Link
                </label>
                <input
                  type="text"
                  id="img-link"
                  name="img"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Paste image link here"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="details"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Description
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Event Details..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default AddEvent;
