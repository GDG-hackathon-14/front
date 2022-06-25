import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding: 20px;
`;

const MainContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainContainer;
