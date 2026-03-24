import { useState } from "react";
import Encabezado from "../components/encabezado";

export default function Ejercicio2() {
    const ejercicio2 = `Crea una página con un botón que diga "Contar clics" y un 
    texto inicial que muestre "Clics: 0". Cada vez que se haga clic en el botón, el 
    texto debe actualizarse para mostrar el número total de clics realizados.`
    const [count, setCount] = useState(0)

    return (
        <div className="p-8">
            <Encabezado texto={ejercicio2} num={2}></Encabezado>
            <p className="mb-4">Clics: {count}</p>
            <button className="pb-1 pt-1 pl-3 pr-3 rounded-4xl border-2 border-black hover:cursor-pointer" onClick={()=>setCount(count + 1)}>Contar Clics</button>
        </div>
    );
}