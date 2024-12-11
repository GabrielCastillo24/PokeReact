import { useState } from "react";

const Pokemon =(props)=>{
    const [nivel, setNivel] = useState(1);

    const onSubirNivel = (event) =>{
        setNivel(n => n +1);
    } 
    const onBajarNivel = (event) =>{
        setNivel(n => n -1);
    } 

    const calcularHp =()=>{
        //TODO:Usar la formula real 
        return 65 + (nivel *3)
    }

    const calcularAtque =()=>{
        //TODO:Usar la formula real 
        return 130 + (nivel *2)
    }

    const calcularDefenza =()=>{
        //TODO:Usar la formula real 
        return 60 + (nivel *4)
    }

    return <div>
            <h1>Pokemon Favorito</h1>
            <h2>Nivel : {nivel}</h2>
            <button onClick={onSubirNivel}>Subir Nivel</button>
            <button onClick={onBajarNivel}>Bajar Nivel</button>
            <p>PH: {calcularHp()}</p>
            <p>Ataque: {calcularAtque()}</p>
            <p>Defenza: {calcularDefenza()}</p>
    </div>
}
export default Pokemon;