import Header from './components/Header';
import Meal_list from './pages/Meal_list';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (

    <BrowserRouter>
     <Header/> 
     <Meal_list />
    </BrowserRouter>

  );

}


export default App;