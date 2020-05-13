import {
  Button,
  Card,
  Columns,
  Container,
  Content,
  Footer,
  Heading,
  Hero,
  Image,
  Section,
  Tabs,
  Tag,
} from "react-bulma-components";

import { FaBook, FaHammer, FaPuzzlePiece } from "react-icons/fa";
import { RiFocus2Line } from "react-icons/ri";
import { MdPermContactCalendar, MdSchool, MdWork } from "react-icons/md";

import itemsStudy from "./items/study";
import itemsContact from "./items/contact";
import itemsSkill from "./items/skill";
import itemsWork from "./items/work";

import images from "./pictures/*.png";

import { itemsProject, tags, outputs, statuses, links } from "./items/project";

import React, { useState, useEffect } from "react";

const renderItemSkill = (section, item, ii) => {
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
};

const renderItemProject = (section, item, ii) => {
  return (
    <div className="item-project" key={ii}>
      <Card>
        <Card.Image
          clipped
          alt={"title image of the project of " + item.label}
          src={images[item.image]}
        />
        <Card.Content>
          <div className="statuses">
            {item.status.map((statusId) => {
              const status = statuses.find((s) => s.id === statusId);
              return (
                <Tag
                  className="status"
                  key={status.id}
                  style={{ backgroundColor: status.color }}
                >
                  {status.label}
                </Tag>
              );
            })}
          </div>
          <div className="outputs">
            {item.output.map((outputId) => {
              const output = outputs.find((o) => o.id === outputId);
              return (
                <Tag
                  className="output"
                  key={output.id}
                  style={{ backgroundColor: output.color }}
                >
                  {output.label}
                </Tag>
              );
            })}
          </div>
          <div className="text-time">{item.time}</div>
          <div className="text-label">{item.label}</div>
          <div className="text">{item.text}</div>
          <div className="tags">
            {item.tags.map((tagId) => {
              const tag = tags.find((t) => t.id === tagId);
              return (
                <Tag
                  className=""
                  key={tag.id}
                  style={{ backgroundColor: tag.color }}
                >
                  {tag.label}
                </Tag>
              );
            })}
          </div>
        </Card.Content>
        <Card.Footer>
          <Button.Group position="right">
            {item.links.map((link, li) => {
              const linkType = links.find((l) => l.id === link.type);
              return linkType ? (
                <Button key={li} color="primary" size="small">
                  <a href={link.value}>
                    <span className="icon">{linkType.icon}</span>
                    <span className="label">{link.text || linkType.label}</span>
                  </a>
                </Button>
              ) : (
                <span />
              );
            })}
          </Button.Group>
        </Card.Footer>
      </Card>
    </div>
  );
};

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
    items: itemsContact,
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
      {
        time: "Sep 2013 – Juny 2015",
        label: "Mgr in Cartography, geoinformatics and remote sensing",
        text1: "MUNI, Brno, Czech Republic",
      },
    ],
  },
  {
    title: "Topics",
    icon: <RiFocus2Line />,
    items: [
      {
        label: "Analytical GIS and complex spatial systems",
        text1:
          "Processing, integrating and storing geospatial data, creating models and preparing analyses",
      },
      {
        label: "Interactive (geo)visualization",
        text1:
          "Development and evaluation of interactive visualization methods for spatial/temporal/relational datasets",
      },
      {
        label: "Web cartography and tool development",
        text1:
          "Development of effective and modern web-based and map-centric applications and tools",
      },
      {
        label: "Visual Analysis of Spatiotemporal data and data exploration",
        text1:
          "Exploring and analyzing uncertain, heterogeneous, large, and multidimensional data",
      },
      {
        label: "GIS and environment",
        text1: "Modeling environment dataset",
      },
      {
        label: "Application of GIS in the urban environment",
        text1:
          "Using methods of GIS visualization and analysis for topics relative to urbanism - mobility, demography, housing, criminality, quality of life, health...",
      },
      {
        label: "Spatial Humanities",
        text1:
          "Handling spatial data in humanities research - archaeology, historical science, musicology...",
      },
    ],
    renderItem: renderItemDefault,
  },
  {
    title: "Work",
    icon: <MdWork />,
    items: itemsWork,
    renderItem: renderItemDefault,
  },
  {
    title: "Studies",
    icon: <FaBook />,
    items: itemsStudy,
    renderItem: renderItemDefault,
  },
  {
    title: "Skills",
    icon: <FaHammer />,
    items: itemsSkill,
    renderItem: renderItemSkill,
  },
  {
    title: "Projects",
    items: itemsProject,
    icon: <FaPuzzlePiece />,
    renderItem: renderItemProject,
  },
];

const App = (props) => {
  const [activeSection, setActiveSection] = useState("Contact");

  useEffect(() => {
    const handleScroll = () => {
      const sectionEls = document.getElementsByClassName("content-section");
      const sections = Array.from(sectionEls).map((section) => {
        return {
          top: section.getBoundingClientRect().y,
          id: section.dataset.section,
        };
      });
      let firstUpIndex = 0;
      sections.forEach((section, si) => {
        if (section.top < 50) {
          firstUpIndex = si;
        }
      });
      const newActiveSection = firstUpIndex
        ? sections[firstUpIndex].id
        : sections[0].id;
      setActiveSection(newActiveSection);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Hero color="primary" size="medium">
        <Hero.Body>
          <Container>
            <Heading>Adam Mertel</Heading>
            <Heading subtitle size={3}>
              Maps, programming and data analysis
            </Heading>
          </Container>
        </Hero.Body>
      </Hero>
      <Tabs type="toggle" fullwidth align="centered">
        {sections.map((section, si) => {
          const active = activeSection === section.title;
          return (
            <Tabs.Tab
              className="tab"
              href={"#" + section.title}
              key={si}
              active={active}
            >
              <div className="tab-part tab-icon">{section.icon}</div>
              <div className="tab-part tab-title">{section.title}</div>
            </Tabs.Tab>
          );
        })}
      </Tabs>

      <Container className="app-content">
        {sections.map((section, si) => {
          return (
            <Section
              key={si}
              id={section.title}
              className="content-section"
              data-section={section.title}
            >
              <Heading>{section.title}</Heading>
              <div className="section-content">
                {section.title === "Contact" ? (
                  <Columns>
                    <Columns.Column size={6}>
                      {section.items.map((item, ii) =>
                        section.renderItem(section, item, ii)
                      )}
                    </Columns.Column>
                    <Columns.Column size={6}>
                      <div className="avatar">
                        <Image
                          rounded={true}
                          src="https://avatars2.githubusercontent.com/u/12932677?s=400&u=f9149742d8141baf4e7fafc141d9d642ffac9904&v=4"
                        />
                      </div>
                    </Columns.Column>
                  </Columns>
                ) : null}
                {section.title === "Projects" ? (
                  <div className="projects-wrapper">
                    <Columns>
                      {section.items.map((item, ii) => {
                        return (
                          <Columns.Column
                            key={ii}
                            mobile={{ size: 12 }}
                            tablet={{ size: 6 }}
                            touch={{ size: 6 }}
                            desktop={{ size: 4 }}
                            widescreen={{
                              size: 4,
                            }}
                            fullhd={{
                              size: 3,
                            }}
                          >
                            {section.renderItem(section, item, ii)}
                          </Columns.Column>
                        );
                      })}
                    </Columns>
                  </div>
                ) : null}
                {section.title !== "Projects" && section.title !== "Contact"
                  ? section.items.map((item, ii) =>
                      section.renderItem(section, item, ii)
                    )
                  : null}
              </div>
            </Section>
          );
        })}
      </Container>
      <Footer>
        <Container>
          <Content style={{}}>
            <p>
              <strong>Adam Mertel</strong>
            </p>
            <p>Created with React, Parcel, and Bulma</p>
          </Content>
        </Container>
      </Footer>
    </div>
  );
};

export default App;
