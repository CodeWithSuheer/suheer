import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

// IMAGES
let fyb1 =
  "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/fyb1.png?v=1721679067";
let fyb2 =
  "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/fyb2.png?v=1721679066";
let googly1 =
  "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/googly1.png?v=1721679067";
let googly2 =
  "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/googly2.png?v=1721679067";
let brand1 =
  "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/brand1.png?v=1721679067";
let brand2 =
  "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/brand2.png?v=1721679067";
let octa1 =
  "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/octa1.png?v=1725388698";
let octa2 =
  "https://cdn.shopify.com/s/files/1/0704/6378/2946/files/octa2.png?v=1725388691";


interface CardType {
  id: number;
  name: string;
  language: string;
  url: string;
  title: string;
  cover: string[];
  status?: string;
  info?: string;
}

const cards: CardType[] = [
  {
    id: 1,
    name: "For Your Beauty",
    language: "React, TypeScript, Node JS, Express, Redux Toolkit",
    url: "https://foryourbeauty.shop",
    title: "Title 1",
    cover: [fyb1, fyb2],
  },
  {
    id: 2,
    name: "Googly Smart",
    language: "React JS, Node JS, Express, Redux Toolkit",
    url: "https://googly-smart.com",
    title: "Title 1",
    cover: [googly1, googly2],
  },
  {
    id: 3,
    name: "The BrandrsCo",
    language: "Next JS 14, Tailwind CSS",
    url: "https://thebrandrsco.com",
    title: "Title 1",
    cover: [brand1, brand2],
  },
  {
    id: 4,
    name: "Octa Tech Solutions",
    language: "React JS, Node JS, Express, Redux Toolkit",
    url: "https://www.octatechsolution.com",
    title: "Title 1",
    cover: [octa1, octa2],
  },
];

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

interface CardProps {
  card: CardType;
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="container mx-auto">
      <div key={card.id} className="h-[350px] w-[480px]">
        <a
          href={card.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden"
        >
          <div className="relative h-[240px] sm:h-[280px] lg:h-[280px]">
            <img
              src={card.cover[0]}
              alt=""
              className="absolute inset-0 h-max w-full rounded-xl object-cover opacity-100 shadow-xl transition duration-500 group-hover:scale-105 group-hover:opacity-0 lg:h-64"
            />

            <img
              src={card.cover[1]}
              alt=""
              className="absolute inset-0 h-max w-full rounded-xl object-cover opacity-0 shadow-xl transition duration-500 group-hover:scale-105 group-hover:opacity-100 lg:h-64"
            />
          </div>

          <div className="relative pl-2.5">
            <div className="mt-0 flex items-center justify-between text-gray-600">
              <p className="text-xl font-bold tracking-wide">{card.name}</p>
            </div>
            <h3 className="text-md font-bold text-gray-500 group-hover:underline group-hover:underline-offset-4">
              {card.status}
            </h3>
            <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
              {card.language}
            </h3>
            <h3 className="text-sm text-gray-700 underline underline-offset-4">
              {card?.info}
            </h3>
          </div>
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      <section id="projects" className="pt-10">
        <div className="">
          <h1 className="hero-title -mb-20 pl-5 text-3xl font-bold tracking-tight sm:text-4xl lg:pl-10">
            PROJECTS
          </h1>
          <HorizontalScrollCarousel />
        </div>
      </section>
    </>
  );
};

export default Projects;
