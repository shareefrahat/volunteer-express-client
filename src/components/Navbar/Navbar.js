import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: "/",
      name: "HOME",
    },
    {
      id: 2,
      path: "/events",
      name: "EVENTS",
    },
    {
      id: 3,
      path: "/donate",
      name: "DONATE",
    },
    {
      id: 4,
      path: "/blog",
      name: "BLOG",
    },
  ];
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <section>
          <nav className="flex flex-row justify-center items-center">
            {links.map((link) => (
              <Link
                className="px-5 text-xl text-blue-700"
                key={link.id}
                to={link.path}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </section>
        <section>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded text-xl dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 px-2.5 py-1 ml-10"
          >
            Login
          </button>
        </section>
      </div>
    </>
  );
};

export default Navbar;
