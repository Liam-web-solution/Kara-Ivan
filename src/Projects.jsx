import React, { useState } from "react";
import arrow from "./arrow.png";
import ecommerceImg from "./ecommerce.jpg";
import acid from "./sulphuric.jpg";
import bmiImg from "./BMI.png";
import procurementImg from "./procurement.jpg";

// ShowMoreText component
const ShowMoreText = ({ text }) => {
  const [showMore, setShowMore] = useState(false);
  const MAX_LENGTH = 120;
  const displayed = showMore ? text : text.slice(0, MAX_LENGTH) + ".....";

  return (
    <div>
      <p className="text-slate-300  leading-relaxed">
        {displayed}
      </p>
      <button
        onClick={() => setShowMore(!showMore)}
        className="text-blue-400 text-sm hover:underline mt-1"
      >
        {showMore ? "show less" : "show more"}
      </button>
    </div>
  );
};

// Single project card
const ProjectCard = ({ project }) => (
  <article className="rounded-xl overflow-hidden bg-slate-800/60 backdrop-blur-sm shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
    <div className="relative w-full h-40 sm:h-48 md:h-52 lg:h-56 overflow-hidden">
      <a href={project.link}>
        <img
          src={project.image}
          alt={project.description}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        <button className="absolute bottom-2 right-2 bg-white p-3 rounded-full shadow-lg 
                           transform  duration-4000 animate-bounce hover:scale-110 hover:shadow-xl">
          <img src={project.btn} alt="Arrow" className="w-6 h-6 object-contain" />
        </button>
      </a>
    </div>
    <div className="p-4 sm:p-5">
      <ShowMoreText text={project.description} />
    </div>
  </article>
);

function Projects() {
  const projects = [
    {
      id: 1,
      description:
        "'SUPPLIFY' a web app that lets manufacturers, producers signin and securely send supply requests to eCommerce procurement managers using Supabase authentication, with all data stored and managed in the Supabase backend for efficient supplier communication and tracking. (REACT, TAILWIND CSS, SUPABASE)",
      image: procurementImg,
      btn: arrow,
      link: "https://Liam-web-solution.github.io/supplify/",
    },
    {
      id: 2,
      description:
        "A fully functional eCommerce store with a seamless user flow from product selection to checkout. Customers navigate pages, interact with hover states, manage their cart. (JAVASCRIPT, HTML5, CSS3)",
      image: ecommerceImg,
      btn: arrow,
      link: "https://liam-web-solution.github.io/e-commece-website/",
    },
    {
      id: 3,
      description:
        "'Standardizer' is a compact, high-accuracy programme designed to streamline standardization of acids and base for titration process. (REACT, TAILWIND CSS)",
      image: acid,
      btn: arrow,
      link: "https://liam-web-solution.github.io/Chemstandardiser/",
    },
    {
      id: 4,
      description:
        "'BMI Calculator' helps Hospitals and gyms quickly assess body health with instant, accurate results. Beyond just numbers, it gives personalized advice to help users manage weight. (JAVASCRIPT, HTML5, CSS3)",
      image: bmiImg,
      btn: arrow,
      link: "https://liam-web-solution.github.io/BMI-Calculator/",
    },
  ];

  return (
    <section id="projects" className="py-14 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-xl sm:text-2xl font-semibold mb-8 text-center sm:text-left">
          Selected Projects
        </h2>

        <div className="grid grid-cols-1 max-sm:grid-cols-1 lg:grid-cols-4 max-lg:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
