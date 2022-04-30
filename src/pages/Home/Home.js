import React from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import useServices from "../../hooks/useServices";

const Home = () => {
  const [services] = useServices();
  console.log(services);
  return (
    <>
      <section>
        <h2 className="my-10 text-xl text-blue-700 text-center">Home Page</h2>
      </section>
      <section>
        <div className="grid grid-cols-4 gap-20 w-fit mx-auto mb-20">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
