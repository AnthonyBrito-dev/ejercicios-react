import Encabezado from "../components/encabezado";

export default function Ejercicio6() {
    const ejercicio6 = `Crea una página con un temporizador que comience en 00:00:00. Incluye tres botones: “Iniciar”, “Pausar” y “Reiniciar”. 
    Al hacer clic en “Iniciar”, el temporizador debe comenzar a contar los segundos, minutos y horas. 
    “Pausar” detiene el conteo pero mantiene el tiempo actual. 
    “Reiniciar” pone el temporizador en 00:00:00`
    
    return (
        <>
        <Encabezado texto={ejercicio6} num={6}></Encabezado>
        </>
    );
}