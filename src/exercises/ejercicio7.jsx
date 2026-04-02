import Encabezado from "../components/encabezado";
import { useState } from "react";

function numeroAzar() {
    let numAzar = String.fromCharCode(Math.floor(Math.random() * (58 - 48 + 1)) + 48)
    return numAzar
}

function caracterAzar() {
    let caracter = String.fromCharCode(Math.floor(Math.random() * (45 - 33 + 1)) + 33)
    return caracter
}

function letraAzar() {
    let letraMayuscula = String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65)
    let letraMinuscula = String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97)
    let listaLetras = [letraMayuscula, letraMinuscula]
    let letraSeleccionada = listaLetras[Math.floor(Math.random() * 2) ]
    return letraSeleccionada
}

function cualquierCaracterer(letter, number, character) {
    const listarandom = [letter, number, character]
    let algunCaracter = listarandom[Math.floor(Math.random() * 3)]
    return algunCaracter
}

//Componente generador de contraseña
function GeneradorContraseñas(){
    const [numero, setNumero] = useState(0)
    let listaCaracteres = []
    let number = 0

    //Cambia el valor del input
    const inputChange = (e)=>{
        number = e.target.value
    }

    //Cambia el estado de numero por el valor de input
    const changeResult = ()=>{
        setNumero(number)
    }

    if (numero <= 3){
        return (
            <>
            <input onChange={inputChange} type="number" className="mr-3 p-2 border-2 border-black" placeholder="Numero"/>
            <button onClick={changeResult} className="p-2 border-2 border- black hover:cursor-pointer mb-4">Generar Contraseña</button>
            <p>Ingresa un numero mayor o igula a 4</p>
            </>
        )

    } else {
        //Esta sera la lista inicial de tres elementos al azar para completarluego con el bucle
        listaCaracteres.push(letraAzar(), numeroAzar(), caracterAzar())
        
        //usamos un bucle for con la cantidad de caracteres
        for (let caracter = 0; caracter < numero-3; caracter++) {
            listaCaracteres.push(cualquierCaracterer(letraAzar(), caracterAzar(), numeroAzar()))
        }
        
        //convertimos todo a un string 
        let listaConcatenada = listaCaracteres.join("")
        
        //borramos la lista por si se quiere generar otra diferente
        listaCaracteres = []

        return (
            <>
            <input onChange={inputChange} type="number" className="mr-3 p-2 border-2 border-black" placeholder="Numero"/>
            <button onClick={changeResult} className="p-2 border-2 border- black hover:cursor-pointer mb-4">Generar Contraseña</button>
            <p>Contraseña: {listaConcatenada}</p>
            </>
        )
    }
}

export default function Ejercicio7() {
    const ejercicio7 = `Crea una página con un campo de entrada para especificar la longitud de una contraseña y un botón que diga 
    “Generar contraseña”. 
    Al hacer clic en el botón, se debe mostrar una contraseña generada aleatoriamente usando letras, números y caracteres especiales. 
    Si la longitud es menor a 4 o el campo está vacío, muestra un mensaje de error indicando que la longitud debe ser mayor o igual a 4.`
    
    return (
        <div className="p-8">
        <Encabezado texto={ejercicio7} num={7}></Encabezado>
        <GeneradorContraseñas></GeneradorContraseñas>
        </div>
    );
}