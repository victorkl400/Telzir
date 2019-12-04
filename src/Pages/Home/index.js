import React, { Component } from "react";

//Componentes
import Seletor from "../../components/Seletor";
import Barra from "../../components/Barra";
import Header from "../../components/Header";

//Consumindo
import { DDDs, planos } from "../../services/api.js";

//Estilos
import "./style.css";
import "react-toastify/dist/ReactToastify.css";
import celular from "../../assets/celular.png";

//Externos
import SimpleReactValidator from "simple-react-validator";
import { ToastContainer, toast } from "react-toastify";

export default class Home extends Component {
  constructor() {
    super();
    this.validator = new SimpleReactValidator();

    this.state = {
      origem: null,
      destino: null,
      duracao: 1,
      plano: null,
      valor: null,
      valorPlano: null,
      ideal: 30
    };
  }

  handleCheck = evento => {
    const {
      target: { name, value }
    } = evento;
    this.setState({ [name]: value }, () => {
      this.verify();
    });
  };
  calc = () => {
    let { duracao, plano, origem, destino } = this.state;

    let valP = Number(plano); //Formatando para duas casas decimais
    let excedente = duracao - valP;

    let origemIndex = DDDs.findIndex(item => item.ddd === origem);
    let destinoIndex = DDDs.findIndex(item => item.ddd === destino);

    for (let v = 0; v < DDDs.length; v++) {
      //Procurando o selecionado
      switch (origem) {
        case DDDs[origemIndex].ddd:
          const { ddd } = DDDs[v];
          const { taxa } = DDDs[origemIndex];
          switch (destino) {
            case ddd: {
              if (excedente > 0) {
                let valorPlano = `R$ ${(
                  excedente *
                  (taxa[destinoIndex] + taxa[destinoIndex] * 0.1)
                ).toFixed(2)}`;
                this.setState({ valorPlano });
              } else {
                this.setState({ valorPlano: "Gratuito" });
              }
              let valor = `R$ ${(duracao * taxa[destinoIndex]).toFixed(2)}`;
              this.setState({ valor });

              break;
            }

            default:
              break;
          }
          break;
        default:
          break;
      }
    }
  };
  setBar = ([duracao]) => {
    this.setState({ duracao }, () => {
      this.verify();
    });
  };
  ideal = () => {};
  //Verificando se tudo foi selecionado
  verify = () => {
    if (this.validator.allValid()) {
      //Caso seja validado
      toast("Confira o resultado"); //Exibe uma notificacao na tela
      this.calc();
    } else {
      this.validator.showMessages(); //Marca as areas não selecionadas
      this.forceUpdate();
    }
  };

  render() {
    const { origem, destino, plano } = this.state;
    return (
      <div>
        <ToastContainer />
        <Header />

        <form>
          <div
            className={`${this.validator.message(
              //Caso origem não tenha sido selecionado ele adiciona a classe error
              "origem",
              origem,
              "required"
            ) && "error"} content`}
          >
            <section>
              <div className="title">
                <h2>Simule o custo de suas ligações</h2>
              </div>

              <h3>Selecione o DDD de Origem</h3>

              <div className="items">
                {DDDs.map(item => {
                  //Gerando opcoes de origem
                  return (
                    <Seletor
                      key={item.ddd + this.props.name}
                      value={item.ddd}
                      teste={`logo${+item.ddd}`}
                      defaultChecked={origem === item.ddd}
                      name="origem"
                      onClick={this.handleCheck}
                    />
                  );
                })}
              </div>
            </section>
          </div>

          <div className="content">
            <hr></hr>
            <section>
              <h3>Escolha a duração da chamada</h3>

              <div className="items">
                {/*Barra de duracao em minutos*/}
                <Barra
                  values={[this.state.duracao]}
                  name="duracao"
                  onChange={this.setBar}
                />
              </div>
            </section>
          </div>

          <div
            className={`${this.validator.message(
              "destino",
              destino,
              "required"
            ) && "error"} content`}
          >
            <hr></hr>
            <section>
              <h3>Selecione o DDD de destino</h3>
              <span>Disponivel para clientes: Pos,Controle e Pre</span>

              <div className="items">
                {origem === DDDs[0].ddd ? ( //Caso origem for 011
                  DDDs.map((item, index) => {
                    //Gerando opcoes de destino
                    return (
                      <Seletor
                        key={item.ddd + index}
                        value={item.ddd}
                        defaultChecked={destino === item.ddd}
                        teste={`logo${item.ddd}`}
                        name="destino"
                        onClick={this.handleCheck}
                      />
                    );
                  })
                ) : (
                  //Se origem for 016,017,018
                  <Seletor
                    key={DDDs[0].ddd + this.props.name}
                    value={DDDs[0].ddd}
                    defaultChecked={destino === DDDs[0].ddd}
                    name="destino"
                    onClick={this.handleCheck}
                  />
                )}
              </div>
            </section>
          </div>

          <div
            className={`${this.validator.message("plano", plano, "required") &&
              "error"} content`}
          >
            <hr></hr>
            <section>
              <h3>Selecione um plano</h3>
              <div className="items">
                 
                {planos.map((item, index) => {
                  return (
                    <Seletor
                      key={item + index}
                      id={item + index}
                      value={item}
                      defaultChecked={plano == item}
                      name="plano"
                      onClick={this.handleCheck}
                    />
                  );
                })}
              </div>
            </section>
          </div>
          <div className="content">
            <section>
              <div className="items">
                <div className="result">
                  <div>
                    <span>FaleMais {plano}</span>
                    <p>{this.state.valorPlano}</p>
                  </div>
                  <div>
                    <span>Sem plano</span>
                    <p>{this.state.valor}</p>
                  </div>
                  <div>
                    <span>Plano Ideal</span>
                    <p>
                      <img
                        alt="planoIdeal"
                        src={require(`../../assets/${this.state.ideal}.png`)} //Exibindo plano ideal
                      />
                    </p>
                  </div>
                  <img alt="celular" src={celular} />
                </div>
              </div>
            </section>
          </div>
        </form>
        {/* <FloatFooter /> */}
      </div>
    );
  }
}
