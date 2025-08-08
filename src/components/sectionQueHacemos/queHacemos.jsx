import {creamos, diseniamos,  enseniamos, ideamos} from '../../assets/index.jsx'

export function QueHacemos() {
    return (
              <section id="" className="mt-20 ml-10 mr-10">
                <h2 className="text-color-blue font-extrabold text-2xl md:hidden">¿Qué hacemos?</h2>
                <p className="text-orange-600 mt-10 md:hidden">Te acompañamos en cada etapa del proceso</p>
                <div className="flex items-center align-center justify-center">
                <div className=" font-bold grid grid-cols-2 gap-13 mt-10 md:grid-cols-4 md:gap-25 md:mr-20 text-color-pink">
                  <div className="flex flex-col align-center items-center">
                    <img src={ideamos} alt="icon" className="mt-3"/> <p className="w-fit mt-3 ">Ideamos</p>
                  </div>
                  <div className="flex flex-col align-center items-center">
                    <img src={diseniamos} alt="icon" className="mt-3"/> <p className=" w-fit mt-3">Diseñamos</p>
                  </div>
                  <div className="flex flex-col align-center items-center md:mt-5">
                    <img src={creamos} alt="icon" /> <p className="w-fit mt-3">Creamos</p>
                  </div>
                  <div className="flex flex-col align-center items-center md:mt-5">
                    <img src={enseniamos} alt="icon" /> <p className="w-fit mt-3">Enseñamos</p>
                  </div>
                </div>
                </div>
              </section>
    )
}