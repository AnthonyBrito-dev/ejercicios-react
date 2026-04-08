import Encabezado from "../components/encabezado";
import { useState, useEffect } from "react";

const todoList = [
    {id:"1", tarea:'Hacer las compras', check:false}, 
    {id:"2", tarea:'Ir al trabajo', check:false}, 
    {id:"3", tarea:'Cocinar el almuerzo', check:false},
]

function Tareas() {
    const [lista, setLista] = useState(() => {
        const guardado = localStorage.getItem('segundasTareas');
        if (guardado) {
            return JSON.parse(guardado);
        }
        return todoList;
    });

    const cambiarCheck = (id) => {
        const nuevaLista = lista.map(tarea => {
            if (tarea.id === id) {
                return { ...tarea, check: !tarea.check };
            }
            return tarea;
        });

        setLista(nuevaLista);
    };

    useEffect(()=>{
        localStorage.setItem('segundasTareas', JSON.stringify(lista))
        //localStorage.getItem("segundasTareas")
    },[lista])

    return (
    <>
    <p className="text-2xl mb-4">Lista de Tareas</p>
    <BajarTareas listaTareas={lista} funcionCambiarCheck={cambiarCheck}/>
    <button className="p-2 border-2 border-black hover:cursor-pointer rounded-lg">Limpiar</button>
    </>
    )
}

function BajarTareas({listaTareas, funcionCambiarCheck}) {
    
    return (
        <div>
            <ul className="mb-4">{
                listaTareas.map(tarea => {
                    return <li key={tarea.id}>{tarea.tarea} <input onChange={()=>funcionCambiarCheck(tarea.id)} type="checkbox" checked={tarea.check}/></li>
                })
            }</ul>
        </div>
    ) 
}


export default function Ejercicio9() {
    const ejercicio9 = `Crea una aplicación de lista de tareas.
    Cada tarea debe incluir un texto y un checkbox para marcarla como completada.
    Las tareas se deben guardar en localStorage para que persistan incluso si la página se recarga.
    Debe incluir un botón para limpiar todas las tareas completadas y actualizar el localStorage.`
    
    return (
        <div className="p-8">
        <Encabezado texto={ejercicio9} num={9}></Encabezado>
        <Tareas></Tareas>
        </div>
    );
}