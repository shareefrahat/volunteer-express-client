import React from "react";

const ServiceCard = ({ service }) => {
  const { name, img } = service;

  return (
    <>
      <div
        className="rounded-md w-fit mx-auto text-center 
      transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:shadow-lg hover:shadow-slate-400"
      >
        <div className="z-10">
          <img className="w-[200px] mx-auto" src={img} alt="" />
        </div>
        <div
          className={`text-blue-100 bg-blue-800 rounded-b-md mt-[-10px] z-20 py-5`}
        >
          <p className="text-xl font-bold font-serif">{name}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
