import React from "react";

const Shoecard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg != imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl
  ${
    bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-tranparent"
  } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover rounded-xl sm:w-40 sm:h-40 max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          width={127}
          height={103}
          alt="shoe collection"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Shoecard;
