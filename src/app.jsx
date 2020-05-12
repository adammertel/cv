import {
  Button,
  Section,
  Tabs,
  Hero,
  Container,
  Heading,
} from "react-bulma-components";

import React from "react";

const renderItemDefault = (section, item, ii) => {
  return (
    <div className={"item" + " item-" + section.title} key={ii}>
      {item.time && <div className="time">{item.time}</div>}
      {item.icon && <div className="icon">{section.icon}</div>}
      <div className="text-label">{item.label}</div>

      {item.link1 ? (
        <a href={item.link1}>
          <div className="text1">{item.text1}</div>
        </a>
      ) : (
        <div className="text1">{item.text1}</div>
      )}
      {item.text2 &&
        (item.link2 ? (
          <a href={item.link2}>
            <div className="text1">{item.text2}</div>
          </a>
        ) : (
          <div className="text1">{item.text2}</div>
        ))}
    </div>
  );
};

const sections = [
  {
    title: "Contact",
    items: [
      {
        label: "born",
        text1: "1988, Ilava, Slovakia",
        link1: false,
        icon: false,
      },
      {
        label: "Actual residence",
        text1: "Brno, Czech Republic",
        link1: false,
        icon: false,
      },
      {
        label: "Mail",
        text1: "mertel.adam@gmail.com",
        link1: false,
        icon: false,
      },
      {
        label: "GitHub",
        text1: "adammertel",
        link1: "https://github.com/adammertel",
        icon: false,
      },
      {
        label: "Academia",
        text1: "AMertel",
        link1: "https://muni.academia.edu/AMertel",
        icon: false,
      },
      {
        label: "Linkedin",
        text1: "adam mertel",
        link1: "https://www.linkedin.com/in/adam-mertel-a294573a/",
        icon: false,
      },
    ],
    renderItem: renderItemDefault,
  },
  {
    title: "Education",
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
    items: [
      {
        groupName: "Programming",
        groupIcon: false,
        groupItems: [
          {
            groupItemName: "Web programming",
            examples: [
              { name: "JavaScript", link: "" },
              { name: "TypeScript", link: "" },
              { name: "GitHub", link: "" },
              { name: "Webpack", link: "" },
            ],
          },
          {
            groupItemName: "FrontEnd frameworks",
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
            groupItemName: "Server-side programming",
            examples: [
              { name: "NodeJS", link: "" },
              { name: "Express", link: "" },
              { name: "Sockets.io", link: "" },
              { name: "Java", link: "" },
            ],
          },
          {
            groupItemName: "Data analysis",
            examples: [
              { name: "Pandas", link: "" },
              { name: "scikit", link: "" },
              { name: "networkX", link: "" },
              { name: "R", link: "" },
            ],
          },
        ],
      },
      {
        groupName: "Visualization",
        groupIcon: false,
        groupItems: [
          {
            groupItemName: "Visualization frameworks and libraries",
            examples: [
              { name: "D3", link: "" },
              { name: "HTML5 Canvas", link: "" },
              { name: "Cytoscape", link: "" },
              { name: "Three.js", link: "" },
            ],
          },
          {
            groupItemName: "Desktop applications",
            examples: [
              { name: "Inkscape", link: "" },
              { name: "Adobe Illustrator", link: "" },
              { name: "Figma", link: "" },
              { name: "Draw.io", link: "" },
            ],
          },
        ],
      },
      {
        groupName: "GIS",
        groupIcon: false,
        groupItems: [
          {
            groupItemName: "Web GIS",
            examples: [
              { name: "Leaflet.js", link: "" },
              { name: "D3", link: "" },
              { name: "Open Layers", link: "" },
              { name: "MapBox", link: "" },
              { name: "Google Maps", link: "" },
            ],
          },
          {
            groupItemName: "Analytical GIS libraries",
            examples: [
              { name: "Grass", link: "" },
              { name: "GDAL", link: "" },
              { name: "R", link: "" },
              { name: "OSGeo", link: "" },
              { name: "JTS", link: "" },
            ],
          },
          {
            groupItemName: "Desktop GIS",
            examples: [
              { name: "QGIS", link: "" },
              { name: "ArcGIS", link: "" },
            ],
          },
        ],
      },
      {
        groupName: "Databases",
        groupIcon: false,
        groupItems: [
          {
            groupItemName: "Relational",
            examples: [
              { name: "PostgreSQL", link: "" },
              { name: "PostGIS", link: "" },
              { name: "MariaDB", link: "" },
              { name: "MySQL", link: "" },
              { name: "", link: "" },
            ],
          },
          {
            groupItemName: "NoSQL",
            examples: [
              { name: "MongoDB", link: "" },
              { name: "RethinkDB", link: "" },
              { name: "ArrangoDB", link: "" },
            ],
          },
          {
            groupItemName: "Other",
            examples: [
              { name: "Neo4j", link: "" },
              { name: "REST", link: "" },
              { name: "graphQL", link: "" },
            ],
          },
        ],
      },
    ],

    renderItem: (section, item, ii) => {
      return (
        <div className="item" key={ii}>
          <div className="item-label">{item.groupName}</div>
          {item.groupItems.map((groupItem, gii) => {
            return (
              <div className="item-group" key={gii}>
                <div className="item-group-name">{groupItem.groupItemName}</div>
                <div className="item-group-examples">
                  {groupItem.examples.map((example, ei) => {
                    return (
                      <div className="example" key={ei}>
                        {example.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      );
    },
  },
  { title: "Projects", items: [] },
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
        <Hero.Footer>
          <Tabs type="toggle" fullwidth align="centered">
            {sections.map((section, si) => {
              return (
                <Tabs.Tab key={si} active={si === 0 ? true : false}>
                  {section.title}
                </Tabs.Tab>
              );
            })}
          </Tabs>
        </Hero.Footer>
      </Hero>

      <Container>
        {sections.map((section, si) => {
          return (
            <Section key={si}>
              <Heading>{section.title}</Heading>
              <div>
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
