import React from "react";
import Cachorro from "../../../assets/imagens/cachorrinho.jpeg";
import ListaDeIcones from "../ListaDeIcones";
import {
  CarMainConstrucao,
  TextoMain,
} from "./StyledTelaEmConstrucao";
export default function TelaEmConstrucao(props) {
  return (
    <div>
      <ListaDeIcones produtos={props.produtos}/>
      <CarMainConstrucao>
        <TextoMain>
          <p>
            Olá! Esta página ainda não está funcionando{" "}
            <span role="img" aria-label="Emoji triste">
              😕
            </span>
            .
          </p>
          <p>Por favor, escolha outra opção.</p>
          <div>
            <button onClick={props.produtos}>Contratar um Ninja</button>
            <button onClick={props.cadastro}>Quero ser um Ninja</button>
          </div>
        </TextoMain>
        <img
          src={Cachorro}
          alt="Cachorro com um computador"
          width="400"
          height="300"
        />
      </CarMainConstrucao>
    </div>
  );
}
