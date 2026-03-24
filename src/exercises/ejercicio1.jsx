import Encabezado from "../components/encabezado";

let bgcc = ()=>{
    let color = document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    return color
}

function ButtonChangeColor(){  
    return <button onClick={bgcc} className="p-5 rounded-2xl cursor-pointer border-black border-2 hover:border-gray-400 hover:border-2 hover:bg-black hover:text-amber-50">Cambiar Color</button>
}

export default function Ejercicio1() {
    const eltexto = `Crea una página web con un botón que diga 'Cambiar color'. 
    Cada vez que el usuario haga clic en el botón, el color de fondo de la página 
    debe cambiar a un color aleatorio`
    
    return (
        <div id="main" className="p-8">
        <Encabezado texto={eltexto} num={1}></Encabezado>

        <ButtonChangeColor></ButtonChangeColor>
        </div>
    );
}