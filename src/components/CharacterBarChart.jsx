import React from "react";
import { BarChart, XAxis, YAxis, CartesianGrid,Bar, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from "react";
import { useEffect } from "react";

export default function CharacterBarChart({ avenger }) {
    const [character, setCharacter] = useState(null);
    const [dataPoints, setData] = useState(null);
    useEffect(() => {
        setCharacter(avenger)
    }, [avenger])
   

    
    useEffect(() => {
        const createBarChartData = (character) => {
        let availableComics = character?.comics.available
        let availableSeries = character?.series.available
        let availableStories = character?.stories.available
        return [{"amount": availableComics, name: "Comics"}, {"amount": availableSeries, name: "Series"}, {"amount": availableStories, name:"Stories"}]
        }

        const objects = createBarChartData(character); 
        setData(objects)
    },[character])

    const renderBarChart = (
        <BarChart width={600} height={300} data={dataPoints}>
    <XAxis dataKey="name"  />
            <YAxis />
            <CartesianGrid />
            <Tooltip />
    <Bar dataKey="amount" barSize={30} fill="#8884d8"
      />
  </BarChart>       
    )
    return (
        <div>
            {renderBarChart}
        </div>
    );
}