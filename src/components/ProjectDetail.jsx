import { useParams, Link } from "react-router-dom";
import { MoveLeft, CheckCircle, Code, Layers } from "lucide-react";

const projectData = {
  zedapp: {
    title: "ZedApp",
    projectLink: "https://www.gozed.ae/",
    image: "/assets/Projects/project-1.png",
    description: "Luxury Ride-hailing Mobile App.",
  },
  "4wrd": {
    title: "4wrd – Multi-Tenant SaaS Platform",
    projectLink: "https://www.4wrd.com/",
    image: "/assets/Projects/4wrd/4wrd-1.png",
    collection: [
      "/assets/Projects/4wrd/4wrd-1.png",
      "/assets/Projects/4wrd/4wrd-2.png",
      "/assets/Projects/4wrd/4wrd-3.png",
      "/assets/Projects/4wrd/4wrd-4.png",
      "/assets/Projects/4wrd/4wrd-5.png",
      "/assets/Projects/4wrd/4wrd-6.png",
      "/assets/Projects/4wrd/4wrd-7.png",
      "/assets/Projects/4wrd/4wrd-8.png",
    ],
    description:
      "4wrd is a cutting-edge SaaS platform designed with a multi-tenant architecture, allowing organizations to fully customize their experience. It serves as a comprehensive solution for goal setting, employee engagement, surveys, messaging, and analytics—empowering businesses to streamline workflows and foster collaboration.",
    details: {
      coreFeatures: [
        "Multi-tenant architecture, enabling full customization for organizations",
        "Dynamic user platform and admin panel for efficient management",
        "Survey creation and goal-setting tools with complete workflow tracking",
        "Organization-specific activity feeds for improved internal communication",
        "Advanced member and team management with follow/unfollow functionality",
        "Comprehensive search features for people, messages, and organizational data",
        "Integrated messaging and real-time notifications to enhance engagement",
        "Custom reminder emails for surveys, goals, and important updates",
        "Interactive analytics dashboard providing deep insights for admins",
      ],
      contributions: [
        "Redesigned the entire UI/UX for both User and Admin panels, enhancing usability and reducing onboarding time by 40%",
        "Implemented a personalized home feed, allowing organizations to highlight relevant activities and updates for employees",
        "Developed an intuitive onboarding process, enabling organizations to fully customize their workspace, branding, and workflows",
        "Resolved critical bugs in the legacy codebase, including survey creation issues, goal-tracking inconsistencies, and communication failures",
        "Optimized the survey and goal creation workflow, reducing completion time by 30% and improving response accuracy",
        "Designed and developed a fully interactive analytics dashboard, giving admins real-time insights into employee engagement and performance",
        "Enhanced search capabilities, making it easier to find employees, teams, and messages, leading to a 50% improvement in search efficiency",
        "Built an automated custom email reminder system, ensuring users never miss important updates and boosting engagement rates by 25%",
        "Integrated role-based access control in the Admin Panel, improving security and flexibility for different organizational needs",
      ],
      techStack: [
        "React",
        "Tailwind CSS",
        "Ruby on Rails",
        "JavaScript",
        "jQuery",
        "Sketch",
        "SendGrid",
        "Docker",
        "AWS",
        "PostgreSQL",
      ],
    },
  },
  maplehr: {
    title: "MapleHR",
    projectLink: "https://maplehr.io/",
    image: "/assets/Projects/MapleHr/maplehr-1.png",
    collection: [
      "/assets/Projects/MapleHr/maplehr-1.png",
      "/assets/Projects/MapleHr/maplehr-2.png",
      "/assets/Projects/MapleHr/maplehr-3.png",
      "/assets/Projects/MapleHr/maplehr-4.png",
    ],
    description:
      "MapleHR is an internal HRMS designed to streamline HR processes like attendance, payroll, claims, and inventory tracking, with integrations such as Hubstaff API for time tracking and AWS services for automation.",
    details: {
      coreFeatures: [
        "Employee database, team assignments, and document storage",
        "Digital expense management and reimbursements",
        "Centralized employee queries and issue tracking",
        "Automated leave tracking and bulk approvals",
        "Integrated Hubstaff API for payroll automation",
        "Automated tracking of office logistics and assets",
        "Graphical reports for HR insights",
      ],
      contributions: [
        "Developed an algorithm to validate extra working days/hours for payroll adjustments",
        "Automated employee time tracking with Hubstaff API",
        "Configured AWS Lambda & EventBridge for payroll automation",
        "Streamlined HR workflows, reducing manual tasks by 90%",
        "Designed and implemented the UI for the Leave Management feature, ensuring a user-friendly experience",
        "Developed the Ticket Management System UI, enabling employees to easily submit and track issues",
        "Integrated multiple approval processes for leave requests and ticket resolutions, enhancing workflow efficiency",
        "Created real-time notifications for leave approvals and ticket status updates to improve team collaboration",
        "Optimized the Leave Management system to handle bulk approval workflows, reducing approval time",
      ],
      techStack: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "TypeScript",
        "AWS Lambda",
        "AWS S3",
        "AWS EventBridge",
        "GitHub",
        "Hubstaff API",
        "Mailchimp",
      ],
    },
  },
  ndr: {
    title: "NDR",
    image: "/assets/Projects/project-4.jpeg",
    description: "Debt Relief System.",
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return <p className="text-white text-center">Project not found</p>;
  }

  return (
    <div className="p-0 max-w-4xl mx-auto text-white mt-20 md:p-6 lg:p-6">
      <Link
        to="/projects"
        className="flex items-center gap-2 text-gray-400 group"
      >
        <MoveLeft className="transition-transform duration-300 group-hover:-translate-x-2 text-lg text-white group-hover:text-[#f46000]" />
        <span className="text-white">All Projects</span>
      </Link>

      <h1 className="text-4xl font-bold mt-6">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded-lg mt-4 shadow-xl"
      />
      <p className="mt-4 text-lg text-gray-300">{project.description}</p>

      {project.details && (
        <div className="mt-8 space-y-6">
          <div className="p-6 bg-[#1c1c1c] rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Layers className="text-[#f46000]" /> Core Features
            </h2>
            <ul className="mt-2 list-disc list-inside space-y-1 text-gray-300">
              {project.details.coreFeatures.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-[#1c1c1c] rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <CheckCircle className="text-green-400" /> My Contributions
            </h2>
            <ul className="mt-2 list-disc list-inside space-y-1 text-gray-300">
              {project.details.contributions.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-[#1c1c1c] rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Code className="text-blue-400" /> Tech Stack Used
            </h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.details.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-800 text-sm rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.collection && (
            <div className="grid grid-cols-1 gap-4 mt-6">
              {project.collection.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`${project.title} Screenshot ${idx + 1}`}
                  className="w-full rounded-lg shadow-lg"
                />
              ))}
            </div>
          )}
          <button
            className="bg-[#f46000] text-white text-sm font-medium px-12 py-2 rounded-lg mt-6 hover:bg-[#d94d00] transition duration-300 ease-in-out cursor-pointer"
            onClick={() =>
              window.open(project.projectLink, "_blank", "noopener,noreferrer")
            }
          >
            View Live
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
