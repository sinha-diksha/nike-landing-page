import PopularProductCard from "../Components/PopularProductCard";
import { products } from "../Constants";
const PopularProducts = () => {
  return (
    <section id="products">
      <div>
        <h1 className="font-palanquin text-4xl font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h1>
        <p className="text-slate-gray font-montserrat sm:mt-4 mt-5 lg:max-w-lg">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 md:gap-4 sm:gap-4 gap-14 mt-10">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
