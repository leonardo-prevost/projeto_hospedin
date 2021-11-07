import React from "react";

import "../styles/finish_page.scss";
import illustration from "../assets/images/illustration.png";

export function FinishPage() {
  return (
    <div id="container">
      <img src={illustration}/>

      <h1>Sua reserva foi feita com sucesso!</h1>
      <p>
        Você receberá um -email com a confirmação e mais detalhes sobre sua
        reserva.
        <br />
        Estamos ansiosos para recebê-lo!
      </p>
    </div>
  );
}
