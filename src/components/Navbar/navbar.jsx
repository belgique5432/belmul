import { useState } from "react";
import menu from "../../assets/menu.png"; // Ajusta la ruta según corresponda
import logo from "../../assets/logo.svg"; // Ajusta la ruta según corresponda
import mail from "../../assets/mail.png"; // Ajusta la ruta según corresponda

export function Navbar() {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(!display);
    console.log(display);
  };

  // ...existing code...
  return (
    <>
      <div className="mainColor flex justify-between p-5 md:hidden ">
        <button onClick={handleDisplay}>
          <img src={menu} alt="menu" />
        </button>
        <img src={logo} alt="" className="w-35"/>
      </div>
      {display && (
        <header className="mainColor text-color-blue absolute h-full text-white font-bold p-5 text-xl md:hidden">
          <h2>Menú</h2>
          <ul className="flex flex-col gap-2 mt-5">
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#servicios">Servicios</a>
            </li>
            <li>
              <a href="#proyectos">Proyectos</a>
            </li>
            <li>
              <a href="#nosotros">Nosotros</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
            <li>
              <a href="" className="flex items-center gap-2">
                <img src={mail} alt="mail" />
                belmul@gmail.com
              </a>
            </li>
            <li>
              <a href=""></a>
            </li>
          </ul>
        </header>
      )}
      <div className="mainColor hidden md:flex justify-center p-5">
            <img src={logo} alt="" className="w-35"/>
      </div>
      <nav className="hidden md:flex mainColor text-white  p-5 text-xl w-full justify-center text-color-blue">
        <ul className="flex flex-row gap-8 items-center">
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#servicios">Servicios</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#nosotros">Nosotros</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </>
  );}