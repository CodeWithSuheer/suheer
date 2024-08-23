import { motion } from "framer-motion";
import "./Home.css";
import Button from "../../components/Button";
const skillsData = [
  "React JS",
  "Node JS",
  "Redux Toolkit",
  "JavaScript",
  "Tailwind",
  "Bootstrap",
  "HTML5",
  "CSS3",
  "GitHub",
  "RestApi",
  "Responsiveness",
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * index,
    },
  }),
};

const Skills = () => {
  return (
    <>
      <section
        id="marquee"
        className="mx-auto flex min-h-[80vh] flex-col items-center justify-center pb-8 text-center"
      >
        <h1 className="hero-title title-font mb-4 w-full pb-0 pt-12 text-4xl font-bold lg:pb-4 lg:pt-4 lg:text-5xl">
          My Skills
        </h1>
        <div className="mx-auto mt-2 flex max-w-5xl justify-center text-center">
          <ul className="flex flex-wrap justify-center gap-1 text-lg text-gray-800 md:gap-2">
            {skillsData.map((skill, index) => (
              <motion.li
                className="skills_button cursor-pointer rounded-xl border border-gray-400 text-[15px] lg:text-[17px]"
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* <Link
          to="experience"
          spy={true}
          smooth={true}
          duration={700}
          type="button"
          className="mt-10 cursor-pointer"
        >
          <span className="project_btn">EXPERIENCE</span>
        </Link> */}

        <div className="button_box mt-7 lg:mt-7">
          <Button text="EXPERIENCE" />
        </div>
      </section>
    </>
  );
};

export default Skills;
