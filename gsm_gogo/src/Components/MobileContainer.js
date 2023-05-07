import styled from "styled-components";

const Box = styled.div`
  border-radius: 16px;
  width: 90%;
  padding: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.4);
  justify-content: center;
`;

function MobileContainer({ children }) {
  return <Box>{children}</Box>;
}

export default MobileContainer;
