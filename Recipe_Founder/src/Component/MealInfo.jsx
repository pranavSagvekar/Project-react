import React from 'react'
import { useParams } from 'react-router-dom'

function MealInfo() {
    const {mealid} = useParams();
    console.log(mealid);
    const getinfo = async ()=>{
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsonData  = get.json();
        console.log(jsonData);
    }

return (
    <div>MealInfo</div>
)
}

export default MealInfo