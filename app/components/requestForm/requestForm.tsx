import React from "react";

export default function RequestForm() {
  return (
    <form className="writeUsForm">
      <div className="writeUsinputsBlock">
        <input
          className="writeUsInput writeUsInputName"
          type="text"
          placeholder="Nome"
          required
        ></input>
        <input
          className="writeUsInput writeUsInputPhone"
          type="number"
          placeholder="Telefone"
          required
        ></input>
        <input
          className="writeUsInput writeUsInputEmail"
          type="email"
          placeholder="Email"
          required
        ></input>
      </div>
      <textarea
        className="writeUsInput writeUsTextarea"
        placeholder="Comunicação"
        required
      ></textarea>
      <button className="writeUsBtn" type="button">
        Enviar
      </button>
    </form>
  );
}
