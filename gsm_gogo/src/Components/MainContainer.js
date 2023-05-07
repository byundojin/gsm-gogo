import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: grid;

  grid-template-columns: repeat(2, minmax(80px, 0.5fr));
  grid-template-rows: repeat(8, minmax(80px, 0.5fr));
`;

function MainContainer({ children }) {
  return <Box>{children}</Box>;
}

export default MainContainer;
