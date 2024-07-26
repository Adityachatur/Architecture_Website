import React, { useState, useRef, useEffect, useMemo } from "react";
import img1 from "../Images/Gallery1.jpg";
import img2 from "../Images/Gallery2.jpg";
import img3 from "../Images/Gallery3.jpg";
import img4 from "../Images/Gallery4.jpg";
import img5 from "../Images/Gallery5.jpg";
import img6 from "../Images/Gallery6.jpg";
import img7 from "../Images/Gallery7.webp";
import img8 from "../Images/Gallery8.jpeg";
import img9 from "../Images/Gallery9.webp";
import rightarrow from "../Images/rightarrow.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ProjectsCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(5); // Number of initially visible projects
  const [showAll, setShowAll] = useState(false); // Track if all projects are visible

  const projects = useMemo(
    () => ({
      architecture: [
        {
          id: 1,
          category: "architecture",
          title: "Architecture",
          image: img1,
          hoverTitle: "Modern Architecture",
        },
        {
          id: 2,
          category: "architecture",
          title: "Architecture",
          image: img2,
          hoverTitle: "Modern Architecture",
        },
        {
          id: 3,
          category: "architecture",
          title: "Architecture",
          image: img3,
          hoverTitle: "Confidential Technology",
        },
      ],
      interior: [
        {
          id: 5,
          category: "interior",
          title: "Interior",
          image: img4,
          hoverTitle: "Modern Architecture",
        },
        {
          id: 6,
          category: "interior",
          title: "Interior",
          image: img5,
          hoverTitle: "Confidential Technology",
        },
        {
          id: 7,
          category: "interior",
          title: "Interior",
          image: img6,
          hoverTitle: "Confidential Technology",
        },
      ],
      sustainable: [
        {
          id: 9,
          category: "sustainable",
          title: "Sustainable",
          image: img7,
          hoverTitle: "Modern Architecture",
        },
        {
          id: 10,
          category: "sustainable",
          title: "Sustainable",
          image: img8,
          hoverTitle: "Confidential Technology",
        },
        {
          id: 11,
          category: "sustainable",
          title: "Sustainable",
          image: img9,
          hoverTitle: "Confidential Technology",
        },
      ],
    }),
    []
  );

  const allProjects = useMemo(
    () => [
      ...projects.architecture,
      ...projects.interior,
      ...projects.sustainable,
    ],
    [projects]
  );

  const handleLoadMore = () => {
    setVisibleCount(allProjects.length);
    setShowAll(true);
  };

  const handleLoadLess = () => {
    setVisibleCount(5);
    setShowAll(false);
  };

  const projectsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      projectsRef.current.forEach((project, index) => {
        gsap.from(project, {
          opacity: 0,
          y: 80,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: project,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        });
      });
    });

    return () => ctx.revert();
  }, [allProjects]);

  return (
    <div className="w-full border-2 border-red-500">
      <div className="lg:w-10/12 w-11/12 mx-auto flex flex-col">
        <div className="text-center">
          <p className="lg:text-2xl text-xl font-semibold text-gray-400 lg:w-6/12 md:w-8/12 w-11/12 mx-auto h-[200px] flex items-center justify-center">
            Our Projects harness design and technology to create places where
            people live, work, and heal.
          </p>
        </div>

        <div className="w-full border-y-[5px] border-gray-400 h-auto my-10 relative">
          <div className="absolute lg:w-8/12 w-5/12 h-auto lg:h-[100px] mx-auto bg-white top-[-50px] left-1/2 transform -translate-x-1/2 flex lg:flex-row flex-col justify-center items-center text-center gap-5 lg:text-xl text-[12px] font-semibold uppercase">
            <h1
              className={`cursor-pointer ${
                selectedCategory === "all"
                  ? "text-black py-2 px-4 bg-customYellow"
                  : ""
              }`}
              onClick={() => setSelectedCategory("all")}
            >
              all
            </h1>
            <h1
              className={`cursor-pointer ${
                selectedCategory === "architecture"
                  ? "py-2 px-4 bg-customYellow"
                  : ""
              }`}
              onClick={() => setSelectedCategory("architecture")}
            >
              architecture
            </h1>
            <h1
              className={`cursor-pointer ${
                selectedCategory === "interior"
                  ? "py-2 px-4 bg-customYellow"
                  : ""
              }`}
              onClick={() => setSelectedCategory("interior")}
            >
              interior
            </h1>
            <h1
              className={`cursor-pointer ${
                selectedCategory === "sustainable"
                  ? "py-2 px-4 bg-customYellow"
                  : ""
              }`}
              onClick={() => setSelectedCategory("sustainable")}
            >
              sustainable
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:pt-20 md:pt-[20%] pt-[40%]">
            {(selectedCategory === "all"
              ? allProjects.slice(0, visibleCount)
              : projects[selectedCategory].slice(0, visibleCount)
            ).map((project, index) => (
              <div
                key={project.id}
                className="relative group overflow-hidden cursor-pointer"
                ref={(el) => (projectsRef.current[index] = el)}
              >
                <img
                  className="h-[500px] w-full object-cover rounded-md group-hover:scale-125 duration-200 ease-out"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-customgreen bg-opacity-0 translate-y-full group-hover:translate-y-64 group-hover:bg-opacity-100 duration-300 flex items-top justify-center transition-all ease-in-out">
                  <h2 className="text-xl text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out lg:text-[2.5vw] md:text-[3rem] text-[2.3rem] uppercase font-bold">
                    <div className="mx-auto text-left lg:w-10/12 w-8/12 leading-normal pt-20 pl-5 space-y-5">
                      <h1>{project.hoverTitle}</h1>
                      <h1 className="lg:text-2xl text-xl font-semibold flex justify-start items-center">
                        Start a Project{" "}
                        <span>
                          <Link to={"/contact"}>
                            {" "}
                            <button>
                              <img
                                src={rightarrow}
                                alt=""
                                className="p-2 bg-white ml-2 hover:translate-x-4 duration-200"
                              />
                            </button>
                          </Link>
                        </span>
                      </h1>
                    </div>
                  </h2>
                </div>
                <div className="absolute bottom-0 left-10 w-10 h-52 bg-customYellow flex items-center justify-center group-hover:bg-white duration-500">
                  <span className="transform rotate-90 lg:text-2xl text-xl font-bold">
                    {project.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center py-4">
            {showAll ? (
              <button
                onClick={handleLoadLess}
                className="bg-customYellow text-white px-6 py-2 rounded hover:bg-yellow-600 transition duration-300"
              >
                Load Less
              </button>
            ) : (
              <button
                onClick={handleLoadMore}
                className="bg-customYellow text-white px-6 py-2 rounded hover:bg-yellow-600 transition duration-300"
              >
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCategory;
