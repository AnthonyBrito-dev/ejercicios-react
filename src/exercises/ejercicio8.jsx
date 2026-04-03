import Encabezado from "../components/encabezado";
import { useState } from "react";

//Componente textarea que retornara el onchange
function CampoDeTexto(){
    const [char, setChar] = useState(0)
    const [palabras, setPalabra] = useState(0)
    
    const textareaChange = (e)=>{
        let texto = e.target.value
        let listaPalabras = texto.split(' ')
        let listaPalabrasModificada = []
        
        listaPalabras.filter((p)=>{
            if (p !== ''){
                listaPalabrasModificada.push(p)
                setPalabra(listaPalabrasModificada.length)
            }
        })
        texto == '' && setPalabra(0)

        let listaCaracteres = texto.split('')
        let listaCaracteresModificada = []
        
        listaCaracteres.filter((p)=>{
            if (p !== ' ' && p !== '\n'){
                listaCaracteresModificada.push(p)
                setChar(listaCaracteresModificada.length)
            }
        })
        texto == '' && setChar(0)

    }

    return (
        <>
        <textarea onChange={textareaChange} name="campo" id="texto" placeholder="Escribe aqui.." className="border-2 border-black p-2 w-full"></textarea>
        <p>Caracteres: {char}</p>
        <p>Palabras: {palabras}</p>
        </>
    )
}

export default function Ejercicio8() {
    const ejercicio8 = `Crea una página con un campo de texto donde el usuario pueda escribir un párrafo. 
    Muestra en tiempo real el número de caracteres y palabras ingresados debajo del campo. 
    Palabras deben ser separadas por espacios, y los caracteres no deben incluir espacios ni saltos de línea.`
    
    return (
        <div className="p-8">
        <Encabezado texto={ejercicio8} num={8}></Encabezado>
        <CampoDeTexto />
        </div>
    );
}