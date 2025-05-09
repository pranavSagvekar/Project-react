import React, { useState } from 'react';
import MealCard from './MealCard';

const Mainpage = () => {
  const [search, setSearch] = useState('');

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const [data, setData] = useState(null);

  const myFun = async () => {
    try {
      const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const jsonData = await get.json();
      console.log(jsonData);
      setData(jsonData.meals);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData(null);
    }
  };

  return (
    <div className='Container'>
      <div className='searchBar'>
        <input
          type="text"
          placeholder='Enter Dishes'
          onChange={handleInput}
          value={search}
        />
        <button onClick={myFun}>Search</button>
      </div>
      <div>
        <MealCard detail={data} />
      </div>
    </div>
  );
};

export default Mainpage;