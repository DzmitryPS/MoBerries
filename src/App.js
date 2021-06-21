import { React, useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Card from "./components/Page";
import CircleButton from "../src/components/CircleButton";
import { theme } from "../src/components/theme";
import { MyContext } from "./MyContext";

const MainDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: auto 10px;
  @media screen and (max-width: 850px) {
    position: relative;
  }
`;

const StyledMyContainer = styled.div`
  margin-top: 80px;
  width: 600px;
  background-color: ${theme.color.grey};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.padding.double};
  gap: ${theme.padding.double};
  border-radius: 15px;

  i {
    font-size: 27px;
    color: #6495ed;
    cursor: pointer;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const App = () => {
  const [carouselSlider, setCarouselSlide] = useState(0);

  const firstSlideToggle = () => setCarouselSlide(0);
  const secondSlideToggle = () => setCarouselSlide(1);
  const thirdSlideToggle = () => setCarouselSlide(2);

  const moveSliderLeft = () => {
    switch (carouselSlider) {
      case 0:
        return setCarouselSlide(1);
      case 1:
        return setCarouselSlide(2);
      case 2:
        return setCarouselSlide(0);
    }
  };

  const moveSliderRight = () => {
    switch (carouselSlider) {
      case 0:
        return setCarouselSlide(2);
      case 1:
        return setCarouselSlide(0);
      case 2:
        return setCarouselSlide(1);
    }
  };

  const context = useContext(MyContext);

  useEffect(() => {
    try {
      fetch("https://cloud-storage-prices-moberries.herokuapp.com/prices")
        .then((response) => response.json())
        .then((data) => context.setPricesPlan(data.subscription_plans));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <MainDiv>
      <StyledMyContainer>
        <Card slideNumber={carouselSlider} />
        <div>
          <i className="fas fa-arrow-left" onClick={moveSliderRight}></i>
          <CircleButton
            action={firstSlideToggle}
            actionTwo={secondSlideToggle}
            actionThree={thirdSlideToggle}
            isActive={carouselSlider}
          />
          <i className="fas fa-arrow-right" onClick={moveSliderLeft}></i>
        </div>
      </StyledMyContainer>
    </MainDiv>
  );
};

export default App;
