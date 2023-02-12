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

import {
  FaBook,
  FaCalendarAlt,
  FaHammer,
  FaMapMarkerAlt,
  FaPuzzlePiece,
} from "react-icons/fa";
import { RiFocus2Line } from "react-icons/ri";
import { MdPermContactCalendar, MdSchool, MdWork } from "react-icons/md";

import itemsStudy from "./items/study";
import itemsContact from "./items/contact";
import itemsSkill from "./items/skill";
import itemsWork from "./items/work";

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
  const itemPicturePath = `pictures/${item.image}.png`;
  return (
    <div className="item item-project" key={ii}>
      <Card>
        <Card.Image
          clipped
          alt={"title image of the project of " + item.label}
          src={itemPicturePath}
          fallback={itemPicturePath}
        />
        <Card.Content>
          {/*
            <div className="statuses">
              {item.status.map((statusId) => {
                const status = statuses.find((s) => s.id === statusId);
                return (
                  <Tag
                    color="light"
                    className="status"
                    key={status.id}
                    style={{ backgroundColor: status.color }}
                  >
                    {status.label}
                  </Tag>
                );
              })}
              </div>
              */}
          <div className="outputs">
            {item.output.map((outputId) => {
              const output = outputs.find((o) => o.id === outputId);
              return (
                <Tag className="tag output" key={output.id}>
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
              return tag ? (
                <Tag className="tag work-skill" key={tag.id}>
                  {tag.label}
                </Tag>
              ) : null;
            })}
          </div>
        </Card.Content>
        {item.links.length ? (
          <Card.Footer>
            <Button.Group position="right">
              {item.links.map((link, li) => {
                const linkType = links.find((l) => l.id === link.type);
                return linkType ? (
                  <Button key={li} color="primary" size="small" inverted>
                    <a href={link.value} target="_blank">
                      <span className="icon">{linkType.icon}</span>
                      <span className="label">
                        {link.text || linkType.label}
                      </span>
                    </a>
                  </Button>
                ) : (
                  <span />
                );
              })}
            </Button.Group>
          </Card.Footer>
        ) : (
          <span />
        )}
      </Card>
    </div>
  );
};

const renderItemWork = (section, item, ii) => {
  const icon = item.icon || section.icon;
  return (
    <div className={"item item-work"} key={ii}>
      <div className="text-time-location">
        <div className="text-time">
          <FaCalendarAlt />
          {item.time}
        </div>
        <div className="text-location">
          <FaMapMarkerAlt />
          {item.location}
        </div>
      </div>
      <div className="text-position">
        {icon && <div className="icon">{icon}</div>}
        <span className="text-occupation">{item.position}</span>
        {` at `}
        <a className="text-institute-link" href={item.link}>
          <span className="text-institute">{item.company}</span>
        </a>
      </div>
      <div className="text-skills">
        {item.skills.map((skill, si) => (
          <Tag className="skill-item" key={si} style={{}}>
            {skill}
          </Tag>
        ))}
      </div>
      <div className="text-description">
        <ul>
          {item.description.map((desc, di) => (
            <li key={di}>{desc}</li>
          ))}
        </ul>
      </div>
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
    title: "Info",
    icon: <MdPermContactCalendar />,
    items: itemsContact,
    renderItem: renderItemDefault,
  },
  {
    title: "Topics",
    icon: <RiFocus2Line />,
    items: [
      {
        label: "Interactive (geo)visualization",
        text1:
          "Designing interactive visualization methods for spatial/temporal/relational datasets",
      },
      {
        label: "Web cartography",
        text1:
          "Development of web-based and map-centric applications and tools",
      },
      {
        label: "Geospatial technologies",
        text1:
          "Technologies to help store, analyze or visualize geospatial data.",
      },
      {
        label: "Analytical GIS and complex spatial systems",
        text1:
          "Processing, integrating and storing geospatial data, creating models and preparing analyses",
      },
      {
        label: "Visual Analysis of Spatiotemporal data and data exploration",
        text1:
          "Exploring and analyzing uncertain, heterogeneous, large, and multidimensional data",
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
    title: "Projects",
    items: itemsProject.sort((a, b) => (a.time > b.time ? -1 : 1)),
    icon: <FaPuzzlePiece />,
    renderItem: renderItemProject,
  },
  {
    title: "Professional Experience",
    items: itemsWork,
    icon: <MdWork />,
    renderItem: renderItemWork,
  },
  {
    title: "Expertise",
    icon: <FaHammer />,
    items: itemsSkill,
    renderItem: renderItemSkill,
  },
  {
    title: "Publications",
    icon: <FaBook />,
    items: itemsStudy,
    renderItem: renderItemDefault,
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
        <Hero.Body style={{ padding: 0 }}>
          <Container>
            <Columns>
              <Columns.Column size={3}>
                <div className="avatar">
                  <Image src="https://avatars2.githubusercontent.com/u/12932677?s=400&u=f9149742d8141baf4e7fafc141d9d642ffac9904&v=4" />
                </div>
              </Columns.Column>
              <Columns.Column size={9} style={{ margin: "auto" }}>
                <Heading size={1}>Adam Mertel</Heading>
                <Heading subtitle size={3}>
                  Geospatial Developer | GIS Analyst | Dataviz Engineer
                </Heading>
              </Columns.Column>
            </Columns>
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
                {section.title === "Projects" ? (
                  <div className="projects-wrapper">
                    <Columns>
                      {section.items.map((item, ii) => {
                        return (
                          <Columns.Column
                            key={ii}
                            mobile={{ size: 11 }}
                            tablet={{ size: 5 }}
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
                ) : (
                  section.items.map((item, ii) =>
                    section.renderItem(section, item, ii)
                  )
                )}
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
