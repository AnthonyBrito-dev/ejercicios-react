import { Link } from "react-router-dom";

function Volver() {
    //const colorBody = document.body.style.backgroundColor = 'white'
    return (
        <Link className="hover:text-amber-700" to={"/"}>Volver al inicio</Link>
    )
}

export default function Encabezado({texto, num}){
    return (
        <>
        <div className="mb-8">
            <Volver></Volver>
            <h2 className="text-2xl">Ejercicio {num}</h2>
            <p>{texto}</p>
        </div>
        </>
    )
}