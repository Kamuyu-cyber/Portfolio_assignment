// components/WorkExperience.tsx
import React from 'react';

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

const experienceData: Experience[] = [
  {
    company: "TechCorp",
    role: "Senior Software Engineer",
    period: "Jan 2022 - Present",
    description: [
      "Led development of scalable web applications using React and Node.js",
      "Mentored junior developers and conducted code reviews",
      "Implemented CI/CD pipelines improving deployment efficiency by 40%"
    ]
  },
  {
    company: "Digital Solutions",
    role: "Frontend Developer",
    period: "Mar 2019 - Dec 2021",
    description: [
      "Developed responsive UI components with React and TypeScript",
      "Collaborated with UX designers to improve user satisfaction by 25%",
      "Optimized frontend performance reducing load times by 30%"
    ]
  },
  {
    company: "StartUp Inc",
    role: "Junior Developer",
    period: "Jun 2017 - Feb 2019",
    description: [
      "Built RESTful APIs using Express.js",
      "Contributed to open-source projects",
      "Participated in agile development processes"
    ]
  }
];

const WorkExperience: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl text-center font-bold text-gray-900 mb-12">
        Work Experience
      </h2>
      <div className="relative">
        {/* Center timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200" />
        
        {experienceData.map((exp, index) => {
          const isMiddle = index === 1; // Middle item (second entry)
          return (
            <div
              key={index}
              className={`mb-8 relative w-full md:w-1/2 ${
                isMiddle
                  ? 'md:pr-8' // Middle item on left
                  : 'md:ml-auto md:pl-8' // Others on right
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-3 w-3 h-3 bg-blue-600 rounded-full ${
                  isMiddle
                    ? 'right-0 md:-right-8' // Dot on right for middle item
                    : 'left-0 md:-left-8' // Dot on left for others
                }`}
              />
              
              <div
                className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${
                  isMiddle
                    ? 'bg-white' // White background for middle (left) item
                    : 'bg-blue-100' // Blue background for right items
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {exp.role}
                </h3>
                <h4 className="text-lg text-gray-600 mb-2">{exp.company}</h4>
                <span className="block text-sm text-gray-500 mb-4">
                  {exp.period}
                </span>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkExperience;