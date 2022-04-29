import React from "react";

const ServiceCard = ({ service }) => {
  const { name, img } = service;

  return (
    <>
      <div className="rounded-md w-fit mx-auto">
        <div className="z-10">
          <img className="w-[200px] mx-auto" src={img} alt="" />
        </div>
        <div
          className={`bg-blue-700 text-white rounded-b-md mt-[-10px] z-20 py-5`}
        >
          <p className="text-xl">{name}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
