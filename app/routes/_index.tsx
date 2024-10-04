/* eslint-disable jsx-a11y/anchor-is-valid */
import type { MetaFunction } from "@remix-run/node";
import {
  navItems,
  resultsItems,
  teamItems,
  questionsItems,
  contactsItems,
} from "../accets/data";
import Drop from "../components/dropdown/drop";
import RequestForm from "../components/requestForm/requestForm";
import { addBlueOutline, goTo } from "../services/serviceJS";
import { useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Algarve Web" },
    { name: "description", content: "Welcome to Algarve Web!" },
  ];
};

export default function Index() {
  useEffect(() => {
    addBlueOutline();
    goTo();
  }, []);
  return (
    <div className="container">
      <header className="header">
        <div className="headerLeftBlock">
          <img src="../../public/log-removeBG.png" alt="logo"></img>
          <h3>Loja de sites</h3>
        </div>
        <nav className="nav">
          <ul className="navul">
            {navItems.map((item, i) => (
              <li className="navli" key={i}>
                <a className="goto" data-goto={item.goto} href={item.id}>
                  {item.link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="goto" data-goto=".writeUs" href="#">
          <button className="headerBtn" type="button">
            Encomendar site
          </button>
        </a>
      </header>
      <section className="mainSection" id="main">
        <h1 className="title">Desenvolvimento web</h1>
        <p className="titleText">
          Crie sua loja online, café ou escritório conosco!
        </p>
        <a className="goto" data-goto=".writeUs" href="#">
          <button className="titleBtn" type="button">
            Comece agora
          </button>
        </a>
      </section>
      <section className="results">
        {resultsItems.map((item, i) => (
          <div key={i} id={item.id} className="resultsBlock">
            <p className="resultsBlockTitle">{item.title}</p>
            <h3 className="resultsBlockText">{item.text}</h3>
          </div>
        ))}
      </section>
      <section className="team">
        <h2 className="teamTitle">Nossa equipe</h2>
        <div className="teamContainer">
          {teamItems.map((item, i) => (
            <div key={i} id={item.name} className="teamBlock">
              <img className="teamImg" src={item.imgSrc} alt="foto"></img>
              <h4 className="teamName">{item.name}</h4>
              <p className="teamJob">{item.job}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="transparant">
        <span className="transparantText">
          Crie seu site e comece a ganhar dinheiro hoje!
        </span>
        <a className="goto" data-goto=".writeUs" href="#">
          <button className="transparantBtn" type="button">
            Comece agora
          </button>
        </a>
      </section>
      <section className="questions">
        <h2 className="questionsTitle">Perguntas frequentes</h2>
        {questionsItems.map((item, i) => (
          <Drop key={i} {...item} />
        ))}
      </section>
      <section className="sectionRunline">
        <h2>
          Site Cartão de visita * Loja online * Design responsivo * Fácil de
          usar * Design exclusivo * Pedidos instantâneos * Suporte ao cliente
          24/7 * Otimização SEO * Ajuda com hospedagem
        </h2>
      </section>
      <section className="sectionImage">
        <img src="../../public/photo.jpeg" alt="computer"></img>
      </section>
      <section className="writeUs" id="writeUs">
        <h2 className="writeUsTitle">Entre em contato conosco</h2>
        <RequestForm />
      </section>
      <section className="contacts" id="contact">
        <h2 className="contactsTitle">Contato</h2>
        <div className="contactsBlock">
          {contactsItems.map((item, i) => (
            <div key={i} className="contactsElem">
              <p className="contactsElemTitle">{item.title}</p>
              <p className="contactsElemText">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="footerSection">
        <footer className="footer">
          <div className="footerCopyrite">
            © 2024 Todos os direitos reservados.
          </div>
          <div className="footerLinks">
            <span>Política</span>
            <span>Sobre nós</span>
          </div>
        </footer>
      </section>
    </div>
  );
}
