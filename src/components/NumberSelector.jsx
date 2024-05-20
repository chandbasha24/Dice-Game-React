import styled from "styled-components";

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  
  /* Adjustments for different screen sizes */
  @media (max-width: 768px) {
    align-items: flex-start; /* Align to the start for smaller screens */
  }

  .flex {
    display: flex;
    gap: 16px; /* Reduced gap for smaller screens */
    
    /* Adjustments for different screen sizes */
    @media (max-width: 768px) {
      flex-wrap: wrap; /* Wrap items for smaller screens */
    }
  }
  
  p {
    font-size: 24px;
    font-weight: 700; /* Use font-weight 700 */
    
    /* Adjustments for different screen sizes */
    @media (max-width: 768px) {
      font-size: 20px; /* Reduce font size for smaller screens */
    }
  }
  
  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  min-width: 72px; /* Use min-width to prevent the box from collapsing */
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  
  /* Adjustments for different screen sizes */
  @media (max-width: 768px) {
    height: 56px; /* Reduce height for smaller screens */
    min-width: 56px; /* Reduce min-width for smaller screens */
    font-size: 20px; /* Reduce font size for smaller screens */
  }
`;
