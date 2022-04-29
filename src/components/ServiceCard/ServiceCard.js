import React from "react";

const ServiceCard = ({ service }) => {
  const { name } = service;
  return (
    <>
      <p>{name}</p>
    </>
  );
};

export default ServiceCard;
