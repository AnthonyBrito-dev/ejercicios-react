import Encabezado from "../components/encabezado";
import { useState } from "react";

function OperacionesMatematicas(){
    const [primero, setPrimero] = useState(0)
    const [segundo, setSegundo] = useState(0)
    const [result, setResult] = useState(0)

    const inputChangeFirst = (e)=>{setPrimero(e.target.value)}
    const inputChangeSecond = (e)=>{setSegundo(e.target.value)}

    const sumar = ()=>{
        if (isNaN(parseFloat(primero)) || isNaN(parseFloat(segundo))){
            setResult("Ingresa un numero valido")
        } else {
            setResult(parseFloat(primero) + parseFloat(segundo))
        }
    }
    
    const restar = ()=>{
        if (isNaN(parseFloat(primero)) || isNaN(parseFloat(segundo))){
            setResult("Ingresa un numero valido")
        } else {
            setResult(parseFloat(primero) - parseFloat(segundo))
        }
    }
    
    const multiplicar = ()=>{
        if (isNaN(parseFloat(primero)) || isNaN(parseFloat(segundo))){
            setResult("Ingresa un numero valido")
        } else {
            setResult(parseFloat(primero) * parseFloat(segundo))
        }
    }
    
    const dividir = ()=>{
        if (isNaN(parseFloat(primero)) || isNaN(parseFloat(segundo))){
            setResult("Ingresa un numero valido")
        } else if (parseFloat(segundo) === 0) {
            setResult('No puedes dividir por cero')
        } else {
            setResult(parseFloat(primero) / parseFloat(segundo))
        }
    }
    
    return (
        <>
        <section className="mb-4">
            <input onChange={inputChangeFirst} className="min-w-50 max-w-100 border-2 border-black mr-4 p-2" type="number" placeholder="Primer Nº" required/>
            <input onChange={inputChangeSecond} className="min-w-50 max-w-100 border-2 border-black p-2" type="number" placeholder="Segundo Nº" required/>
        </section>

        <section className="flex gap-3 mb-4">
            <button onClick={sumar} className="p-2 border-2 border-black hover:cursor-pointer ">+</button>
            <button onClick={restar} className="p-2 border-2 border-black hover:cursor-pointer ">-</button>
            <button onClick={multiplicar} className="p-2 border-2 border-black hover:cursor-pointer ">*</button>
            <button onClick={dividir} className="p-2 border-2 border-black hover:cursor-pointer ">/</button>
        </section>

        <p>{result}</p>
        </>
    )
}


export default function Ejercicio5() {
    const ejercicio5 = `Crea una página con dos campos de entrada de números y cuatro botones: "Sumar", "Restar", "Multiplicar", y "Dividir". 
    Al hacer clic en cualquiera de los botones, debe mostrarse el resultado de la operación en un área de texto o debajo de los botones. 
    Asegúrate de validar los datos para evitar errores (como división por cero o entradas vacías).`
    
    return (
        <div className="p-8">
        <Encabezado texto={ejercicio5} num={5}></Encabezado>
        <OperacionesMatematicas></OperacionesMatematicas>
        </div>
    );
}