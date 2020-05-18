import {
  FaMapMarkedAlt,
  FaDatabase,
  FaChartLine,
  FaCode,
  FaUserAlt,
} from "react-icons/fa";

import React from "react";

var itemsSkill = [
  {
    label: "Web programming",
    icon: <FaCode />,
    examples: [
      { name: "JavaScript", link: "" },
      { name: "TypeScript", link: "" },
      { name: "GitHub", link: "" },
      { name: "Webpack", link: "" },
    ],
  },
  {
    label: "FrontEnd frameworks",
    icon: <FaCode />,
    examples: [
      { name: "ReactJS", link: "" },
      { name: "post CSS", link: "" },
      { name: "Scss / Sass", link: "" },
      { name: "Bulma", link: "" },
      { name: "Bootstrap", link: "" },
      { name: "Tailwind CSS", link: "" },
      { name: "JQuery", link: "" },
    ],
  },
  {
    label: "Server-side programming",
    icon: <FaCode />,
    examples: [
      { name: "NodeJS", link: "" },
      { name: "Express", link: "" },
      { name: "Sockets.io", link: "" },
      { name: "Java", link: "" },
    ],
  },
  {
    label: "Data analysis",
    icon: <FaCode />,
    examples: [
      { name: "Pandas", link: "" },
      { name: "scikit", link: "" },
      { name: "networkX", link: "" },
      { name: "R", link: "" },
    ],
  },
  {
    label: "Visualization frameworks and libraries (+3D)",
    icon: <FaChartLine />,
    examples: [
      { name: "D3", link: "" },
      { name: "HTML5 Canvas", link: "" },
      { name: "Cytoscape", link: "" },
      { name: "Three.js", link: "" },
    ],
  },
  {
    label: "Desktop applications",
    icon: <FaChartLine />,
    examples: [
      { name: "Inkscape", link: "" },
      { name: "Adobe Illustrator", link: "" },
      { name: "Figma", link: "" },
      { name: "Draw.io", link: "" },
    ],
  },

  {
    label: "Web GIS",
    icon: <FaMapMarkedAlt />,
    examples: [
      { name: "Leaflet.js", link: "" },
      { name: "D3", link: "" },
      { name: "Open Layers", link: "" },
      { name: "MapBox", link: "" },
      { name: "Google Maps", link: "" },
    ],
  },
  {
    label: "Analytical GIS libraries",
    icon: <FaMapMarkedAlt />,
    examples: [
      { name: "Grass", link: "" },
      { name: "GDAL", link: "" },
      { name: "R", link: "" },
      { name: "OGC services", link: "" },
      { name: "JTS", link: "" },
      { name: "turf", link: "" },
    ],
  },
  {
    label: "Desktop GIS",
    icon: <FaMapMarkedAlt />,
    examples: [
      { name: "QGIS", link: "qgis.com" },
      { name: "ArcGIS", link: "" },
    ],
  },
  {
    label: "Relational",
    icon: <FaDatabase />,
    examples: [
      { name: "PostgreSQL (+PostGIS)", link: "" },
      { name: "MariaDB", link: "" },
      { name: "MySQL", link: "" },
    ],
  },
  {
    label: "NoSQL",
    icon: <FaDatabase />,
    examples: [
      { name: "MongoDB", link: "" },
      { name: "RethinkDB", link: "" },
      { name: "ArrangoDB", link: "" },
    ],
  },
  {
    label: "Other",
    icon: <FaDatabase />,
    examples: [
      { name: "Neo4j", link: "" },
      { name: "REST", link: "" },
      { name: "GraphQL", link: "" },
      { name: "Sockets.io", link: "" },
    ],
  },
  {
    label: "Computers",
    icon: <FaUserAlt />,
    examples: [
      { name: "Unix", link: "" },
      { name: "Basic knowledge of servers", link: "" },
    ],
  },
  {
    label: "Languages",
    icon: <FaUserAlt />,
    examples: [
      { name: "English (C1)", link: "" },
      { name: "German (B2)", link: "" },
      { name: "French (A1)", link: "" },
      { name: "Slovak | Czech (Native)", link: "" },
    ],
  },
  {
    label: "Science",
    icon: <FaUserAlt />,
    examples: [
      { name: "Academic writing", link: "" },
      { name: "Academic research", link: "" },
    ],
  },
];

export default itemsSkill;
