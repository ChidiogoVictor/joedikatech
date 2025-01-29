import React from "react";
import Section from "./Section";
import Heading from "./Heading";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          classNamme="md:max-w-md lg:max-w-2xl"
          title="Chat Smater, Not Harder with Brainwave"
        />

        <div className="flex flex-wrap gap-10 mb-10"></div>
      </div>
    </Section>
  );
};

export default Benefits;
