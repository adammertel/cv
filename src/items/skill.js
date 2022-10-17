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
      { name: "JavaScript / TypeScript", link: "" },
      { name: "Webpack / Parcel / React-create-app", link: "" },
      { name: "ReactJS", link: "" },
      { name: "Styled components", link: "" },
      { name: "post CSS / SCSS / Sass", link: "" },
      { name: "Redux / MobX", link: "" },
    ],
  },
  {
    label: "Server-side programming",
    icon: <FaCode />,
    examples: [
      { name: "NodeJS / Express", link: "" },
      { name: "Python / Flask", link: "" },
    ],
  },
  {
    label: "Data analysis",
    icon: <FaCode />,
    examples: [
      { name: "pandas, scikit-learn, numpy", link: "" },
      { name: "networkX", link: "" },
      { name: "h3", link: "" },
      { name: "h3", link: "" },
    ],
  },
  {
    label: "Visualization frameworks and libraries",
    icon: <FaChartLine />,
    examples: [
      { name: "D3 / SVG", link: "" },
      { name: "HTML5 Canvas", link: "" },
      { name: "Konva.js", link: "" },
      { name: "Three.js", link: "" },
      { name: "Vega-lite / Altair", link: "" },
      { name: "Plotly", link: "" },
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
    ],
  },
  {
    label: "Analytical GIS libraries + services",
    icon: <FaMapMarkedAlt />,
    examples: [
      { name: "Grass", link: "" },
      { name: "GDAL", link: "" },
      { name: "geopandas", link: "" },
      { name: "OGC services", link: "" },
      { name: "JTS", link: "" },
      { name: "turf", link: "" },
    ],
  },
  {
    label: "Desktop GIS",
    icon: <FaMapMarkedAlt />,
    examples: [
      { name: "QGIS", link: "" },
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
      { name: "Neo4j", link: "" },
      { name: "REST", link: "" },
      { name: "GraphQL", link: "" },
      { name: "Sockets.io", link: "" },
    ],
  },
  {
    label: "Computers, CI",
    icon: <FaUserAlt />,
    examples: [
      { name: "Unix", link: "" },
      { name: "GitHub", link: "" },
    ],
  },
  {
    label: "Languages",
    icon: <FaUserAlt />,
    examples: [
      { name: "English (C1)", link: "" },
      { name: "German (B1)", link: "" },
      { name: "Slovak | Czech (Native)", link: "" },
    ],
  },
  {
    label: "Other",
    icon: <FaUserAlt />,
    examples: [
      { name: "Academic writing", link: "" },
      { name: "Academic research", link: "" },
      { name: "Trello", link: "" },
      { name: "Slack", link: "" },
    ],
  },
];

export default itemsSkill;
