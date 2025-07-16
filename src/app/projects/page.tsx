import ThreeDCardDemo from "@/components/shared/ThreeDCard";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { items } from "@/conf/projects";
import React from "react";

export interface IItems {
  title: string;
  description: string;
  imageURL: string;
  projectLink: string;
  liveProjectLink?: string;
}
const Projects = () => {
  const words = "My Projects";
  return (
    <div className="m-5 p-5">
      <TextGenerateEffect words={words} />
      {items.length === 0 ? (
        <>No Projects yet</>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {items.map((item) => (
            <ThreeDCardDemo
              key={item.title}
              title={item.title}
              description={item.description}
              imageURL={item.imageURL}
              projectLink={item.projectLink}
              liveProjectLink={item.liveProjectLink}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
