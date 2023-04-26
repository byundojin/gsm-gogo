import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 0.5fr));
  grid-template-rows: repeat(4, minmax(150px, 0.5fr));
`;

function MainContainer({ children }) {
  return <Box>{children}</Box>;
}

export default MainContainer;
