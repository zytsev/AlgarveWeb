import type { MetaFunction } from "@remix-run/node";
import {
  rewiewsItems,
  navItems,
  resultsItems,
  teamItems,
  questionsItems,
} from "../accets/data";
import Drop from "../components/dropdown/drop";

export const meta: MetaFunction = () => {
  return [
    { title: "Algarve Web" },
    { name: "description", content: "Welcome to Algarve Web!" },
  ];
};

export default function Index() {
  return (
    <div className="container">
      <section className="mainSection">
        <header className="header">
          <div className="headerLeftBlock">
            <img
              src="../../public/logo-removeBG.png"
              alt="logo"
              className="headerImg"
            ></img>
            <h3>Loja de sites</h3>
          </div>
          <nav className="nav">
            <ul className="navul">
              {navItems.map((item, i) => (
                <li className="navli" key={i}>
                  {item}
                </li>
              ))}
            </ul>
          </nav>
          <button className="headerBtn" type="button">
            Encomendar site
          </button>
        </header>
        <h1 className="title">Desenvolvimento web</h1>
        <p className="titleText">
          Crie sua loja online, café ou escritório conosco!
        </p>
        <button className="titleBtn" type="button">
          Comece agora
        </button>
      </section>
      <section className="results">
        {resultsItems.map((item, i) => (
          <div key={i} className="resultsBlock">
            <p className="resultsBlockTitle">{item.title}</p>
            <h3 className="resultsBlockText">{item.text}</h3>
          </div>
        ))}
      </section>
      <section className="team">
        <h2 className="teamTitle">Nossa equipe</h2>
        <div className="teamContainer">
          {teamItems.map((item, i) => (
            <div key={i} className="teamBlock">
              <img className="teamImg" src={item.imgSrc} alt="foto"></img>
              <h4 className="teamName">{item.name}</h4>
              <p className="teamJob">{item.job}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="rewiews">
        <h2 className="rewiewsTitle">Nossa equipe</h2>
        <div className="rewiewsContainer">
          {rewiewsItems.map((item, i) => (
            <div key={i} className="rewiewsBlock">
              <img className="rewiewsImg" src={item.imgSrc} alt="foto"></img>
              <h4 className="rewiewsName">{item.name}</h4>
              <p className="rewiewsText">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="transparant">
        <span className="transparantText">
          Crie seu site e comece a ganhar dinheiro hoje!
        </span>
        <button className="transparantBtn" type="button">
          Comece agora
        </button>
      </section>
      <section className="questions">
        <h2 className="questionsTitle">Perguntas frequentes</h2>
        {questionsItems.map((item, i) => (
          <Drop key={i} {...item} />
        ))}
      </section>
    </div>
  );
}
