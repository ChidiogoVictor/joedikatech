import Section from "./Section";
import { curve, heroBackground } from "../assets";
import Button from "./Button";
import team from "../assets/joedikatechHero2.jpg";
import CompanyLogos from "./design/CompanyLogos";

const Hero = () => {
  return (
    <Section
      className="pt-[6rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative overflow-hidden">
        {/* TEAM IMAGE placed first, behind text */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none z-0">
          <img
            src={team}
            className="w-[90%] max-w-4xl opacity-30 object-cover scale-125"
            width={1024}
            height={490}
            alt="Team Background"
          />
        </div>

        {/* TEXT CONTENT */}
        <div className="relative z-10 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6 mt-6 text-stroke-1 dark:text-n-1">
            Explore the Possibilities of Visionary Web Solutions with{" "}
            <span className="inline-block relative text-color-1 dark:text-color-2">
              JoeDikaTech{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-7 text-stroke-1/70 dark:text-n-2 lg:mb-8">
            We turn ideas into reality through cutting-edge web development.
            Whether you are a startup looking for a strong online presence, a
            growing business in need of digital transformation, or an enterprise
            requiring custom web applications, we've got you covered.
          </p>
          <Button href={"#contact"} blue>
            Free Consultation
          </Button>
        </div>

        {/* HERO BACKGROUND (only shows in dark mode) */}
        <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%] bg-light-1 dark:bg-transparent">
          <img
            src={heroBackground}
            className="hidden dark:block w-full"
            width={1440}
            height={1800}
            alt="hero background"
          />
        </div>

        {/* COMPANY LOGOS */}
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
    </Section>
  );
};

export default Hero;
