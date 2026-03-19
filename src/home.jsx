import { Link } from "react-router-dom";
export default function Home(){
    return (
        <>
        <h1 className="text-2xl font-bold mb-8">Ejercicios - React</h1>
        <ul>
            <li><Link className='hover:text-amber-600' to={"/eje1"}>Ejercicio 1</Link></li>
            <li><Link className='hover:text-amber-600' to={"/eje2"}>Ejercicio 2</Link></li>
            <li><Link className='hover:text-amber-600' to={"/eje3"}>Ejercicio 3</Link></li>
            <li><Link className='hover:text-amber-600' to={"/eje4"}>Ejercicio 4</Link></li>
            <li><Link className='hover:text-amber-600' to={"/eje5"}>Ejercicio 5</Link></li>
            <li><Link className='hover:text-amber-600' to={"/eje6"}>Ejercicio 6</Link></li>
            <li><Link className='hover:text-amber-600' to={"/eje7"}>Ejercicio 7</Link></li>
            <li><Link className='hover:text-amber-600' to={"/eje8"}>Ejercicio 8</Link></li>
            <li><Link className='hover:text-amber-600' to={"/eje9"}>Ejercicio 9</Link></li>
        </ul>
        </>
    )
}