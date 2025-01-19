import { useEffect } from "react";
import {
  Container,
  CopyColumn,
  GreetingParagraph,
  Main,
  Paragraph,
  Separator,
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
    <Container>
      <Main>
        <div>
          <Portrait />
          <SocialLinks>
            <Link
              href="https://www.linkedin.com/in/anthonyjcastro/"
              onClick={() => {
                analytics.track("clicked_linkedin_link");
              }}
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </Link>
            <Separator>|</Separator>
            <Link
              href="https://github.com/anthony-j-castro"
              onClick={() => {
                analytics.track("clicked_github_link");
              }}
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </Link>
          </SocialLinks>
        </div>
        <CopyColumn>
          <GreetingParagraph
            data-cy="greeting"
            data-testid="greeting"
          >
            Hi! I’m Anthony.
          </GreetingParagraph>
          <Paragraph>
            I’m an engineering manager at CircleCI living in New York, NY.
          </Paragraph>
          <Paragraph>
            Before becoming an EM, I spent a decade as a software engineer
            working on web applications, mostly on the front end. I’ve worked in
            a variety of industries on different types of teams at companies
            including Abstract, Verve, Observer Media, and Time Inc.
          </Paragraph>
          <Paragraph>
            Send me a message at{" "}
            <Link
              href="mailto:hello@anthonyjcastro.com"
              onClick={() => {
                analytics.track("clicked_email_link");
              }}
              rel="noreferrer"
              target="_blank"
            >
              hello@anthonyjcastro.com
            </Link>
            .
          </Paragraph>
        </CopyColumn>
      </Main>
    </Container>
  );
};

export default App;
