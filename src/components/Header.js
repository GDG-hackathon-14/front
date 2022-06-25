import styled from "styled-components";
import { BiChevronLeft } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const CustomHeader = styled.header`
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 18px 0;
`;

const BackButton = styled.div`
  position: absolute;
  left: 20px;
  top: 15px;
`;

const Header = ({ title }) => {
  const navigate = useNavigate();
  return (
    <CustomHeader>
      <BackButton onClick={() => navigate(-1)}>
        <BiChevronLeft size={30} />
      </BackButton>
      <div>{title}</div>
    </CustomHeader>
  );
};

export default Header;
