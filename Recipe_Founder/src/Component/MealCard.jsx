import React from 'react';
import { NavLink } from 'react-router-dom';
function MealCard({ detail }) {
  return(
    <div className='meals'>
        {!detail ? "": 
        detail.map((currItem)=>{
            return(
                <div className='mealImg'>   
                    <img src={currItem.strMealThumb} alt="" />
                    <p>
                        {currItem.strMeal} 
                    </p>
                    <NavLink to= {`/${currItem.idMeal}`}>
                    <button>Recipe</button>
                    </NavLink>
                </div>
            )
        })
        }
    </div>
  )
}

export default MealCard;