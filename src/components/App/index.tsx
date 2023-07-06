import React, { useEffect } from "react";
import {
  CopyColumn,
  GreetingParagraph,
  Main,
  Paragraph,
  SocialLinks,
} from "./styled";
import analytics from "../../analytics";
import Link from "../Link";
import Portrait from "../Portrait";

const App = () => {
  useEffect(() => {
    analytics.page({ title: "Index" });
  }, []);

  return (
    <Main>
      <div>
        <Portrait />
        <SocialLinks>
          <Link
            href="https://www.linkedin.com"
            onClick={() => {
              analytics.track("clicked_linkedin_link");
            }}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </Link>{" "}
          |{" "}
          <Link
            href="https://github.com/anthony-j-castro"
            onClick={() => {
              analytics.track("clicked_github_link");
            }}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Link>{" "}
          |{" "}
          <Link
            href="mailto:hello@anthonyjcastro.com"
            onClick={() => {
              analytics.track("clicked_email_link");
            }}
            target="_blank"
            rel="noreferrer"
          >
            E-mail
          </Link>
        </SocialLinks>
      </div>
      <CopyColumn>
        <GreetingParagraph>Hi! I’m Anthony.</GreetingParagraph>
        <Paragraph>
          I’m an engineering manager at CircleCI living in New York, NY.
        </Paragraph>
        <Paragraph>
          Before becoming an EM, I spent a decade as a software engineer working
          on web applications, mostly on the front end. I’ve worked in a variety
          of industries on different types of teams at companies including
          Abstract, Verve, Observer Media, and Time Inc.
        </Paragraph>
      </CopyColumn>
    </Main>
  );
};

export default App;
