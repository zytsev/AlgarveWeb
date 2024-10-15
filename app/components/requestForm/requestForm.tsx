import { useFetcher } from "@remix-run/react";
import Spinner from "../spinner/spinner";
import ModalMsg from "../modalMsg/modalMsg";
import { useRef, useState } from "react";

export default function RequestForm() {
  const [visible, setVisible] = useState(true);
  const fetcher = useFetcher();
  const isLoading = fetcher.state === "submitting";
  const message = fetcher.data;
  const refForm = useRef<HTMLFormElement>(null);

  const showModal = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    fetcher.submit(event.currentTarget?.form, { method: "POST" });
    setVisible(false);
  };

  const closeModal = () => {
    setVisible(true);
    if (message === "ok") {
      refForm.current?.reset();
    }
  };

  return (
    <fetcher.Form className="writeUsForm" method="post" ref={refForm}>
      <div className="writeUsinputsBlock">
        <ModalMsg message={message} novisible={visible} callback={closeModal} />
        <input
          className="writeUsInput writeUsInputName"
          type="text"
          name="name"
          placeholder="Nome*"
        ></input>
        <input
          className="writeUsInput writeUsInputPhone"
          type="text"
          name="tel"
          placeholder="Telefone*"
        ></input>
        <input
          className="writeUsInput writeUsInputEmail"
          type="email"
          name="email"
          placeholder="Email"
        ></input>
      </div>
      <textarea
        className="writeUsInput writeUsTextarea"
        placeholder="Comunicação"
        name="message"
      ></textarea>
      <button
        className="writeUsBtn"
        type="submit"
        disabled={isLoading}
        onClick={(event) => showModal(event)}
      >
        {isLoading ? <Spinner /> : "Enviar"}
      </button>
    </fetcher.Form>
  );
}
