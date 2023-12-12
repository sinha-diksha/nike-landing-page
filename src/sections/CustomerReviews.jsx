import { reviews } from "../Constants";
import ReviewCard from "../Components/ReviewCard";
const CustomerReviews = () => {
  return (
    <section>
      <div className="text-4xl font-palanquin font-bold text-center">
        What Our <span className="text-coral-red">Customers </span>Say
      </div>
      <p className="info-text text-slate-gray mt-3 text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="flex justify-evenly max-container items-center max-lg:flex-col flex-1 mt-5">
        {reviews.map((review) => (
          <ReviewCard
            key={review.name}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
