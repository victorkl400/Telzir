import styled from "styled-components";
import { Slider } from "react-compound-slider";

export const TickVal = styled.div`
  position: absolute;
  margin-top: 22px;
  font-size: 10px;
  font-stretch: 10px;
  z-index: -1;
  text-align: center;
  margin-left: ${props => -(100 / props.count) / 2}%;
  width: ${props => 100 / props.count}%;
  left: ${props => props.percent}%;
  @media screen and (max-width: 800px) {
    margin-top: 20px;
    font-size: 14px;
  }
`;

export const SliderContainer = styled(Slider)`
  position: relative;
  width: 100%;
  @media screen and (max-width: 800px) {
    margin-left: 1vw;
    width: 70vw;
    margin-bottom: 100px;
  }
`;

/*Barra de deslizamento*/
export const SlideBar = styled.div`
  position: absolute;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  cursor: pointer;
  background-color: #66209a;
  @media screen and (max-width: 800px) {
    width: 70vw;
  }
`;

/*Circulo de deslizamento*/
export const Ball = styled.div`
  position: absolute;
  margin-left: -11px;
  margin-top: -9px;
  z-index: 0.1;
  width: 24px;
  height: 24px;
  cursor: "pointer";
  border-radius: 50%;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.4);
  background-color: #ffad33;
  left: ${props => props.percent}%;

  @media screen and (max-width: 800px) {
    margin-top: -15px;
    width: 8vw;
    height: 8vw;
  }
`;

/*Box de Informações*/
export const Tooltip = styled.div`
  width: 100px;
  bottom: 150%;
  left: 50%;
  position: absolute;
  text-align: center;
  margin-left: -50px;
  padding: 5px 0;
  border-radius: 6px;
  background-color: #eb3c7d;
  color: #fff;
  z-index: 1;

  /*Setinha do box*/
  ::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #eb3c7d transparent transparent transparent;
  }
`;
export const RangeBar = styled.input`
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
  color: red;
  width: calc(60vw);
`;
