import React from "react";
import HeadingPage from "../SubPages/Headingpage";
import img from "../Images/1.jpg";
import ProjectsCategory from "./ProjectsCategory";
const MainProjectPage = () => {
  return (
    <div>
      <HeadingPage title={"Projects"} ThisPage={"Projects"} img={img} />
      <ProjectsCategory />
    </div>
  );
};

export default MainProjectPage;
