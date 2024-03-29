import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

  @media screen and (min-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  transition: all 0.2s;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }

  &:hover {
    transform: scale(1.075);
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 25px 15px;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 15px 15px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease-in;

  &:hover {
    background: rgb(214, 211, 211);
    border-radius: 5px;
  }
`;
