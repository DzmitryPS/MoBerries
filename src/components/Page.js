import { React } from "react";
import styled from "styled-components";
import { theme } from "./theme";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import Assume from "./Assume";

const StyledCard = styled.div`
  height: 270px;
  border-radius: ${theme.borderRadius.small};
  display: flex;
  flex-direction: column;
  gap: ${theme.padding.standard};
  align-items: center;
  width: 100%;
  padding: ${theme.padding.standard};
  background-color: ${theme.color.light};

  @media (min-width: ${theme.media.phone}) {
    max-width: ${theme.media.regular};
  }
`;

const Page = ({ slideNumber }) => {
  return (
    <>
      <StyledCard>
        {slideNumber === 0 ? (
          <>
            <FirstComponent />
          </>
        ) : slideNumber === 1 ? (
          <>
            <SecondComponent />
          </>
        ) : (
          <>
            <ThirdComponent />
          </>
        )}
      </StyledCard>
      <Assume />
    </>
  );
};

export default Page;
