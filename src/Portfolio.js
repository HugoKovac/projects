import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import pp from "./pp.jpg";

const projects = [
  {
    title: "Kernel Module Ad Filtering",
    description:
      "Intercept incoming DNS requests and filter them with a filter list - C++.",
    details: "Private repo working at Eyeo.",
  },
  {
    title: "High Demand API for ISPs",
    description: "API to serve filtering lists for ISPs - Go.",
    details: "Private repo working at Eyeo.",
  },
  {
    title: "Ad Filtering HTTP Proxy",
    description:
      "DNS, DoH, and DoT proxy to block with NXDOMAIN if in list - Go.",
    link: "https://github.com/HugoKovac/http-proxy-adfilter",
  },
  {
    title: "BareBones i386 Kernel",
    description: "Displays strings, handles keyboard input, GDT, and IDT - C.",
    links: [
      "https://github.com/nattensleplubo/kfs",
      "https://github.com/HugoKovac/kfs",
    ],
  },
  {
    title: "Reimplementation of nmap",
    description: "Network scanning tool - C.",
    link: "https://github.com/HugoKovac/nmap",
  },
  {
    title: "Nginx Link Reverse Proxy with PHP CGI",
    description: "Custom web server and reverse proxy - C++.",
    link: "https://github.com/HugoKovac/WebServer",
  },
  {
    title: "Reimplementation of a POSIX Shell",
    description: "Shell reimplementation with scripting support - C.",
    link: "https://github.com/HugoKovac/Minishell",
  },
];

const Portfolio = () => {
  return (
    <div className="flex flex-col mx-auto w-xl md:w-3/4 p-6 bg-black min-h-screen text-white">
      <div className="text-center mb-8">
        <img
          src={pp}
          alt="Hugo Kovac"
          className="w-40 h-40 rounded-full mx-auto border-4 border-gray-700"
        />
        <h1 className="text-4xl font-bold mt-4">Hugo Kovac</h1>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://github.com/hugokovac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline flex items-center space-x-2"
          >
            <FaGithub className="text-2xl" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/hugokovac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline flex items-center space-x-2"
          >
            <FaLinkedin className="text-2xl" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
      <ul className="list-none space-y-6">
        {projects.map((project, index) => (
          <li key={index} className="p-4 border-b border-gray-700">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-400 mt-2">{project.description}</p>
            {project.details && (
              <p className="text-gray-500 mt-1">{project.details}</p>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-2 flex items-center space-x-2"
              >
                <FaGithub className="text-xl" />
                <span>View on GitHub</span>
              </a>
            )}
            {project.links &&
              project.links.map((link, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline mt-2 flex items-center space-x-2"
                >
                  <FaGithub className="text-xl" />
                  <span>View on GitHub ({i + 1})</span>
                </a>
              ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
