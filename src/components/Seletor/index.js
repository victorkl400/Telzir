import React, { Component } from "react";

import { Container, RadioBtn } from "./style";

export default class Seletor extends Component {
  render() {
    const { id, defaultChecked, name, value } = this.props;

    return (
      <Container htmlFor={id} selecionado={defaultChecked} margem={name}>
        <RadioBtn type="radio" id={name + value} {...this.props} />

        <div id="item_content">
          <img alt={id} src={require(`../../assets/${value}.png`)} />
          {name === "plano" ? (
            <>
              <h4 className="item_content_text">FaleMais {value}</h4>
              <div className="item_content_text">
                <p>
                  Com o {name} FaleMais{value} você tem {value} minutos
                  disponíveis para ligações interurbanas.
                </p>
              </div>
            </>
          ) : (
            <>
              <h4 className="item_content_text">DDD {value}</h4>
              <div className="item_content_text">
                <p>
                  Para ligações com {name} DDD {value}
                </p>
              </div>
            </>
          )}
        </div>
      </Container>
    );
  }
}
