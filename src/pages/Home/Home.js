import React from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import useServices from "../../hooks/useServices";

const Home = () => {
  const [services] = useServices();
  console.log(services);
  return (
    <>
      <section>
        <h2 className="my-10">Home Page</h2>
      </section>
      <section>
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </section>
    </>
  );
};

export default Home;
