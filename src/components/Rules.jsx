import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          After clicking on the dice, if the selected number is equal to the dice number, you
          will get the same point as the dice.
        </p>
        <p>If you guess wrong, then 2 points will be deducted.</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
  }

  .text {
    margin-top: 24px;

    p {
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 12px;
    }
  }

  @media (max-width: 768px) {
    padding: 15px;
    h2 {
      font-size: 20px;
    }
    .text {
      p {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 10px;
    h2 {
      font-size: 18px;
    }
    .text {
      p {
        font-size: 12px;
      }
    }
  }
`;
