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
    label: "Web Programming",
    icon: <FaCode />,
    examples: [
      { name: "JavaScript | TypeScript", link: "" },
      { name: "ReactJS | Remix", link: "" },
      { name: "Vite | Webpack", link: "" },
      { name: "Styled Components | PostCSS | SCSS | Sass", link: "" },
      { name: "Redux | MobX", link: "" },
      { name: "WebSockets", link: "" },
    ],
  },
  {
    label: "Server-Side Programming",
    icon: <FaCode />,
    examples: [
      { name: "Node.js | Express.js", link: "" },
      { name: "Python | Flask", link: "" },
      { name: "Prisma", link: "" },
    ],
  },
  {
    label: "Data Analysis",
    icon: <FaChartLine />,
    examples: [
      { name: "(Geo)pandas | Scikit-learn | NumPy", link: "" },
      { name: "NetworkX | Graph-tool", link: "" },
    ],
  },
  {
    label: "Visualization Frameworks and Libraries",
    icon: <FaChartLine />,
    examples: [
      { name: "D3 | SVG", link: "" },
      { name: "HTML5 Canvas", link: "" },
      { name: "Konva.js", link: "" },
      { name: "Three.js", link: "" },
      { name: "Vega-Lite | Altair", link: "" },
      { name: "Plotly", link: "" },
    ],
  },
  {
    label: "Geospatial",
    icon: <FaMapMarkedAlt />,
    examples: [
      { name: "Leaflet.js", link: "" },
      { name: "D3", link: "" },
      { name: "DeckGL | MapLibre", link: "" },
      { name: "GDAL", link: "" },
      { name: "GeoPython", link: "" },
      { name: "OGC Services", link: "" },
      { name: "Turf | H3", link: "" },
      { name: "QGIS | ArcGIS", link: "" },
    ],
  },
  {
    label: "Databases",
    icon: <FaDatabase />,
    examples: [
      { name: "PostgreSQL (+PostGIS)", link: "" },
      { name: "MariaDB | MySQL", link: "" },
      { name: "DuckDB", link: "" },
      { name: "SQLite", link: "" },
      { name: "Prisma", link: "" },
      { name: "MongoDB", link: "" },
      { name: "RethinkDB", link: "" },
      { name: "Neo4j", link: "" },
    ],
  },
  {
    label: "Languages",
    icon: <FaUserAlt />,
    examples: [
      { name: "English (Fluent)", link: "" },
      { name: "German (Advanced)", link: "" },
      { name: "Slovak | Czech (Native)", link: "" },
    ],
  },
  {
    label: "Other",
    icon: <FaUserAlt />,
    examples: [
      { name: "Unix", link: "" },
      { name: "GitHub", link: "" },
      { name: "Figma", link: "" },
      { name: "Inkscape", link: "" },
      { name: "Scientific Research and Writing", link: "" },
    ],
  },
];

export default itemsSkill;
