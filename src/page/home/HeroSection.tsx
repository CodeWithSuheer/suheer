import { Link } from "react-scroll";
import "./Home.css";
import BlurFade from "../../../@/components/magicui/blur-fade";

const HeroSection = () => {
  return (
    <>
      <section className="relative isolate z-0 flex min-h-[70vh] items-center justify-center px-6 pt-10 lg:min-h-[80vh] lg:px-8">
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute inset-x-0 -top-[8rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[20rem]">
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
          <div className="text-center">
            <BlurFade delay={0.25} inView>
              <h1 className="hero-title text-4xl font-bold sm:text-6xl">
                Suheer Zahid
              </h1>
            </BlurFade>
            <BlurFade delay={0.25 * 3} inView>
              <p className="text-md mb-12 mt-3 max-w-2xl leading-6 text-gray-700 lg:mt-6 lg:text-lg xl:leading-8">
                I'm a MERN stack developer with a passion for solving complex
                problems and bringing ideas to life through code. With a year of
                hands-on experience, I've built web applications that are both
                functional and user-friendly. Committed to clean code and
                seamless experiences. 🚀
              </p>
            </BlurFade>

            <BlurFade delay={0.25 * 5} inView>
              <div className="">
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={700}
                  type="button"
                  className="hero_button cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <span>SKILLS</span>
                </Link>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
