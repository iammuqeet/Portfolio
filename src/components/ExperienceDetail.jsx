import { useParams, Link } from "react-router-dom";

import FAQSection from "./FAQSection";

import { MoveLeft } from "lucide-react";


const experienceData = {
  devsinc: {
    title: "Devsinc",
    companyLink: "https://devsinc.com/",
    roles: [
      {
        position: "Senior Software Engineer",
        date: "Promoted from Software Engineer | On-site",
        description:
          "As a Senior Software Engineer at Devsinc, I took on a leadership role, driving technical excellence and mentoring junior engineers while working on high-impact projects.",
        responsibilities: [
          "Full-Stack Development: Built and optimized scalable web applications using React, ReactNative, NextJS, Node.js (Express, NestJS), and Ruby on Rails.",
          "Architectural Improvements: Designed and implemented a multi-tenant system with AWS Lambda serverless architecture, ensuring high availability and scalability.",
          "Legacy System Enhancement: Revamped complex monolithic architectures, integrating modern technologies while maintaining stability.",
          "Code Quality & Reliability: Conducted thorough code reviews, resolved complex bugs, and improved test coverage to enhance maintainability.",
          "CI/CD & Cloud Infrastructure: Managed deployments on AWS (EC2, S3, RDS, CloudFront, MediaConvert, API Gateway) and Play Store/App Store with efficient CI/CD pipelines.",
          "Mentorship & Leadership: Guided two junior engineers, conducted live coding sessions, and assisted in debugging and problem-solving.",
          "Client Collaboration: Engaged with stakeholders to understand requirements, propose solutions, and ensure seamless project execution.",
        ],
        technologies: [
          "React",
          "Node.js (Express, NestJS)",
          "Ruby on Rails",
          "AWS Lambda",
          "Multi-Tenant Architecture",
          "jQuery",
          "VanillaJS",
          "PostgreSQL",
          "RDS",
          "CloudFront",
          "API Gateway",
          "EC2",
          "S3",
          "CI/CD",
          "Jira",
          "Agile",
          "SCRUM",
        ],
      },
      {
        position: "Software Engineer",
        date: "Promoted from Associate Software Engineer | On-site",
        responsibilities: [
          "Mobile & Web Development: Developed and maintained applications using React, React Native, and Node.js (Express).",
          "Complex Monolithic Architecture: Built and optimized large-scale applications, improving performance and maintainability.",
          "GraphQL & API Integrations: Designed and implemented efficient GraphQL APIs with Apollo Client for seamless data fetching.",
          "Cloud & DevOps: Managed infrastructure on AWS (EC2, S3, RDS) and implemented CI/CD pipelines for smooth deployments.",
          "Agile & SCRUM: Actively participated in sprint planning, daily stand-ups, and retrospective meetings.",
          "Mentorship & Code Reviews: Assisted junior developers, conducted pair programming sessions, and reviewed pull requests for quality assurance.",
          "Third-Party Integrations: Integrated payment gateways, analytics tools, and authentication systems to enhance app functionality.",
        ],
        technologies: [
          "React",
          "React Native",
          "Node.js (Express)",
          "GraphQL",
          "Apollo Client",
          "PostgreSQL",
          "RDS",
          "EC2",
          "S3",
          "TurboRepo",
          "CI/CD",
          "Agile",
          "Jira",
          "Play Store & App Store Deployments",
        ],
      },
      {
        position: "Associate Software Engineer",
        date: "Joined as an ASE | On-site",
        responsibilities: [
          "Building RESTful APIs: Developed backend services with Node.js and Prisma ORM to support web applications.",
          "Frontend Development: Created dynamic UIs with Next.js and Tailwind CSS for an enhanced user experience.",
          "Bug Fixing & Code Optimization: Identified and resolved critical bugs, improving system stability and performance.",
          "Agile Development: Actively participated in sprint planning, stand-ups, and retrospectives, ensuring smooth project execution.",
          "Collaboration & Learning: Worked closely with senior engineers, gaining exposure to best coding practices and scalable architecture.",
        ],
        technologies: [
          "Next.js",
          "Tailwind CSS",
          "Prisma ORM",
          "ClickUp",
          "Agile",
          "SCRUM",
          "Node.js",
          "RESTful APIs",
        ],
      },
    ],
  },
  brightChamps: {
    title: "BrightChamps",
    companyLink: "https://brightchamps.com/",
    roles: [
      {
        position: "Coding Instructor",
        date: "Feb 2020 - Jun 2020 (5 months) | Full-time",
        description:
          "As a Coding Instructor at BrightChamps, I played a vital role in teaching coding skills to young kids from Class Group 1 to 10. It is an online learning and teaching platform.",
        responsibilities: [
          "Creating and delivering coding lessons and projects using various tools like Scratch, Thunkable, Google Colab, and Code.org to cater to the diverse maturity levels and classes of the students.",
          "Providing individualized feedback and support to each student to ensure their understanding and progress.",
          "Monitoring and tracking student progress and performance to provide regular updates to parents and guardians."
        ],
        technologies: ["Scratch", "Thunkable", "Google Colab", "Code.org"]
      }
    ]
  },
};

const ExperienceDetail = () => {
  const isHomePage = window.location.pathname === "/";
  const { id } = useParams();
  const experience = experienceData[id];

  if (!experience) {
    return <p className="text-white text-center">Experience not found</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto text-white mt-20">
      <Link
        to="/experience"
        className="flex items-center gap-2 text-gray-400 group"
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-2 text-lg text-white group-hover:text-[#f46000]">
          <MoveLeft />
        </span>
        <span className="text-white">All Experiences</span>
      </Link>

      <h1 className="text-4xl font-bold mt-4">{experience.title}</h1>

      {experience.roles.map((role, index) => (
        <div key={index} className="mt-8">
          <h2 className="text-2xl font-semibold">{role.position}</h2>
          <p className="text-sm text-gray-400">{role.date}</p>
          <p className="mt-2">{role.description}</p>
          <h3 className="text-xl font-semibold mt-4">Responsibilities</h3>
          <ul className="mt-2 list-disc list-inside">
            {role.responsibilities.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mt-4">Technologies Used</h3>
          <p className="mt-2">{role.technologies.join(", ")}</p>
        </div>
      ))}

      <button
        className="bg-[#f46000] text-white text-sm font-medium px-12 py-2 rounded-lg mt-12 
  hover:bg-[#d94d00] transition duration-300 ease-in-out cursor-pointer"
        onClick={() =>
          window.open(experience.companyLink, "_blank", "noopener,noreferrer")
        }
      >
        Visit Company
      </button>

      {!isHomePage && <FAQSection />}
    </div>

    
  );
};

export default ExperienceDetail;
