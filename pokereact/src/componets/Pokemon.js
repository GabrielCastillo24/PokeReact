import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Pokemon = (props) => {
    const [nivel, setNivel] = useState(1);
    const [nombre, setNombre] = useState("");
    const [imgFrontUrl, setImgFrontUrl] = useState();
    const [imgBackUrl, setImgBackUrl] = useState();
    const [baseHP, setBaseHP] = useState();
    const [baseAttack, setBaseAttack] = useState();
    const [baseDefense, setBaseDefense] = useState();

    const params = useParams();


    const ID = params.id; //como prueba pongo uno y luego lo configuro

    useEffect(() =>{
        //la sintaxis más moderna es async-await
        axios.get("https://pokeapi.co/api/v2/pokemon/" + ID)
        .then(response => {
        setNombre(response.data.name);
        setImgFrontUrl(response.data.sprites.front_default);
        setImgBackUrl(response.data.sprites.back_default);
        setBaseHP(getStat("hp", response.data.stats));
        setBaseAttack(getStat("attack", response.data.stats));
        setBaseDefense(getStat("defense", response.data.stats));
        })
}, []);
    //metodo 
    function getStat(nombreStat, arrayStats){
        const filteredArray = arrayStats.filter(s => s.stat.name === nombreStat);
        if (filteredArray.length === 0){
            return -1
        }
        return filteredArray[0].base_stat;
    }



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