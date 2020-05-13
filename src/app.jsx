import {
  Button,
  Card,
  Columns,
  Container,
  Content,
  Footer,
  Heading,
  Hero,
  Section,
  Tabs,
  Tag,
} from "react-bulma-components";

import { FaBook, FaHammer, FaPuzzlePiece } from "react-icons/fa";
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
  return (
    <div className="item-project" key={ii}>
      <Card>
        <Card.Image
          size="4by3"
          src="http://bulma.io/images/placeholders/1280x960.png"
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
                <Button outlined key={li} color="primary" size="small">
                  <a href={link.value}>
                    <span className="icon">{linkType.icon}</span>
                    <span className="label">{linkType.label}</span>
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
    ],
  },
  {
    title: "Work Experience",
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
                {section.title !== "Projects" ? (
                  section.items.map((item, ii) =>
                    section.renderItem(section, item, ii)
                  )
                ) : (
                  <div className="projects-wrapper">
                    <Columns>
                      {section.items.map((item, ii) => {
                        return (
                          <Columns.Column
                            key={ii}
                            desktop={{ size: "one-third" }}
                            tablet={{ size: "half" }}
                            widescreen={{
                              size: "one-quarter",
                            }}
                            fullhd={{
                              size: "one-quarter",
                            }}
                          >
                            {section.renderItem(section, item, ii)}
                          </Columns.Column>
                        );
                      })}
                    </Columns>
                  </div>
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
