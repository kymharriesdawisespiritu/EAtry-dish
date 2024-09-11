import Meal_list from './pages/Meal_list';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInPage from "../src/components/SigninPage";

function App() {
  return (

    <BrowserRouter>
    
    
     <Routes>

        <Route path="/" element={<Meal_list />} />

        <Route path="/signin" element={<SignInPage />} />

      </Routes>
    </BrowserRouter>

  );

}


export default App;