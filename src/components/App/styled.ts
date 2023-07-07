import styled from "styled-components";

const MOBILE_MAX_WIDTH = "600px";

export const Container = styled.div`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    flex-direction: column;
  }
`;

export const SocialLinks = styled.div`
  text-align: center;
  margin-top: 32px;
`;

export const Separator = styled.span`
  margin: 0 8px;
`;

export const CopyColumn = styled.div`
  flex: 1;
  min-width: min(500px, 50vw);
  max-width: min(500px, 50vw);
  margin-left: 32px;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    margin-top: 32px;
    margin-left: 0;
    width: 100%;
    max-width: 400px;
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
