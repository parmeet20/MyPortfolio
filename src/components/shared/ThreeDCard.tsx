"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { GithubIcon, Radio } from "lucide-react";
import Image from "next/image";

interface ThreeDCardDemoProps {
  title: string;
  description: string;
  imageURL: string;
  projectLink: string;
  liveProjectLink?: string;
}

const ThreeDCardDemo: React.FC<ThreeDCardDemoProps> = ({
  title,
  description,
  imageURL,
  projectLink,
  liveProjectLink,
}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50/80 backdrop-blur-md relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imageURL}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between">
          <div className="flex justify-between items-center mt-20">
            <a href={projectLink} target="_blank">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 flex items-center py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Star on Github
                <GithubIcon className="ml-2" />
              </CardItem>
            </a>
          </div>
          {liveProjectLink && (
            <div className="flex justify-between items-center mt-20">
              <a href={liveProjectLink} target="_blank">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 flex items-center "
                >
                  Live
                  <Radio className="ml-2" />
                </CardItem>
              </a>
            </div>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
};
export default ThreeDCardDemo;
