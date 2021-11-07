import React from "react";

import "../styles/home.scss";

import map from "../assets/images/map.png";
import { RiWifiLine } from 'react-icons/ri';
import { FiCoffee } from "react-icons/fi";
import { GiTowel } from "react-icons/gi";
import { MdOutlinePool } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineMap } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { BsPeople } from "react-icons/bs";

import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="page">
      <header>
        <div id="description">
          <h1>Pousada Na Tribu's</h1>
          <p>
            Próximo aos setores de entretenimento e empresarial, o Plaza Bittar
            Hotel fica a 1 quarteirão do Shopping Brasília e a 15 minutos de
            carro do Aeroporto Internacional de Brasília. Os quartos dispõem de
            ar-condicionado, e o Wi-Fi<span id="hide">...</span>
          </p>
          <a href="/">
            <IoIosArrowDown size="20px" />
            Expandir descrição do hotel
          </a>
          <strong>Comodidades do hotel</strong>
          <div id="convenience">
            
            <span>
              <RiWifiLine /> Wi-Fi gratuito
            </span>
            <span>
              <FiCoffee /> Restaurante
            </span>
            <span>
              <AiOutlineClockCircle /> Recepção 24h
            </span>
            <span>
              <GiTowel /> Toalha de banho
            </span>
            <span>
              <MdOutlinePool /> Piscina
            </span>
          </div>
        </div>
        <div id="information_area">
          <div id="map">
            <img src={map} alt="map" />
            <span id="link_map">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/place/Av.+Porto+Novo,+764+-+Ibiraquera,+Imbituba+-+SC,+88780-000/@-28.1245077,-48.6482659,17z/data=!3m1!4b1!4m5!3m4!1s0x9526cc23af634d0d:0x6228abb2504a9a06!8m2!3d-28.1245077!4d-48.6460772"
              >
                <HiOutlineMap />
                Visualizar no mapa
              </a>
            </span>
            <div>
              <span>Av. Porto Novo, 764-806 - Ibiraquera, Imbituba-SC</span>
            </div>
          </div>
          <div id="cheks">
            <span id="up">
              <strong>
                Check in:<p>14:00 às 17:00</p>
              </strong>
              <strong>
                Check out:<p>até às 11:00</p>
              </strong>
            </span>

            <span id="down">
              <div id="down_element">
                Cancelamento grátis:
                <p>até 7 dias antes da sua reserva</p>
              </div>
            </span>
          </div>
        </div>
      </header>
      <main>
        <div id="main">
          <h2>Reserve a sua acomodação</h2>
          <div id="setDate">
            <input type="date" placeholder="" />
            <input type="date" />
          </div>
          <div id="line"></div>
          <div id="description_room">
            <div id="types">Tipo de quarto</div>
            <div id="price">Preço por noite</div>
            <div id="capacity">Capacidade</div>
          </div>

          <div id="room_1">
            <img src="https://picsum.photos/200" alt="random images" />
            <span className="title">TÍTULO</span>
            <span className="value">R$VALOR</span>
            <BsPeople size="22px" />
            <span className="capacity">2</span>
            <Button type="submit">
              <Link to="/PayPages">Reservar</Link>
            </Button>
          </div>

          <div className="more_information">
            <a href="/">
              <IoIosArrowDown size="20px" />
              Mais informações
            </a>
          </div>

          <div id="room_2">
            <img src="https://picsum.photos/200" alt="random images" />
            <span className="title">TÍTULO</span>
            <span className="value">R$VALOR</span>
            <BsPeople size="22px" />
            <span className="capacity">2</span>
            <Button type="submit">
              <Link to="/PayPages">Reservar</Link>
            </Button>
          </div>

          <div id="drop-down-content">
            <div className="more_information">
              <a href="#">
                <IoIosArrowDown size="20px" />
                Mais informações
              </a>
            </div>
          </div>
          <div id="room_3">
            <img src="https://picsum.photos/200" alt="random images" />
            <span className="title">TÍTULO</span>
            <span className="value">R$VALOR</span>
            <BsPeople size="22px" />
            <span className="capacity">2</span>
            <Button type="submit">
              <Link to="/PayPages">Reservar</Link>
            </Button>
          </div>

          <div className="more_information">
            <a href="/">
              <IoIosArrowDown size="20px" />
              Mais informações
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
