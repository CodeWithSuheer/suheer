import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Suheer_CV from "../../../Suheer_CV.pdf";
import { cn } from "../../../@/lib/utils";
import AnimatedGridPattern from "../../../@/components/magicui/animated-grid-pattern";

interface AboutText {
  text: string;
}

const About: React.FC<AboutText> = ({ text }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const letters = Array.from(text);

  const handleResumeDownload = async () => {
    try {
      const response = await fetch(Suheer_CV);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "Suheer_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <section className="relative isolate z-0 -mt-14 mb-24 px-6 pt-0 lg:px-8">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />
        <div ref={ref} className="relative mx-auto max-w-2xl py-2">
          {/* <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[20rem]">
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
          </div> */}
          <div className="text-center">
            <div className="max-w-7xl md:mx-auto">
              <h3 className="mb-1 text-start text-2xl font-semibold text-gray-500 md:text-center">
                About My Self
              </h3>
              <motion.div
                className="mb-2 justify-start md:justify-center"
                style={{
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.5rem",
                }}
                variants={container}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {letters.map((letter, index) => (
                  <motion.span
                    className="my-2 text-2xl font-semibold text-gray-700 sm:text-4xl md:my-3"
                    variants={child}
                    key={index}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.div>

              <p className="text-md text-start text-gray-600 md:text-center md:text-lg">
                A MERN stack developer with a BSCS degree and a solid foundation
                in web development. Over the past year, I've sharpened my skills
                in React JS, Node JS, Express, MongoDB, Tailwind, and Bootstrap.
                I specialize in creating scalable solutions, writing clean code,
                and staying updated with the latest technologies. 🚀
              </p>
            </div>
            <div className="mt-8 flex items-center justify-start md:justify-center">
              <button
                type="button"
                onClick={handleResumeDownload}
                className="rounded-lg bg-gray-800 px-4 py-2 font-medium text-white shadow-md duration-150 hover:bg-gray-700 hover:shadow-none active:bg-gray-900"
              >
                Download My Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
