import React, { useEffect } from "react";
import CharacterCard from "../components/CharacterCard";
import CharacterBarChart from "../components/CharacterBarChart";
import CharacterPieChart from "../components/CharacterPieChart";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Box } from "@mui/material";


const API_KEY = import.meta.env.VITE_APP_API_KEY;

export default function DetailView() {
    const params = useParams();
    const [avenger, setAvenger] = useState(null);

    useEffect(() => {
         const getAvenger =  async (id) => {
        const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${API_KEY}`)
        const json = await response.json()
             setAvenger(json.data.results[0])
         }
        getAvenger(params.id).catch(console.error)
    }, [params])


    
    return (
        <div> 
            <CharacterCard avenger={avenger} />
            <Box sx={{display:"flex", alignItems: "center", justifyContent: "center"}}>
            <CharacterBarChart avenger={avenger} />
            <CharacterPieChart avenger={avenger} />
            </Box>
            
        </div>
    )
    
}