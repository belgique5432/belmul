import { mainImage, imageDesktop } from "../../assets";

export function MainSection() {
  return (
    <section id="inicio" className="rounded-br-4xl">
      <div className="mainColor text-color-blue md:flex md:justify-center md:bg-transparent md:p-30">
        <div> 
          <h1 className="text-color-blue bricolage font-extrabold text-3xl w-80 p-5 md:text-5xl md:w-2xl ">
            Transformamos ideas en sitios web que venden
          </h1>
          <p className="hidden text-color-blue md:flex mt-10 ml-5 w-xl">
            Diseñamos y desarrollamos landing pages e e-commerce modernos,
            adaptados 100% a tu marca y objetivos. Creamos nuevas oportunidades
            de comercio para pequeñas y grandes empresas.
          </p>
        </div>
        <img src={mainImage} alt="logo" className="ml-5 md:hidden" />
        <img
          src={imageDesktop}
          alt="logo"
          className="hidden md:flex md:w-2/6 ml-10"
        />
      </div>
      <p className="mt-10  text-color-blue ml-5 text-blue-800 md:hidden ">
        Diseñamos y desarrollamos landing pages e e-commerce modernos, adaptados
        100% a tu marca y objetivos. Creamos nuevas oportunidades de comercio
        para pequeñas y grandes empresas.
      </p>
      <button className="mt-15 text-orange-600 border rounded-full h-10 w-40 flex text-center items-center align-center justify-center ml-5 md:hidden">
        Conocenos
      </button>
    </section>
  );
}
