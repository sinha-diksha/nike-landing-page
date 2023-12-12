import Button from "../Components/button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10 "
      id="contact-us"
    >
      <div className="font-bold font-palanquin text-4xl">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </div>
      <div className="lg:max-w-[40%] w-full sm:border sm:border-slate-gray sm:rounded-full flex items-center max-sm:flex-col gap-5 p-2.5">
        <input placeholder="subscribe@nike.com" type="text" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
