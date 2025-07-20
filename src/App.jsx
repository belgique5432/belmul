import { useState } from "react";
import {creamos, diseniamos, logoDesktop, enseniamos, ideamos, logoMovile, mail, mainImage, tiendanube, wppIcon, menu, imageDesktop, mancha} from './assets/index.jsx'


import "./App.css";

function App() {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(!display);
    console.log(display)
  }

  return (
    <>
    <div className="flex justify-between p-5 md:hidden">
      <button onClick={handleDisplay}><img src={menu} alt="menu" /></button>
      <img src={logoMovile} alt="" />
    </div>
    {display && (
<header className="bg-blue-900 text-white absolute h-full text-white font-bold p-5 text-xl">
        <h2>Menú</h2>
        <ul className="flex flex-col gap-2 mt-5">
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#servicios">Servicios</a>
          </li>
          <li className="">
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

    <header className="hidden md:flex justify-between text-xl text-blue-900 p-5 font-bold">
      <img src={logoMovile} alt="menu" />
              <ul className="flex gap-10">
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#servicios">Servicios</a>
          </li>
          <li className="">
            <a href="#proyectos">Proyectos</a>
          </li>
        </ul>
    </header>

    <section id="inicio" className="hidden md:flex justify-center text-center mt-50 text-blue-900 text-4xl">
      <div>
        <h2>Somos</h2>
        <img src={logoDesktop} alt="logo" />
        <h2>Diseño web</h2>
      </div>
    </section>
      <a href="https://wa.me/1138931266?text=Hace tu consulta!" target="_blank">
    <img src={wppIcon} alt="" className="fixed bottom-35 right-10" />
</a>
      <section id="inicio" className="rounded-br-4xl mr-5 mt-10 md:mt-80">
        <div className="bg-blue-300 text-blue-900 md:flex md:justify-center md:bg-transparent">
          <div>
          <h1 className="font-extrabold text-3xl w-80 p-5 md:text-5xl md:w-2xl">Transformamos ideas en sitios web que venden</h1>
          <p className="hidden md:flex mt-10 ml-5 text-blue-800 w-xl">
          Diseñamos y desarrollamos landing pages e e-commerce modernos,
          adaptados 100% a tu marca y objetivos. Creamos nuevas oportunidades de
          comercio para pequeñas y grandes empresas.
        </p>
        </div>
          <img src={mainImage} alt="logo" className="ml-5 md:hidden"/>
          <img src={imageDesktop} alt="logo" className="hidden md:flex w-100 ml-10" />
        </div>
        <p className="mt-10 ml-5 text-blue-800 md:hidden">
          Diseñamos y desarrollamos landing pages e e-commerce modernos,
          adaptados 100% a tu marca y objetivos. Creamos nuevas oportunidades de
          comercio para pequeñas y grandes empresas.
        </p>
        <button className="mt-15 text-orange-600 border rounded-full h-10 w-40 flex text-center items-center align-center justify-center ml-5 md:hidden">Conocenos</button>
      </section>
      <section id="" className="mt-20 ml-10 mr-10">
        <h2 className="text-blue-900 font-extrabold text-2xl md:hidden">¿Qué hacemos?</h2>
        <p className="text-orange-600 mt-10 md:hidden">Te acompañamos en cada etapa del proceso</p>
        <div className="flex items-center align-center justify-center">
        <div className="text-blue-900 font-bold grid grid-cols-2 gap-13 mt-10 md:grid-cols-4 md:gap-25 md:mr-20">
          <div className="flex flex-col align-center items-center">
            <img src={ideamos} alt="icon"/> <p className="border-t-2 w-fit">Ideamos</p>
          </div>
          <div className="flex flex-col align-center items-center">
            <img src={diseniamos} alt="icon" className="mt-3"/> <p className="border-t-2 w-fit">Diseñamos</p>
          </div>
          <div className="flex flex-col align-center items-center md:mt-5">
            <img src={creamos} alt="icon" /> <p className="border-t-2 w-fit3">Creamos</p>
          </div>
          <div className="flex flex-col align-center items-center md:mt-5">
            <img src={enseniamos} alt="icon" /> <p className="border-t-2 w-fit">Enseñamos</p>
          </div>
        </div>
        </div>
      </section>
                <h2 className="mt-10 text-blue-900 font-bold text-2xl w-full text-start ml-10 md:text-center md:ml-0 md:mt-30 md:text-5xl">Servicios</h2> 
      <section id="servicios" className="flex flex-col justify-center align-center items-center text-center">
        <div className="ml-5">

          <div className="w-60 mt-10 flex flex-col justify-center align-center items-center text-center md:mt-30">
            <img src={tiendanube} alt="iconTiendanube" />{" "}
            <p className="mt-5">
              {" "}
              Ideal para clientes que quieren un e-commerce lo mas rápido
              posible
            </p>{" "}
            <p className="mt-5 text-orange-600 border-b-1 md:hidden">Ver más</p>
            <div className="mt-5">
              <p className="text-orange-600 border-b-1 md:hidden">Cotiza por Whatsapp</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div></div>
      </section>
      <section id="nosotros" className="ml-5 md:hidden">
        <h2 className="mt-10 text-blue-900 font-bold text-2xl w-full text-start">Nosotros</h2>
        <p className="mt-10 text-blue-800">
          Somos una dupla creativa formada por un estudiante de Desarrollo de
          Software y una en Diseño Gráfico y Diseño Multimedia e Interacción.
          Nos une el gusto por crear soluciones visuales funcionales, con foco
          en la experiencia de usuario y los objetivos de cada marca.
        </p>
      </section>
      <section id="contacto" className=" mt-10 text-blue-900 w-11/12 md:hidden">
        <h2 className="ml-5 text-2xl font-bold">Contacto</h2>
        <div className="mt-10 bg-blue-300 p-15 font-bold">
          <form action="" className=""></form>
          <p className="">Nombre</p>
          <input type="text" className="border-1 rounded-full mt-5 h-9" placeholder="Ej. Juan Perez"/>
          <p className="mt-5">E-mail</p>
          <input type="mail" name="" id="" className="border-1 rounded-full mt-5 h-9" placeholder="Ej. juanperez@gmail.com"/>
          <p className="mt-5">Mensaje</p>
          <input type="text" className="border-1 rounded-full mt-5 h-9" placeholder="Escriba su mensaje"/>
        </div>
        <div className="flex text-center align-center justify-center items-center mt-10">
          <img src={wppIcon} alt="iconWhatsapp" className="ml-5"/>
          <p>¡O envíanos un mensaje por Whatsapp!</p>
        </div>
      </section>
      <footer className="mt-20 bg-blue-900 text-white font-bold md:flex md:justify-center">
        <ul className="grid grid-cols-2 p-10 gap-1 max-w-3/4 md:grid-cols-4 md:w-full md:ml-40">
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Servicios</a>
          </li>
          <li className="">
            <a href="">Proyectos</a>
          </li>
          <li>
            <a href="">Nosotros</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
          <li className="flex items-center">
              <img src={mail} alt="mail" />
              <a href="" className="ml-2">belmul@gmail.com</a>
          </li>
          <li>
            <a href=""></a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
