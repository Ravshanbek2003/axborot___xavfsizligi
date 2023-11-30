import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Assalomu alaykum",
          "Bugun biz sizlar bilan",
          "Xavfsizlik buzilganini aniqlovchi dasturlar",
          "haqida tanishib chiqamiz :))",
          "bizni kuzatib boring",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
