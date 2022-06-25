import styled from "styled-components";

const container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 0 20px;
`;

const MainContainer = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default MainContainer;
