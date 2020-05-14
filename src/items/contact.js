import { FaLinkedin, FaGithub, FaResearchgate, FaHome } from "react-icons/fa";
import { MdEmail, MdPlace } from "react-icons/md";

import React from "react";

var itemsContact = [
  {
    label: "Origin",
    text1: "Nová Dubnica, Slovakia",
    link1:
      "https://www.google.com/maps/place/018+51+Nov%C3%A1+Dubnica,+Slovakia/@48.9293555,18.1032084,23050m/data=!3m2!1e3!4b1!4m5!3m4!1s0x4714983afe6eae27:0x400f7d1c6971b70!8m2!3d48.9369734!4d18.1430307",
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
    label: "Research Gate",
    text1: "Adam_Mertel2",
    link1: "https://www.researchgate.net/profile/Adam_Mertel2",
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
