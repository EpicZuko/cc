import styled from "styled-components";
import logotip from "../../../assets/icons/Group 118.png";
import telergram from "../../../assets/icons/Component 4.png";
import facebook from "../../../assets/icons/facebook_icon_130940 4.png";
import google from "../../../assets/icons/Group.png";
import noName from "../../../assets/icons/discord_icon_130958 1.png";

const Header = () => {
  return (
    <header>
      <HeaderContainerStyled>
        <div>
          <StyledImg src={logotip} alt="Логотип" />
        </div>
        <nav>
          <StyledUlText>
            <li>
              <a href="#">Главная</a>
            </li>
            <li>
              <a href="#">Цена монеты</a>
            </li>
            <li>
              <a href="#">Как использовать</a>
            </li>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#">Преимущества</a>
            </li>
          </StyledUlText>
        </nav>
        <StyledOlImg>
          <li>
            <img src={telergram} alt="Иконка 1" />
          </li>
          <li>
            <img src={facebook} alt="Иконка 2" />
          </li>
          <li>
            <img src={google} alt="Иконка 3" />
          </li>
          <li>
            <img src={noName} alt="Иконка 4" />
          </li>
        </StyledOlImg>
      </HeaderContainerStyled>
    </header>
  );
};

export default Header;

const HeaderContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #E3D7F1;
  padding: 10px;
`;
const StyledImg = styled.img`
  width: 106px;
  height: 106px;
  flex-shrink: 0;
`;
const StyledUlText = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 102px;
  list-style: none;
  & li a {
    color: #000;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
  }
`;
const StyledOlImg = styled.ol`
  display: flex;
  width: 223px;
  height: 40.573px;
  flex-shrink: 0;
  list-style: none;
  gap: 20px;
  padding: 0px;
  & li img {
    width: 40.017px;
    height: 40.573px;
    flex-shrink: 0;
    cursor: pointer;
  }
`;
