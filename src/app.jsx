import {
  Button,
  Section,
  Tabs,
  Hero,
  Container,
  Heading,
} from "react-bulma-components";

import React from "react";

const sections = [
  { title: "Contact" },
  { title: "Education" },
  { title: "Work Experience" },
  { title: "Skills" },
  { title: "Projects and studies" },
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
            </Section>
          );
        })}
      </Container>
    </div>
  );
};

export default App;
