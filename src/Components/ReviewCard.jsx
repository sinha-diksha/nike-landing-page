import React from "react";
import { star } from "../assets/icons";
const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="mt-2">
        <img
          src={imgURL}
          alt="customer"
          className="w-[120px] h-[120px] rounded-full object-contain m-0"
        />
      </div>
      <div className=" flex mt-4">
        <img src={star} width={24} height={24} />
        <p>({rating})</p>
      </div>
      <p className="max-w-sm info-text text-center mt-1">{feedback}</p>
      <p className="font-bold mt-1">{customerName}</p>
    </div>
  );
};

export default ReviewCard;
