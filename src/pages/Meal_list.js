import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import MealDetail from '../components/MealDetail';
import Banner from '../components/Banner'; // new component
import indo from '../images/indomixicon.svg'

const MealList = () => {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [meals, setMeals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [defaultImages, setDefaultImages] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null); // new state
  


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
      alert(`Oops invalid ${searchQuery}`) 
      searchQuery = setSearchQuery('');
    }
      setMeals(data.meals);
      setSearchQuery('');
       // clear search query
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
  const handleCardClick = (meal) => {
    setSelectedMeal(meal);
  };
  return (
    <>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center flex-row-reverse justify-around   mx-auto p-4">  
      
       
        <div class="flex md:order-2">
         <form onSubmit={handleSubmit} class="max-w-md mx-auto">
          <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span class="sr-only">Search</span>
          </button>
          <div class="relative hidden md:block">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span class="sr-only">Search icon</span>
            </div>
            <input value={searchQuery}
                onChange={handleSearch}
                placeholder="Search for a meal"
        
                type="search" id="default-search" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                
          </div>
          <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          </form>
          <div>
          <Banner />
          <div/>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
          <div class="relative mt-3 md:hidden">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input value={searchQuery}
              onChange={handleSearch}
              placeholder="Search for a meal"
              type="search"  id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
        </div>
      </div>
      </div>
    </nav>
    <div class="" style={{display:'flex', flexDirection:'row'}}>
     
      <div class="flex flex-wrap -mx-4">
        <div class=" md:w-1/2 xl:w-1/3 px-4 mb-4">
          
          <ul class="list-none mb-4 flex items-center justify-center py-4 md:py-8 flex-wrap">
            {categories.map((category) => (
              <li key={category.idCategory} onClick={() => handleCategoryClick(category)}>
                <button
                  type="button"
                  class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  {category.strCategory}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div class="max-w-none format lg:format-lg format-red">
          <div style={{display:'grid',gridTemplateColumns:'1fr 2fr'}}>
            {meals.length > 0 ? (
             <div>
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
              <div>
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
            <div>
             {selectedMeal ? (
              <MealDetail meal={selectedMeal} />         
            ) : (       
              <div>          
          {selectedMeal ? (

<MealDetail meal={selectedMeal} />

) : (

<img src={indo} alt="Default Image" class="h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none" />

)}
          
              </div>
          
            )}
            </div>
          </div>

        </div>

      </div>

    </div>
    </>
  );
};

export default MealList;