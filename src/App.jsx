import { useState, useEffect } from "react";
import {
  mail,
  tiendanube,
  wppIcon,
  contacto,
  logoPink,
} from "./assets/index.jsx";
import SEOSchema from "./components/SEOSchema";
import { Navbar, MainSection, QueHacemos } from "./components/index.jsx";

import "./App.css";

function App() {
  useEffect(() => {
    // Actualizar título
    document.title =
      "Belmul - Diseño Web | Transformamos ideas en sitios web que venden";

    // Actualizar description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Especialistas en diseño web y marketing digital en Buenos Aires."
      );
    }
  }, []);

  return (
    <>
      <SEOSchema />
      <Navbar />
      <a href="https://wa.me/1138931266?text=Hace tu consulta!" target="_blank">
        <img src={wppIcon} alt="" className="fixed bottom-35 right-10" />
      </a>
      <MainSection />
      <QueHacemos />
      <h2 className="mt-10 text-color-blue font-bold text-2xl w-full text-start ml-10 md:text-center md:ml-0 md:mt-30 md:text-5xl">
        Servicios
      </h2>
      <section
        id="servicios"
        className="text-color-blue flex flex-col justify-center align-center items-center text-center"
      >
        <div className="ml-5 md:grid grid-cols-2">
          <div className="w-60 mt-10 flex flex-col justify-center align-center items-center text-center md:mt-30">
            <img src={tiendanube} alt="iconTiendanube" />{" "}
            <p className="mt-5">
              {" "}
              Ideal para clientes que quieren un e-commerce lo mas rápido
              posible
            </p>{" "}
            <p>Tenemos varias opciones para todos los bolsillos.</p>
            <p className="mt-5 text-orange-600 border-b-1 ">Ver paquetes</p>
          </div>
          <div className="hidden md:flex md:flex-col text-left md:mt-30">
            <p>Beneficios:</p>
            <ul className="p-5 w-fit list-disc list-inside">
              <li className="mt-5">Facilidad de uso y personalización</li>
              <li className="mt-5">Soporte local y en tu idioma</li>
              <li className="mt-5">Gestión integral del negocio</li>
              <li className="mt-5">
                Integraciones con múltiples canales de venta
              </li>
              <li className="mt-5">Diversidad de métodos de pago y envío</li>
              <li className="mt-5">Promociones y descuentos personalizados</li>
              <li className="mt-5">
                Adaptabilidad al crecimiento de tu negocio
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div></div>
      </section>
      <div className="md:grid md:grid-cols-[minmax(0,_600px)_minmax(0,_800px)] md:p-15  md:justify-center md:gap-20">
        <section id="nosotros" className="ml-5 text-color-blue">
          <h2 className="mt-10 font-bold text-2xl w-full text-start">
            Nosotros
          </h2>
          <div>
            <div className="mt-10 grid grid-cols-[1fr_2fr] p-2 gap-5 items-center md:grid-cols-1 md:p-0">
              <div className="md:flex md:justify-center">
                <img src={contacto} alt="nosotros" className="w-20" />
              </div>
              <p className="">
                Somos una dupla creativa formada por un estudiante de Desarrollo
                de Software y una en Diseño Gráfico y Diseño Multimedia e
                Interacción.
              </p>
            </div>
            <p className="w-100">
              Nos une el gusto por crear soluciones visuales funcionales, con
              foco en la experiencia de usuario y los objetivos de cada marca.
            </p>
          </div>
        </section>
        <section id="contacto" className=" mt-10 text-blue-900 w-11/12">
          <h2 className="ml-5 text-2xl font-bold">Contacto</h2>
          <div className="mt-10 mainColor p-15 font-bold">
            <p className="">Nombre</p>
            <input
              type="text"
              className="border-1 rounded-full mt-5 h-9 md:w-full pl-6"
              placeholder="Ej. Juan Perez"
            />
            <p className="mt-5">E-mail</p>
            <input
              type="mail"
              name=""
              id=""
              className="border-1 rounded-full mt-5 h-9 md:w-full pl-6"
              placeholder="Ej. juanperez@gmail.com"
            />
            <p className="mt-5">Mensaje</p>
            <input
              type="text"
              className="border-1 rounded-full mt-5 h-9 md:w-full pl-6"
              placeholder="Escriba su mensaje"
            />
          </div>
          <div className="flex text-center align-center justify-center items-center mt-10">
            <img src={wppIcon} alt="iconWhatsapp" className="ml-5" />
            <p>¡O envíanos un mensaje por Whatsapp!</p>
          </div>
        </section>
      </div>
<footer className="mt-20 bg-blue-900 text-white font-bold grid grid-rows-[auto_auto_auto] justify-start items-start p-8 pl-20 gap-10">
  {/* Logo arriba centrado */}
  <div className="row-span-1 col-span-full flex ">
    <img src={logoPink} alt="logo-pink" className="w-45 h-6" />
  </div>

  {/* Dos columnas de links */}
  <div className="grid grid-cols-2 gap-6">
    <ul className="space-y-2">
      <li><a href="">Inicio</a></li>
      <li><a href="">Servicios</a></li>
      <li><a href="">Proyectos</a></li>
    </ul>
    <ul className="space-y-2">
      <li><a href="">Nosotros</a></li>
      <li><a href="">Contacto</a></li>
    </ul>
  </div>
</footer>
    </>
  );
}

export default App;
