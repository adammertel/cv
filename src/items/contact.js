import { FaLinkedin, FaGithub, FaResearchgate, FaHome } from "react-icons/fa";
import { MdEmail, MdPlace } from "react-icons/md";

import React from "react";

var itemsContact = [
  {
    label: "Origin",
    text1: "Nová Dubnica, Slovakia",
    link1: false,
    icon: <FaHome />,
  },
  {
    label: "Actual residence",
    text1: "Brno, Czech Republic",
    link1: false,
    icon: <MdPlace />,
  },
  {
    label: "Mail",
    text1: "mertel.adam@gmail.com",
    link1: false,
    icon: <MdEmail />,
  },
  {
    label: "GitHub",
    text1: "adammertel",
    link1: "https://github.com/adammertel",
    icon: <FaGithub />,
  },
  {
    label: "Academia",
    text1: "AMertel",
    link1: "https://muni.academia.edu/AMertel",
    icon: <FaResearchgate />,
  },
  {
    label: "Linkedin",
    text1: "adam mertel",
    link1: "https://www.linkedin.com/in/adam-mertel-a294573a/",
    icon: <FaLinkedin />,
  },
];

export default itemsContact;
