import { useState } from 'react'
import { marked } from 'marked'
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { TbArrowsDiagonalMinimize } from "react-icons/tb";


function App() {
  const [activado, setActivado] = useState(false);
  const [previsualizacion, setPrevisualizacion] = useState(false);
  const [texto, setTexto] = useState("Bienvenido al previsualizador del editor de código basado en la biblioteca Marked, por favor para iniciar empiece a codear en el editor siguiendo los pasos de la documentación oficial ¡muchas gracias!");

  const todoContenido = (evento) => {
    let respuesta = evento.target.value;
    setTexto(marked.parse(respuesta))
  }

  const cambiarTamaño = () => {
    setActivado(!activado)
  }

  const cambiarPrevisualizacion = () => {
    setPrevisualizacion(!previsualizacion)
  }

  return (
    <div className="bg-[#1f1628] h-full">
      <div className='flex pt-6 items-center flex-col'>
        {/* Parte del editor */}
        <div className={`flex flex-col justify-center items-center xl:w-[592px] md:w-[500px] w-96  bg-[#8a4aa3] shadow-2xl shadow-black rounded-md ${activado ? "mb-6" : ""} ${previsualizacion ? "hidden" : ""} `}>
          <div className='flex w-full justify-between p-2 items-center'>
            <h2 className='text-xl font-bold pl-2 font-fuentecodigo'>Editor</h2>
            <button
              onClick={() => cambiarTamaño()}
              className='text-xl font-bold' ><HiOutlineArrowsExpand className='hover:text-[#cf9dea]' /></button>
          </div>
          <div className='w-[100%] flex justify-center '>
            <textarea
              defaultValue={"# Coloca el titulo aquí"}
              onChange={todoContenido}
              className={`w-full min-h-[200px] bg-[#c8c0d8] ${activado ? "h-screen" : ""} $ p-2 outline-none text-sm font-fuentecodigoposta`}
            />
          </div>
        </div>
        {/* Parte del visualizador */}
        <div className={`flex flex-col justify-center items-center xl:w-[797px] md:w-[600px] w-96 bg-[#8a4aa3] shadow-2xl shadow-black rounded-md mt-6 mb-7 ${activado ? "hidden" : ""}`}>
          <div className='flex w-full justify-between p-2 items-center'>
            <h2 className='text-xl font-bold pl-2 font-fuentecodigo'>Previsualizador</h2>
            <button
              onClick={() => cambiarPrevisualizacion()}
              className='text-xl font-bold' ><HiOutlineArrowsExpand className='hover:text-[#cf9dea]' /></button>
          </div>
          <div className={`h-full w-full bg-[#c8c0d8] min-h-[500px] px-2 font-fuenteresto  `}>
            <div id='modificarTodo' dangerouslySetInnerHTML={{ __html: texto }}></div>
          </div>
        </div>
        <div className="my-5">
        <h3 className="text-white">by <a href="https://www.linkedin.com/in/jeronimo-vega-42375b196/" target={"_blank"} className="text-[#4f1da4] font-bold hover:text-[#471576c1]">jerovega</a></h3>
        </div>
      </div>
    </div>
  )
}

export default App
