import Encabezado from "../components/encabezado";
import {useState} from "react";

//Crear el formato del temporizador
let seg = 0
let min = 0
let hr = 0

function Temporizador(){

    const [tiempo, setTiempo] = useState('00:00:00')
    
    //Funcion para dar formato al tiempo
    const shownumbers = (num)=>{
        let numeroFormateado = ``

        if (num < 10){
            numeroFormateado = `0${num}`
        } else {
            numeroFormateado = `${num}`
        }

        return numeroFormateado
    }
    
    //Crear componente iniciar
    const iniciar = ()=>{
        let t = setInterval(() => { 
            seg += 1
            //Se añade la funcion de formateo a cada variable
            setTiempo(`${shownumbers(hr)}:${shownumbers(min)}:${shownumbers(seg)}`)

            if (seg == 59){ //Condicion para agregar minutos
                min += 1
                seg = -1 
            }
    
            if (min > 59){ //Condicion para agregar horas 
                min = 0
                hr += 1
            }
            
            const botonParar = document.getElementById("parar")
            botonParar.addEventListener('click', ()=>{
                clearInterval(t)
            })

            const botonReiniciar = document.getElementById("reiniciar")
            botonReiniciar.addEventListener("click", ()=>{ //Usamos el boton para reiniciar y colocar las variables en cero
                seg = 0
                min = 0
                hr = 0
                clearInterval(t)
                setTiempo('00:00:00')
            })
            
        }, 1000)
    }


    return (
        <>
        <time className="block mb-4" dateTime="HH:MM:SS">{tiempo}</time>
        <button onClick={iniciar} className="p-2 border-2 border-black rounded-2xl hover:cursor-pointer">Iniciar</button>
        <button id="parar" className="p-2 border-2 border-black rounded-2xl hover:cursor-pointer">Pausar</button>
        <button id='reiniciar' className="p-2 border-2 border-black rounded-2xl hover:cursor-pointer">Reiniciar</button>
        </>
    )
}

export default function Ejercicio6() {
    const ejercicio6 = `Crea una página con un temporizador que comience en 00:00:00. Incluye tres botones: “Iniciar”, “Pausar” y “Reiniciar”. 
    Al hacer clic en “Iniciar”, el temporizador debe comenzar a contar los segundos, minutos y horas. 
    “Pausar” detiene el conteo pero mantiene el tiempo actual. 
    “Reiniciar” pone el temporizador en 00:00:00`
    
    return (
        <div className="p-8">
        <Encabezado texto={ejercicio6} num={6}></Encabezado>
        <Temporizador></Temporizador>
        </div>
    );
}