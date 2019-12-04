import styled from "styled-components";

export const Container = styled.label`
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
  margin: 5px;
  margin-left: 150px;
  width: 11vw;
  height: 10vw;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  :nth-child(1) {
    margin-left: 5px;
  }
  h4 {
    font-weight: 370;
  }
  p {
    width: 150px;
    font-size: 14px;
    color: #666;
    font-weight: 300;
  }
  img {
    opacity: ${props => (props.selecionado ? "100%" : "55%")};
    width: 25vh;
    -webkit-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }

  @media (min-width: 1000px) {
    padding: 90px 0 0 0;

    :hover img {
      opacity: 100%;
      width: 180px;
      -webkit-transition: 0.5s ease-in-out;
      transition: 0.5s ease-in-out;
    }
    .item_content_text {
      padding: 0;
      -webkit-transition: 0.5s ease-in-out;
      transition: 0.5s ease-in-out;
    }
    :hover .item_content_text {
      margin-left: 10px;
      -webkit-transition: 0.5s ease-in-out;
      transition: 0.5s ease-in-out;
    }
  }

  @media (max-width: 800px) {
    background: ${props => (props.selecionado ? "rgba(0,0,0,0.05)" : "")};
    width: 100vw;
    display: table-row;
    img {
      opacity: 100%;
      margin-bottom: 60px;
      width: 70px;
      clear: none;
      float: left;
    }
    .item_content_text {
      margin-left: 30vw;
    }
  }
`;

/*INPUT RADIO (POSSÍVEIS MUDANÇAS FUTURAS) */
export const RadioBtn = styled.input`
  visibility: hidden;
`;
