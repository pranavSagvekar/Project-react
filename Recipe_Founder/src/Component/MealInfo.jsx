import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MealInfo() {
  const { mealid } = useParams();
  console.log(mealid);
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getinfo = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        console.log(jsonData);
        setInfo(jsonData.meals ? jsonData.meals[0] : null);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (mealid) {
      getinfo();
    }
  }, [mealid]);

  if (loading) {
    return <div>Loading meal details...</div>;
  }

  if (error) {
    return <div>Error loading meal details: {error}</div>;
  }

  return (
    <div className='mealInfo'>
     <img src={info.strMealThumb} alt="" />
     <div className='info'>
        <h1>Recipe Detail</h1>
        <button>{info.strMeal}</button>
        <h3>Instruction's</h3>
        <p>{info.strInstructions}</p>
     </div>
    </div>
  );
}

export default MealInfo;