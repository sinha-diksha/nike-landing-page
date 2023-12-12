import { services } from "../Constants";
import ServiceCard from "../Components/ServiceCard";
const Services = () => {
  return (
    <section className="flex max-container gap-4">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
