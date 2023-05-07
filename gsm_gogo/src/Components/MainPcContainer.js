import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  padding: 25px;

  grid-template-columns: repeat(1, minmax(80px, 1fr));
  grid-template-rows: repeat(7, minmax(80px, 1fr));
`;

function MainPcContainer({ children }) {
  return <Box>{children}</Box>;
}

export default MainPcContainer;
