// import SelectOptions from "@/components/SelectOptions";
import React from "react";

const Hero = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <section className="text-center flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
      {/* headline */}
      <h1 className="text-5xl mb-4 font-semibold">
        Discover International Degrees <br /> That Match Your Goals
      </h1>

      {/* subtitle */}
      <p className="text-gray-400">
        Explore top universities and programs across the world. <br /> Choose
        your country, select your degree level, and start your journey today.
      </p>

      {/* select degree or country */}
      <div>
        {/* country */}
        <select name="" id="">
          <option>USA</option>
          <option>UK</option>
          <option>Canada</option>
          <option>Australia</option>
          <option>Germany</option>
          <option>Malaysia</option>
          <option>Other</option>
        </select>

        {/* <SelectOptions options={options} /> */}

        {/* degree */}
        <select name="" id="">
          <option>Diploma</option>
          <option>Bachelor’s</option>
          <option>Master’s</option>
          <option>PhD</option>
        </select>
      </div>

      {/* search */}
      <div>
        <input type="search" />
      </div>
    </section>
  );
};

export default Hero;
