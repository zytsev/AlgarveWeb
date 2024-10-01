import React from "react";

export default function RequestForm() {
  return (
    <form className="writeUsForm">
      <div className="writeUsinputsBlock">
        <input
          className="writeUsInputName"
          type="text"
          placeholder="Nome"
          required
        ></input>
        <input
          className="writeUsInputEmail"
          type="email"
          placeholder="Email"
          required
        ></input>
      </div>
      <textarea
        className="writeUsTextarea"
        placeholder="Comunicação"
        required
      ></textarea>
      <button className="writeUsBtn" type="button">
        Enviar
      </button>
    </form>
  );
}
