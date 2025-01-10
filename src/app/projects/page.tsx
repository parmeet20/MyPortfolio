import ThreeDCardDemo from "@/components/shared/ThreeDCard";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React from "react";

interface IItems {
  title: string;
  description: string;
  imageURL: string;
  projectLink: string;
}
const Projects = () => {
  const items: IItems[] = [
    {
      title: "CrowdChain",
      description:
        "CrowdChain is a decentralized crowdfunding platform where users can create campaigns and track funding progress through a dynamic circle chart. The card displays the campaign's goal and raised funds in ETH. Only the campaign owner can withdraw funds once the goal is met, offering secure, transparent funding with a modern UI.",
      imageURL:
        "https://github.com/user-attachments/assets/23c4b787-13a4-4b9d-bfcc-3a8a0b8cd3d4",
      projectLink: "https://github.com/parmeet20/CrowdChain",
    },
    {
      title: "ImageValut",
      description:
        "Decentralized Image Gallery lets you upload images to IPFS via Pinata, offering full control over your content. Grant or revoke access to specific wallet addresses, ensuring privacy and security. Easily download images with a click of a button while enjoying seamless, decentralized storage.",
      imageURL:
        "https://github.com/user-attachments/assets/3dc9fe3c-de19-4dc4-a09f-767f326cfb50",
      projectLink: "https://github.com/parmeet20/ImageVault",
    },
    {
      title: "Decentralized Lottery app",
      description:
        "A Decentralized Lottery app built with Solidity, React, and TypeScript. Users enter by sending 1 ETH, and the contract owner can pick a winner and winner will be selected at random. The frontend connects to the Ethereum blockchain via Ethers.js and MetaMask, with a responsive design using Tailwind CSS.",
      imageURL:
        "https://github.com/user-attachments/assets/4c62d1ff-1ab3-49d0-a833-b70d2f02da3c",
      projectLink:
        "https://github.com/parmeet20/decentralized_lottery_application",
    },
    {
      title: "Dappazon",
      description:
        "This is the amazon clone made with web3 and nextjs where you can purchase products with ETH cryptocurrency.",
      imageURL:
        "https://github.com/user-attachments/assets/d31e92e3-f17b-4485-aa15-18f0cb8e6e7d",
      projectLink:
        "https://github.com/parmeet20/decentral_amazon",
    },
  ];
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
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
