import styled from "styled-components";

const MOBILE_MAX_WIDTH = "600px";
const MAIN_MARGIN = "32px";

export const Main = styled.main`
  width: calc(100vw - (2 * ${MAIN_MARGIN}));
  height: calc(100vh - (2 * ${MAIN_MARGIN}));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${MAIN_MARGIN};

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    flex-direction: column;
  }
`;

export const SocialLinks = styled.div`
  text-align: center;
  margin-top: 32px;
`;

export const CopyColumn = styled.div`
  flex: 1;
  min-width: min(500px, 50vw);
  max-width: min(500px, 50vw);
  margin-left: 32px;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    margin-top: 32px;
    margin-left: 0;
  }
`;

export const Paragraph = styled.p`
  margin: 0;

  & + & {
    margin-top: 16px;
  }
`;

export const GreetingParagraph = styled(Paragraph)`
  font-size: 24px;
  font-weight: 500;
`;
