import Button from "../Components/button";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex flex-col lg:flex-row justify-between items-center gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col lg:max-w-lg">
        <div className="font-palanquin text-4xl font-bold">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </div>
        <p className="text-slate-gray font-montserrat sm:mt-4 mt-5 lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="text-slate-gray font-montserrat sm:mt-4 mt-5 lg:max-w-lg mb-14">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div>
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={500}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
