import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../constants";

import Arrow from "../assets/svg/Arrow";

import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="flex justify-center items-center md:max-w-md lg:max-w-2xl"
          title="Our Services"
        />

        <div className="flex flex-wrap gap-10  justify-center">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[22rem] rounded-2xl bg-conic-gradient"
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-event-none bg-light-1 dark:bg-n-8 rounded-2xl">
                <h5 className="h5 mb-5 text-stroke-1 dark:text-n-1">
                  {item.title}
                </h5>
                <p className="body-2 mb-6 text-stroke-1/70 dark:text-n-3">
                  {item.text}
                </p>
                <div className="flex items-center mt-auto">
                  <img src={item.iconUrl} width={48} alt={item.title} />
                  <a
                    href="#contact"
                    className="ml-auto font-code text-xs font-bold text-blue-500 uppercase tracking-wider hover:underline"
                  >
                    Contact Us
                  </a>
                  <a href="#contact" className="ml-2">
                    <Arrow blue />
                  </a>
                </div>
              </div>

              {/* Background image visible only in dark mode */}
              <div
                className="absolute inset-0.5 hidden dark:block bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
