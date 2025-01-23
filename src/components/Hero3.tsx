import React from "react";

type Item = {
  title: string;
  institution: string;
  duration: string;
  description: string;
};

const education: Item[] = [
  {
    title: "Specialization Course",
    institution: "University of Studies, Poland, Cracow",
    duration: "Jan 2004 - Dec 2006",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nobis animi assumenda sint recusandae! Dolor placeat debitis animi illum quo repellendus pariatur.",
  },
  {
    title: "Academy Course",
    institution: "University of Studies, Poland, Cracow",
    duration: "Jan 2004 - Dec 2006",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nobis animi assumenda sint recusandae! Dolor placeat debitis animi illum quo repellendus pariatur.",
  },
];

const experience: Item[] = [
  {
    title: "Web Designer & Front-End",
    institution: "University of Studies, Poland, Cracow",
    duration: "Jan 2004 - Dec 2006",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nobis animi assumenda sint recusandae! Dolor placeat debitis animi illum quo repellendus pariatur.",
  },
  {
    title: "WordPress Developer",
    institution: "University of Studies, Poland, Cracow",
    duration: "Jan 2004 - Dec 2006",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nobis animi assumenda sint recusandae! Dolor placeat debitis animi illum quo repellendus pariatur.",
  },
];

const Hero3: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-8">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education Section */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Education</h2>
          {education.map((item, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold text-gray-700">{item.title}</h3>
              <p className="text-sm text-gray-500">
                {item.institution} <br />
                {item.duration}
              </p>
              <p className="text-gray-600 mt-2">{item.description}</p>
              {index < education.length - 1 && (
                <hr className="border-gray-300 my-4" />
              )}
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Experience</h2>
          {experience.map((item, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold text-gray-700">{item.title}</h3>
              <p className="text-sm text-gray-500">
                {item.institution} <br />
                {item.duration}
              </p>
              <p className="text-gray-600 mt-2">{item.description}</p>
              {index < experience.length - 1 && (
                <hr className="border-gray-300 my-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero3;
