import React from "react";
import Section from "./Section";
import { check } from "../assets";

const About = () => {
  return (
    <Section className="container" id="about">
      <div className="relative">
        <h2 className="h2 text-center mb-4">About Us</h2>
        <div className="flex flex-col items-center justify-center px-4">
          <p className="w-full max-w-[50rem] p-6 bg-n-8 border border-n-6 rounded-[2rem] flex flex-col items-center justify-center text-justify">
            We are a team of passionate developers, designers, and strategists
            committed to delivering high-performance, scalable, and secure web
            solutions. Our expertise spans across various technologies, ensuring
            that we create modern, user-friendly, and responsive websites
            tailored to meet your business goals.
            <p className="h4 text-center text-color-1 py-5">Why Choose Us?</p>
            <div className="flex items-center justify-center px-4">
              <ul className="w-full ">
                <li className="flex items-justify py-5 border-n-6 rounded-[2rem] items-center justify-start">
                  <img src={check} width={24} height={24} alt="Check" />
                  <p className="body-2 ml-4">
                    Inovation-Driven Approach - We stay ahead of trends to build
                    future-proof solutions.
                  </p>
                </li>
                <li className="flex items-justify py-5 border-n-6 rounded-[2rem] items-center justify-start">
                  <img src={check} width={24} height={24} alt="Check" />
                  <p className="body-2 ml-4">
                    Client-Centric Solutions - Your vision is our priority, we
                    customize our services to meet your unique needs.
                  </p>
                </li>
                <li className="flex items-justify py-5 border-n-6 rounded-[2rem] items-center justify-start">
                  <img src={check} width={24} height={24} alt="Check" />
                  <p className="body-2 ml-4">
                    Technical Excellence - We leverage the latest technologies
                    for efficient and scalable web development.
                  </p>
                </li>
                <li className="flex items-justify py-5 border-n-6 rounded-[2rem] items-center justify-start">
                  <img src={check} width={24} height={24} alt="Check" />
                  <p className="body-2 ml-4">
                    Reliable Support - We are always here to assist, ensuring
                    your website performs at its best.
                  </p>
                </li>
              </ul>
            </div>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
