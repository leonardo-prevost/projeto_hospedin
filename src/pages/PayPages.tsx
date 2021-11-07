import React from "react";

import "../styles/pay_pages.scss";

import { Button } from "../components/Button";

import { Link } from "react-router-dom";

import { FiCreditCard } from "react-icons/fi";

import { CustomSelect } from "../CustomSelect";

export function PayPages() {
  return (
    <div id="page">
      <div id="user_data">
        <div className="title">Dados Pessoais</div>
        <form action="#">
          <label htmlFor="User">
            <p className="up">
              Nome Completo<span>*</span>
            </p>

            <input type="text" required />
          </label>

          <label htmlFor="User">
            <p className="up">
              E-mail<span>*</span>
            </p>

            <input
              type="email"
              name="name"
              placeholder="contato@email.com"
              required
            />
          </label>

          <div className="title_data">Dados do cartão</div>

          <p id="text">
            Você não será cobrado agora. Solicitamos os dados do cartão
            <br />
            para garantir a reserva e realizar a cobrança em caso de
            <br /> cancelamento 7 dias antes da reserva.
          </p>

          <label htmlFor="User">
            <p className="up">Número do cartão *</p>
            <FiCreditCard size="22px" />
            <input
              type="number"
              id="placeholder-text"
              name="number"
              placeholder="0000 0000 0000 0000"
              required
            />
          </label>
          <div id="user_card">
            <label htmlFor="User">
              <p className="up"> Titular do cartão *</p>
              <input id="holder" type="text" required />
            </label>

            <label htmlFor="User">
              <p className="up">Validade *</p>
              <input
                id="validity"
                type="number"
                name="validity"
                placeholder="00/00"
                required
              />
            </label>

            <label htmlFor="User">
              <p className="up"> CVC *</p>
              <input
                id="CVC"
                type="number"
                name="cvc"
                placeholder="000"
                required
              />
            </label>
          </div>
          <label htmlFor="User">
            <p className="up"> Número de parcelas</p>
            <div id="place-down">
              <CustomSelect />
            </div>
          </label>
        </form>
      </div>

      <div id="reserve_box">
        <div id="box">
          <div id="box_color">
            <div className="sub_title">Dados da reserva</div>

            <div className="second_sub_title">Entrada</div>
            <p>domingo, 17 de novembro de 2019 a partir das 14:00</p>

            <div className="second_sub_title">Saída</div>
            <p>segunda-feira, 19 de novembro até 11:00</p>

            <div className="second_sub_title">Duração total da hospedagem</div>
            <p>2 dias</p>
          </div>
          <div id="resume_box">
            <div className="sub_title">Resumo do preço</div>
            <div id="room">
              <p>Suíte premium</p>
              <p>180,00</p>
            </div>
            <div id="final_price">
              <div className="sub_title">Preço</div>
              <span id="price">R$ 180,00</span>
            </div>
            <p id="italic">(para todos os hóspedes)</p>
          </div>
        </div>

        <Button>
          <Link to="/FinishPage">Concluir reserva</Link>
        </Button>
      </div>
    </div>
  );
}
