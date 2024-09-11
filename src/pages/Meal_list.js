import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import MealDetail from '../components/MealDetail';
import Banner from '../components/Banner'; // new component
import Footer from '../components/Footer';
import Docs from './Docs';
import TestemonyCard from '../components/TestemonyCard'
import indo from '../images/indomixicon.svg'
import 'flowbite'

const MealList = () => {
  const [categories, setCategories] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');

  const [meals, setMeals] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [defaultImages, setDefaultImages] = useState([]);

  const [selectedMeal, setSelectedMeal] = useState(null); // new state

  const [recipe, setRecipe] = useState(null); // new state


  useEffect(() => {

    async function fetchCategories() {

      try {

        const response = await fetch('https://themealdb.com/api/json/v1/1/categories.php');

        const data = await response.json();

        setCategories(data.categories);

      } catch (error) {

        console.error(error);

      }

    }

    fetchCategories();


    async function fetchDefaultImages() {

      try {

        const response = await fetch('https://themealdb.com/api/json/v1/1/filter.php?c=Beef');

        const data = await response.json();

        setDefaultImages(data.meals);

      } catch (error) {

        console.error(error);

      }

    }

    fetchDefaultImages();

  }, []);


  const handleSearch = (event) => {

    event.preventDefault();

    setSearchQuery(event.target.value);

  };


  const handleSubmit = async (event) => {

    event.preventDefault();

    try {

      const response = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);

      const data = await response.json();

      if (data.meals == null) {

        alert(`Oops there is no ${searchQuery} but you can search for your fav dish`) 

        searchQuery = setSearchQuery('');

      }

      setMeals(data.meals);

      setSearchQuery('');

    } catch (error) {

      console.error(error);

    }

  };


  const handleCategoryClick = async (category) => {

    setSelectedCategory(category);  

    try {

      const response = await fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`);

      const data = await response.json();

      setMeals(data.meals);

    } catch (error) {

      console.error(error);

    }

  };


  const handleCardClick = async (meal) => {

    setSelectedMeal(meal);

    try {

      const response = await fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`);

      const data = await response.json();

      setRecipe(data.meals[0]);

    } catch (error) {

      console.error(error);

    }

  };
  
  return (
    <>
     <nav className=" border-gray-200 dark:bg-gray-900" style={{backgroundColor:'#FFFF00'}}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0">
    
      
      <div >
  <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
      </button>
      <div className="relative hidden md:block">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
          <span className="sr-only">Search icon</span>
        </div>
        <input value={searchQuery}
            onChange={handleSearch}
            placeholder="Search for a meal"
    
            type="search" id="default-search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            
      </div>
      <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
      </form>
  </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <div className="relative mt-3 md:hidden">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input value={searchQuery}
       onChange={handleSearch}
       placeholder="Search for a meal"
       type="search" id="default-search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <ul style={{backgroundColor:'#FFFF00', textShadow:'1px solid #FF9800'}} className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-black-700">
        <li>
          <a href="#" className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        <li>
           <a href="#" className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Docs</a>
        </li>
      </ul>
      <div className="flex md:order-2">
        <Banner/>
      </div>
    </div>
  </div>
</nav>

<div  style={{display:'flex', flexDirection:'row' }} className="max-w-xxl  border border-gray-200 rounded-lg shadow  ">
 
  <div className="flex flex-wrap -mx-4">
    <div className=" md:w-1/2 xl:w-1/3 px-4 mb-4" >
    <ul className="list-none mb-1 flex items-start justify-evenly py-1 md:py-1 flex-wrap">
        {categories.map((category) => (
          <li key={category.idCategory} onClick={() => handleCategoryClick(category)}>
            <button
              type="button"
              style={{Background: '#F7F7F7'}}
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium  focus:outline-none bg-white rounded-full  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              {category.strCategory}
            </button>
          </li>
        ))}
      </ul>
    </div>
    <div style={{
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '80vh',
  margin: '0 auto',
  

  
}}>
  
  {/* Left side */}
  <div  className="card-res">
    {meals.length > 0 ? (
      <div style={{
        overflowY: 'scroll',
        height: '80%', 
        backgroundColor: 'transparent',
      }}>
        <div >
          {meals.map((meal) => (
            <Card
              key={meal.idMeal}
              meal={meal}
              imageUrl={meal.strMealThumb}
              searchQuery={searchQuery}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    ) : (
      <div style={{
        backgroundColor: 'transparent',
        overflowY: 'scroll',
        height: '80%',
      }}>
        {defaultImages.map((meal) => (
          <Card
            key={meal.idMeal}
            meal={meal}
            imageUrl={meal.strMealThumb}
            onClick={handleCardClick}
          />
        ))}
      </div>
    )}
  </div>

  <div style={{
    height: '100vh', 
  }}>
    {selectedMeal ? (
      <MealDetail meal={selectedMeal} recipe={recipe} />
    ) : (
      <div className="wrap-card card-animate-card card-pop-card">

          <div className="overlay-card">

            <div className="overlay-content-card card-animate-card slide-left-card delay-2-card">

              <h1 className="h1-card card-animate-card slide-left-card card-pop-card delay-4-card"></h1>

              <p className="p-card card-animate-card slide-left-card card-pop-card delay-5-card" style={{color: 'white', marginBottom: '2.5rem'}}>: <em></em></p>

            </div>

            <div className="image-content-card card-animate-card slide-card delay-5-card" style={{backgroundImage: `url(https://media.gettyimages.com/id/1363638825/photo/vegan-plant-based-asian-food-recipes-with-rice-and-brown-rice-as.jpg?s=612x612&w=gi&k=20&c=QuqQ2wgvQazlitFvRhMuR2_nWZEf5CB3xa3FS4R0ffM=)`}}></div>

            <div className="dots-card card-animate-card">

              <div className="dot-card card-animate-card slide-up-card delay-6-card"></div>

              <div className="dot-card card-animate-card slide-up-card delay-7-card"></div>

              <div className="dot-card card-animate-card slide-up-card delay-8-card"></div>

            </div>

          </div>

          <div className="text-card">

            <p className='p-card'><img className="inset-card" src='https://media.gettyimages.com/id/1363638825/photo/vegan-plant-based-asian-food-recipes-with-rice-and-brown-rice-as.jpg?s=612x612&w=gi&k=20&c=QuqQ2wgvQazlitFvRhMuR2_nWZEf5CB3xa3FS4R0ffM=' alt="" /></p>

                <ul>

                 <li>Choose</li>

                 <li>Order</li>

                 <li>Place to serve</li>

                 <li>Eat</li>

                </ul>

             

                <p>none

              <em>Healthy foods are those that provide you with the nutrients you need to sustain your body's well-being and retain energy. Water, carbohydrates, fat, protein, vitamins, and minerals are the key nutrients that make up a healthy, balanced diet.</em>Instructions: </p>

          

          </div>

        </div>
    )}
  </div>
</div>  

  </div>

</div>
<Footer/>
</>
  );
};

export default MealList;