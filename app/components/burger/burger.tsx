import React from "react";
import { navItems } from "../../accets/data";
import styles from "./burger.module.css";
interface propsBurger {
  burgerIsActive: boolean;
  setBurgerIsActive: (arg0: boolean) => void;
}

function Burger({ burgerIsActive, setBurgerIsActive }: propsBurger) {
  return (
    <div
      style={burgerIsActive ? { top: "5rem" } : undefined}
      className={styles.burger}
    >
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {navItems.map((item, i) => (
            <li className="navliBurgerMenu" key={i}>
              <a
                onClick={() => setBurgerIsActive(false)}
                className="goto"
                data-goto={item.goto}
                href={item.id}
              >
                {item.link}
              </a>
            </li>
          ))}
        </ul>
        <a className="goto" data-goto=".writeUs" href="#writeUs">
          <button
            onClick={() => setBurgerIsActive(false)}
            className="headerBtn"
            type="button"
          >
            Encomendar site
          </button>
        </a>
      </nav>
    </div>
  );
}

export default Burger;
