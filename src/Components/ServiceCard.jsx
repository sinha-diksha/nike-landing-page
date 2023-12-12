import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div
      className="flex-1 sm:w-[350px]
    sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16"
    >
      <div className="flex justify-center items-center bg-coral-red rounded-full w-11 h-11">
        <img src={imgURL} width={24} height={24} alt={label} />
      </div>
      <h2 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h2>
      <p className="font-montserrat text-slate-gray break-words leading-normal">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
