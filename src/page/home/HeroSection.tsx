// import { Link } from "react-scroll";
import Button from "../../components/Button";
import "./Home.css";

const HeroSection = () => {
  return (
    <>
      <section className="relative isolate z-0 flex min-h-[70vh] items-center justify-center px-6 pt-10 lg:min-h-[90vh] lg:px-8">
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[20rem]">
            <svg
              className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="text-start md:text-center">
            <h1 className="hero-title text-4xl font-bold sm:text-6xl">
              Suheer Zahid
            </h1>
            <p className="text-md mt-3 leading-6 text-gray-600 lg:mt-6 lg:text-lg xl:leading-8">
              A motivated Full Stack Developer with 1+ years of experience,
              having strong command over React, Node JS, Next JS. Highly
              experienced in developing websites and web applications with
              Bootstrap, Tailwind, React JS and Node JS. 🚀
            </p>

            {/* <div className="mt-6">
              <Link
                to="marquee"
                spy={true}
                smooth={true}
                duration={700}
                type="button"
                className="hero_button cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <span className="p-10">SKILLS</span>
              </Link>
            </div> */}

            <div className="button_box mt-5">
              {/* <button
                type="button"
                className="lg:text:lg rounded-md bg-[#252525] px-9 py-2 text-sm tracking-wider text-white"
              >
                SKILLS
              </button> */}

              <Button text="SKILLS" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
