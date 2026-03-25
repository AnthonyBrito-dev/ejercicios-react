import Encabezado from "../components/encabezado";
import { useState } from "react";

//Lista de elementos 
const comidas = ['pizza', 'sushi', 'arepa', 'paella', 'hamburguesa', 'hotdog', ]

function VerComidas(){
    const [busqueda, setBusqueda] = useState('')
    
    //ver el estado del campo de texto
    const inputChange = (e)=>{
        setBusqueda(e.target.value)
    }

    return (
        <>
        <input onChange={inputChange} className="min-w-100 max-w-200 border-2 border-black mb-4 p-2" type="text" id="2" placeholder="Buscar.."/>
        
        <ul>
            {comidas.map((comida, i)=>{
                if (comida.includes(busqueda.toLowerCase())){  //buscar coincidencias entre letras y mostrar en pantalla
                    return <li key={i} className="mb-1 ml-5 list-disc">{comida}</li>
                }
            })}
        </ul>
        </>
    )
}

export default function Ejercicio4() {
    const ejercicio4 = `Crea una página con un campo de texto y una lista predefinida de elementos.
    Mientras el usuario escribe en el campo, la lista debe actualizarse en tiempo real para
    mostrar solo los elementos que contienen el texto escrito.
    Ejemplo: Si la lista contiene ["Perro", "Gato", "Pez"] y el usuario escribe "Ga", solo "Gato" debe
    quedar visible.`
    
    return (
        <div className="p-8">
        <Encabezado texto={ejercicio4} num={4}></Encabezado>
        <VerComidas></VerComidas>
        </div>
    );
}