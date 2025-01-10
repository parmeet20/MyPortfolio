import { Spotlight } from '@/components/ui/spotlight';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import Image from 'next/image';
import React from 'react';
const skills = [
  { name: 'JavaScript', image: 'https://github.com/user-attachments/assets/fecd6277-8c89-48c0-ba00-34af6353842e' },
  { name: 'TypeScript', image: 'https://github.com/user-attachments/assets/94f8ccb8-3323-4846-bc91-a06b054adc29' },
  { name: 'React TS', image: 'https://github.com/user-attachments/assets/2b949e2d-cb26-48a8-9a42-7be18c6ad054' },
  { name: 'Next TS', image: 'https://github.com/user-attachments/assets/1077cad7-5488-4660-99ee-f3576edab922' },
  { name: 'Spring Boot', image: 'https://github.com/user-attachments/assets/9da24859-f3bd-430e-954e-9caf83882a83' },
  { name: 'Java', image: 'https://github.com/user-attachments/assets/f407d4c2-9535-47be-8836-2dbb900e7ce7' },
  { name: 'Python', image: 'https://github.com/user-attachments/assets/0e888f31-8a4e-49a2-9796-4717b436f269' },
  { name: 'C', image: 'https://github.com/user-attachments/assets/6af401f7-4e88-4703-9535-10a4c4e06cc7' },
  { name: 'C++', image: 'https://github.com/user-attachments/assets/9f70c76c-936f-4116-9b8b-b0c4cb0f9456' },
  { name: 'DSA', image: 'https://github.com/user-attachments/assets/050a4597-4169-405a-b322-c38abf59be76' },
  { name: 'Solidity', image: 'https://github.com/user-attachments/assets/a3e6dd42-842b-45cb-b1b5-7df18c6c6205' },
  { name: 'Ethers.js', image: 'https://github.com/user-attachments/assets/f337a897-6462-433b-83f9-f50281f8853c' },
  { name: 'Web3.js', image: 'https://github.com/user-attachments/assets/7454fe48-9f1b-48d1-8254-fd7522e36637' },
  { name: 'Express.js', image: 'https://github.com/user-attachments/assets/65e23a2f-4fb1-415a-bda5-00a6a12df088' },
  { name: 'Node.js', image: 'https://github.com/user-attachments/assets/53cfbeed-f8cf-4546-9491-84c853a2bd2c' },
  { name: 'MongoDB', image: 'https://github.com/user-attachments/assets/a0130ce4-8a86-46c5-9473-df9fc8216107' },
  { name: 'MySQL', image: 'https://github.com/user-attachments/assets/649af17b-2b30-41ce-9cd5-53ee7d9672bc' },
  { name: 'Git', image: 'https://github.com/user-attachments/assets/d606acad-42a2-472b-af10-6753055aaeda' },
  { name: 'GitHub', image: 'https://github.com/user-attachments/assets/3b1a9a31-0025-4223-aa76-587accb3e701' },
  { name: 'Hardhat', image: 'https://github.com/user-attachments/assets/1e36e0cd-9995-4d6d-a54f-1643ce314ee4' },
  { name: 'Rust', image: 'https://github.com/user-attachments/assets/41341114-91ea-49df-8e8b-5b9b0d21b5e3' },
  { name: 'Smart Contracts', image: 'https://github.com/user-attachments/assets/b6b731da-0fec-4a10-8d08-4c05cb2ad82d' },
];

const MySkillsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 hover:bg-muted text-gray-900 dark:text-gray-100">
            <Spotlight
              className="-top-40 fixed left-0 md:left-60 md:-top-20"
              fill="white"
            />
      <div className="container mx-auto px-4">
      <TextGenerateEffect className='my-24 pt-1' words="Programming Languages and Frameworks that I use" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-900 hover:bg-gray-950 shadow-lg rounded-lg p-5 flex flex-col items-center text-center"
            >
              {/* <Image
                src={skill.image}
                alt={skill.name}
                width={80}
                height={80}
                className="w-20 h-20 mb-4 object-contain"
              /> */}
              <h2 className="text-lg font-semibold">{skill.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkillsPage;
