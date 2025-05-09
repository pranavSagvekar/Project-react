
import './App.css'
import Mainpage from './Component/Mainpage'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import MealInfo from './Component/MealInfo'
function App() {

  return (
    
    // <Mainpage />
    <Routes>
      <Route path='/' element= {<Mainpage />}/>
      <Route path='/:mealid' element= {<MealInfo/>}/>
    </Routes> 
  
  )
}

export default App
