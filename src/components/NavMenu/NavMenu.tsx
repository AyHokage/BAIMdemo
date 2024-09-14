import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars as bars } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectLanguages } from "@/services/LanguagesReducer";
import { useEffect } from "react";
 
function NavMenu() {
  const menuLanguage = useSelector(selectLanguages).language;

  useEffect(() => {
    console.log(menuLanguage)
}, [menuLanguage])

  const getUniqueElements = (arr: string[]) => {
    let uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
      if (uniqueArray.indexOf(arr[i]) === -1) {
        uniqueArray.push(arr[i]);
      } 
    }

    return uniqueArray;
  };



  const drawSubcategories = (route: string, arr: string[]) => {
    return arr.map((p, i) => (
      <li key={i}>
        <Link className="navLink" href={`${route}/${p}`}>
          {p}
        </Link>
      </li>
    ));
  };

  return (
    <nav> 
      <menu>
        <li id="demo1">
          <a id="drop">
            <span>Меню</span>{" "}
            <span className="white">
              <FontAwesomeIcon className="fa-solid fa-bars" icon={bars} />
            </span>
          </a>
          <menu>
            <li>
              <Link className="navLink" href="/">
                О компании
              </Link>
              <menu>
                <li>
                  <Link className="navLink" href="/team">
                    Наш коллектив
                  </Link>
                </li>
                <li>
                  <a className="navLink">Карьера</a>
                </li>
                <li>
                  <Link className="navLink" href="/#crm">
                    Обратная связь
                  </Link>
                </li>
              </menu>
            </li>

            <li id="demo2">
              <Link className="navLink" href="/products">
                Продукты
              </Link>
            </li>

            <li id="demo2">
              <Link className="navLink" href="/services">
                Услуги
              </Link>
            </li>

            <li id="demo2">
              <Link className="navLink" href={`/licencies/${menuLanguage}`}>
                Лицензии
              </Link>
            </li>

            <li>
              <Link className="navLink" href="/clients">
                Наши клиенты
              </Link>
            </li>
            <li>
              <Link className="navLink" href="/partners">
                Наши партнёры
              </Link>
            </li>

            <li id="demo2">
              <Link className="navLink" href="/news">
                Полезные материалы
              </Link>
              <menu>
                <li>
                  <Link href="/news" className="navLink">
                    Новости
                  </Link>
                </li>
              </menu>
            </li>

            <li id="demo2">
              <Link className="navLink" href="/news">
                Полезные материалы
              </Link>
              <menu>
                <li>
                  <Link href="/brandbook" className="navLink">
                    Брэндбук
                  </Link>
                </li>
              </menu>
            </li>
          </menu>
        </li>
      </menu>
    </nav>
  );
}

export default NavMenu;
