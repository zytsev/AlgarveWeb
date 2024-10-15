/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useOutsideClick } from "../../services/useOutsideClick";
import styles from "./modalMsg.module.css";
interface propModal {
  message?: string | unknown;
  novisible: boolean;
  callback: () => void;
}
function ModalMsg({ message, novisible, callback }: propModal) {
  let text = "";
  let bordercolor = "";
  switch (message) {
    case "ok":
      text = "Está tudo bem! Espera pela chamada.";
      bordercolor = "borderGreen";
      break;
    case "errTlg":
      text = "Houve um erro. Tente mais tarde";
      bordercolor = "borderRed";
      break;
    case "errForm":
      text = "Por favor, preencha o formulário. Nome e telefone necessários.";
      bordercolor = "borderRed";
      break;

    default:
      break;
  }
  const ref = useOutsideClick(() => callback());
  return (
    <div
      ref={ref}
      className={`${styles.container} ${bordercolor} ${
        novisible && "modalNoVisible"
      }`}
    >
      <p className={styles.message}>{text}</p>
    </div>
  );
}

export default ModalMsg;
