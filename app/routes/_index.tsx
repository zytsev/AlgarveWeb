/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import {
  navItems,
  resultsItems,
  teamItems,
  questionsItems,
  contactsItems,
} from "../accets/data";
import Drop from "../components/dropdown/drop";
import RequestForm from "../components/requestForm/requestForm";
import { addListener, noScrollBody } from "../services/serviceJS";
import { useEffect, useState } from "react";
import Burger from "../components/burger/burger";

export const meta: MetaFunction = () => {
  return [
    { title: "Algarve Web" },
    { name: "description", content: "Welcome to Algarve Web!" },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const name = String(formData.get("name"));
  const tel = String(formData.get("tel"));
  if (name.length < 2 || tel.length < 9) {
    return "errForm";
  } else {
    const email = formData.get("email");
    const message = formData.get("message");
    const text = `Name: ${name}%0APhone: ${tel}%0AE-mail: ${email}%0AMessage: ${message}`;
    const apiKEY = import.meta.env.VITE_APP_TLG_API_KEY as string;
    const url = `https://api.telegram.org/bot${apiKEY}/sendMessage?chat_id=190722937&text=${text}`;
    const response = await fetch(url);
    if (response.ok) {
      return "ok";
    } else {
      return "errTlg";
    }
  }
}

export default function Index() {
  const [burgerIsActive, setBurgerIsActive] = useState(false);
  useEffect(() => {
    addListener();
  }, []);
  useEffect(() => {
    noScrollBody(burgerIsActive);
  }, [burgerIsActive]);
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
        <a className="goto btnHeader" data-goto=".writeUs" href="#writeUs">
          <button className="headerBtn" type="button">
            Encomendar site
          </button>
        </a>
        <div
          onClick={() => setBurgerIsActive(!burgerIsActive)}
          className={burgerIsActive ? "burgerIcon burgerActive" : "burgerIcon"}
        >
          <span />
        </div>
        <Burger
          burgerIsActive={burgerIsActive}
          setBurgerIsActive={setBurgerIsActive}
        />
      </header>
      <section className="mainSection" id="main">
        <h1 className="title">Desenvolvimento web</h1>
        <p className="titleText">
          Crie sua loja online, café ou escritório conosco!
        </p>
        <a className="goto" data-goto=".writeUs" href="#writeUs">
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
        <a className="goto" data-goto=".writeUs" href="#writeUs">
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
            <span></span>
            <span></span>
          </div>
        </footer>
      </section>
    </div>
  );
}
