import {
  Section,
  Tabs,
  Hero,
  Container,
  Heading,
} from "react-bulma-components";

import {
  FaLinkedin,
  FaGithub,
  FaResearchgate,
  FaHome,
  FaBook,
  FaMapMarkedAlt,
  FaDatabase,
  FaChartLine,
  FaCode,
  FaHammer,
  FaPuzzlePiece,
} from "react-icons/fa";
import {
  MdEmail,
  MdPermContactCalendar,
  MdPlace,
  MdSchool,
  MdWork,
} from "react-icons/md";

import React from "react";

const renderItemDefault = (section, item, ii) => {
  const icon = item.icon || section.icon;
  return (
    <div className={"item" + " item-" + section.title} key={ii}>
      {item.time && <div className="text-time">{item.time}</div>}
      {icon && <div className="icon">{icon}</div>}
      <div className="text-label">{item.label}</div>

      {item.link1 ? (
        <a className="link link1" href={item.link1}>
          <div className="text text1">{item.text1}</div>
        </a>
      ) : (
        <div className="text text1">{item.text1}</div>
      )}
      {item.text2 &&
        (item.link2 ? (
          <a className="link link2" href={item.link2}>
            <div className="text text2">{item.text2}</div>
          </a>
        ) : (
          <div className="text text2">{item.text2}</div>
        ))}
    </div>
  );
};

const sections = [
  {
    title: "Contact",
    icon: <MdPermContactCalendar />,
    items: [
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
    ],
    renderItem: renderItemDefault,
  },
  {
    title: "Education",
    icon: <MdSchool />,
    renderItem: renderItemDefault,
    items: [
      {
        time: "Sep 2015 – May 2020",
        label: "PhD in Cartography, geoinformatics and remote sensing",
        text1: "MUNI, Brno, Czech Republic",
      },
    ],
  },
  {
    title: "Work Experience",
    icon: <MdWork />,
    items: [
      {
        time: "Mar 2018 – ",
        label: "Programmer",
        text1: "Czech Radio, Analytical team",
      },
      {
        time: "Aug 2015 – ",
        label: "Researcher",
        text1: "Masaryk University",
      },
      {
        time: "Apr 2017 – Mar 2019",
        label: "Programmer",
        text1:
          "University of Vienna, Department of Geography and Regional Research",
      },
    ],
    renderItem: renderItemDefault,
  },
  {
    title: "Studies",
    icon: <FaBook />,
    items: [
      {
        time: "2020",
        label: "Digitising Patterns of Power",
        text1: "M Breier, A Mertel, K Kriz, A Pucher",
        text2: "Digital humanities Austria 2018",
      },
      {
        time: "2020",
        label:
          "Ptolemaic political activities on the west coast of Hellenistic Asia Minor had a significant impact on the local spread of the Isiac cults: A spatial network analysis",
        text1: "T Glomb, A Mertel, Z Pospíšil, A Chalupa",
        text2: "PloS one 15.4 2020",
      },
      {
        time: "2019",
        label:
          "The role of spatial visual analysis in historical religious studies",
        text1:
          "A Mertel, Z Stachon, T Glomb, T Hampejs, V Kase, A Chalupa, D Papoušek",
        text2: "Geografie 124 (3), 265-280",
      },
      {
        time: "2019",
        label:
          "Mining multiple sources of historical data: The example of a standardized dataset of medieval monasteries and convents in France",
        text1: "A Mertel, D Zbíral",
        text2: "Proceedings of the ICA 2",
      },
      {
        time: "2018",
        label:
          "Ptolemaic military operations were a dominant factor in the spread of Egyptian cults across the early Hellenistic Aegean Sea",
        text1: "T Glomb, A Mertel, Z Pospíšil, Z Stachoň, A Chalupa",
        text2: "PloS one 13 (3), e0193786",
      },
      {
        time: "2018",
        label:
          "Spatial predictive modeling of prehistoric sites in the Bohemian-Moravian Highlands based on graph similarity analysis",
        text1: "A Mertel, P Ondrejka, K Šabatová",
        text2: "Open Geosciences 10 (1), 261-274",
      },
      {
        time: "2018",
        label:
          "Spatial constraints on the diffusion of religious innovations: The case of early Christianity in the Roman Empire",
        text1: "J Fousek, V Kaše, A Mertel, E Výtvarová, A Chalupa",
        text2: "PloS one 13 (12), e0208744",
      },
      {
        time: "2018",
        label: "Spatial models and simulations in historical research",
        text1: "A Mertel, Z Stachoň, T Hampejs",
        text2: "Geografický a kartografický obzor, 64(12)",
      },
      {
        time: "2017",
        label:
          "Agent-Based Modelling And Simulation For The Geospatial Network Model Of The Roman World",
        text1: "J Fousek, E Výtvarová, A Mertel, A Chalupa, E Hladká",
        text2: "International Symposium on Grids and Clouds (ISGC), 270, 7",
      },
      {
        time: "2016",
        label:
          "Visualization and spatial analysis of police open data as a part of community policing in the city of Pardubice (Czech Republic)",
        text1: "J Russnák, P Ondrejka, L Herman, P Kubíček, A Mertel",
        text2: "Annals of GIS 22 (3), 187-201, 5",
      },
      {
        time: "2016",
        label: "Linking Graph With Map For The Purpose Of Historical Research",
        text1: "J Skvrnák, A Mertel",
        text2: "Digital Humanities, 887-888",
      },
      {
        time: "2015",
        label: "Selected Issues of Historical Spatial Datasets",
        text1: "A Mertel, Z Stachoň, T Glomb",
        text2: "1st ICA European Symposium on Cartography, 263",
      },
    ],
    renderItem: renderItemDefault,
  },
  {
    title: "Skills",
    icon: <FaHammer />,
    items: [
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
        label: "Visualization frameworks and libraries",
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
          { name: "OSGeo", link: "" },
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
          { name: "PostgreSQL", link: "" },
          { name: "PostGIS", link: "" },
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
          { name: "graphQL", link: "" },
        ],
      },
    ],

    renderItem: (section, item, ii) => {
      return (
        <div className={"item" + " item-" + section.title} key={ii}>
          {item.time && <div className="text-time">{item.time}</div>}
          {item.icon && <div className="icon">{item.icon}</div>}
          <div className="text-label">{item.label}</div>
          <div className="examples">
            {item.examples.map((example, ei) => {
              return (
                <div className="example" key={ei}>
                  {example.link ? (
                    <a className="link" href={example.link}>
                      {example.name}
                    </a>
                  ) : (
                    example.name
                  )}
                  ,{" "}
                </div>
              );
            })}
          </div>
        </div>
      );
    },
  },
  { title: "Projects", items: [], icon: <FaPuzzlePiece /> },
];

const App = (props) => {
  return (
    <div>
      <Hero color="primary" size="medium">
        <Hero.Body>
          <Container>
            <Heading>Adam Mertel</Heading>
            <Heading subtitle size={3}>
              maps, programming and data analysis
            </Heading>
          </Container>
        </Hero.Body>
      </Hero>
      <Tabs type="toggle" fullwidth align="centered">
        {sections.map((section, si) => {
          const active = si === 0 ? true : false;
          return (
            <Tabs.Tab className="tab" key={si} active={active}>
              <div className="tab-part tab-icon">{section.icon}</div>
              <div className="tab-part tab-title">{section.title}</div>
            </Tabs.Tab>
          );
        })}
      </Tabs>

      <Container className="app-content">
        {sections.map((section, si) => {
          return (
            <Section key={si}>
              <Heading>{section.title}</Heading>
              <div className="section-content">
                {section.items.map((item, ii) => {
                  return section.renderItem
                    ? section.renderItem(section, item, ii)
                    : false;
                })}
              </div>
            </Section>
          );
        })}
      </Container>
    </div>
  );
};

export default App;
