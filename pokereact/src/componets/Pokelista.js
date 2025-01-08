import axios from "axios";
import { useEffect, useState } from "react";
import {Link , useNavigate} from "react-router-dom"
const Pokelista = (props) =>{
    const[pokemons, setPokemons]= useState([]);
    const navigate = useNavigate();
    useEffect(() =>{
        axios.get("https://pokeapi.co/api/v2/pokemon").then(response =>{
            setPokemons(response.data.results);
        })
    },[]);
    const funcionNavegar= (p) =>{
        navigate(`/pokemon/${p}`)
    }
 
    return <div>
            <h1>Lista :</h1>
            {pokemons.map(p => {
                return<>
                <p>Este pokemon es {p.name}</p>
                <div onClick={()=>{navigate("/pokemon/"+p.name)}}>navegar</div>
                <Link to={"/pokemon/"+p.name}>Navegar</Link>
                </>
}
)}
    </div>
}

export default Pokelista;