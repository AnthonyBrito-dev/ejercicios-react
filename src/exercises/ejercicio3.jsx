import Encabezado from "../components/encabezado";
import { useState } from "react";

const CampoDeTexto = ()=>{
    const [listado, setListado] = useState([])
    const [item, setItem] = useState("")

    const inputChange = (e)=>{
        setItem(e.target.value)
    }

    const addText = ()=>{
        setListado([...listado, item])
    }

    const removeText = (index)=>{
        listado.splice(index, 1)
        setListado([...listado])
    }

    return (
        <>
        <input onChange={inputChange} className="min-w-100 max-w-200 border-2 border-black mr-4 p-2" type="text" id="2" placeholder="Escribe aqui.."/>
        <button onClick={addText} className="p-2 border-2 border-black hover:cursor-pointer">Agregar</button>
        <ul>
            {listado.map((lista, i)=>
                <li className="mb-2" key={i}>{lista} <button className="border-2 border-black p-1 hover:cursor-pointer" onClick={()=>removeText(i)}>X</button></li>
            )}
        </ul>
        </>
    )

}

export default function Ejercicio3() {
    const eje = 'Crea una página con un campo de texto, un botón que diga "Agregar", y una lista vacía debajo.'

    return (
        <div className="p-8">
            <Encabezado texto={eje} num={3}></Encabezado>
            <ul className="*:list-disc mb-8">
                <li className="ml-8">Cuando el usuario escriba un texto y haga clic en "Agregar", el texto debe añadirse como un nuevo elemento de la lista.</li>
                <li className="ml-8">Añade un botón al lado de cada elemento para eliminarlo de la lista.</li>
            </ul>
            <CampoDeTexto></CampoDeTexto>
        </div>
    );
}