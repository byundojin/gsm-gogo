import styled from "styled-components";

const Box = styled.div`
  border-radius: 16px;
  width: 40%;
  padding: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.4);
  justify-content: center;
`;

function Container({ children }) {
  return <Box>{children}</Box>;
}

export default Container;
