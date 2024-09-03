// MealList.js
import { useState, useEffect } from "react";
import Card from "../components/Card";

export default function MealList() {
  const [meals, setMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Add searchQuery state variable
  const [loading, setLoading] = useState(false); // Add loading state variable

  const fetchMeals = async (searchQuery) => {
    setLoading(true); // Set loading to true
    let apiUrl = "";
    if (searchQuery) {
      apiUrl = `https://themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`; // Search API URL
    } else if (searchQuery === ""){
      apiUrl = "https://themealdb.com/api/json/v1/1/categories.php"; // Default API URL
    }
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (searchQuery) {
        setMeals(data.meals); // Set meals state with search results
      } else {
        setMeals(data.categories); // Set meals state with categories
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Set loading to false
    }
  };
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Update searchQuery state variable
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    fetchMeals(searchQuery.trim()); // Call fetchMeals function with trimmed searchQuery
  };

  useEffect(() => {
    fetchMeals(""); // Call fetchMeals function on mount
  }, []);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <form onSubmit={handleSubmit} class="flex items-center max-w-sm mx-auto">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
            </svg>
        </div>
        <input type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search for a meal"  id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
    </div>
    <button type={handleSubmit} class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search</span>
    </button>
</form>
        
        {loading ? (
          <div className="flex justify-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="flex justify-start flex-wrap other:justify-evenly">
            {meals?.map(meal => (
              <Card
                key={meal.idCategory || meal.idMeal}
                meal={meal}
                imageUrl={meal.strMealThumb} // Pass meal image URL as a prop
                searchQuery={searchQuery} // Pass searchQuery state variable as a prop
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}