import styled from "styled-components";

const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt={`dice ${currentDice}`} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .dice {
    cursor: pointer;
    img {
      width: 100%;
      max-width: 200px;
    }
  }

  p {
    font-size: 24px;
    margin-top: 16px;
  }

  @media (max-width: 768px) {
    margin-top: 32px;

    .dice {
      img {
        max-width: 150px;
      }
    }

    p {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    margin-top: 24px;

    .dice {
      img {
        max-width: 120px;
      }
    }

    p {
      font-size: 18px;
    }
  }
`;
