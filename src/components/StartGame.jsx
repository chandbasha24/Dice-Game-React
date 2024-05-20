import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <ImageContainer>
        <img src="/images/dices.png" alt="Dices" />
      </ImageContainer>
      <Content>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </Content>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 40px;
  }

  img {
    width: 100%;
    max-width: 300px;

    @media (min-width: 768px) {
      max-width: none;
    }
  }
`;

const Content = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  h1 {
    font-size: 48px;
    margin-bottom: 20px;
    white-space: nowrap;

    @media (min-width: 768px) {
      font-size: 64px;
    }

    @media (min-width: 1024px) {
      font-size: 96px;
    }
  }
`;
