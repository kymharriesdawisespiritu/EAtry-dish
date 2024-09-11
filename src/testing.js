import React, { Component } from 'react'

export default class testing extends Component {
  render() {
    return (
         <>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0">
      
      <div >
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
           type="search" id="default-search" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div class="flex md:order-2">
            <Banner/>
          </div>
        </div>
      </div>
    </nav>
    
    <div className="" style={{display:'flex', flexDirection:'row'}}>
     
      <div className="flex flex-wrap -mx-4">
        <div className=" md:w-1/2 xl:w-1/3 px-4 mb-4" >
        <ul class="list-none mb-1 flex items-start justify-evenly py-1 md:py-1 flex-wrap">
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
        <div className="">
          <div style={{
display: 'grid',
gridTemplateColumns: '1fr 2fr 1fr',
gridGap: '10px',
width: '100%',
height: '100vh',
margin: '0 auto'

}}>
            {meals.length > 0 ? (
             <div style={{

              overflowY: 'auto',
          
              backgroundColor: 'red'
          
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
              <div style={{ backgroundColor: 'green' }}>
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

<img src={indo} alt="Default Image" className="h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none" />

)}
          
              </div>
          
            )}
            </div>
           
          </div>

        </div>

      </div>

    </div>
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
  height: '100vh',
  margin: '0 auto'
}}>
  
  {/* Left side */}
  <div style={{
    width: '33.33%', // Add this line
    height: '100vh', // Update this line
    backgroundColor: 'transparent'
  }}>
    {meals.length > 0 ? (
      <div style={{
        overflowY: 'scroll',
        height: '50%', // Update this line
        backgroundColor: 'transparent'
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
        height: '50%', // Update this line
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

  {/* Right side */}
  <div style={{
    width: '66.66%', // Add this line
    height: '100vh', // Update this line
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
  {/*  */}
  <div  style={{display:'flex', flexDirection:'row' }}>
 
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
  height: '100vh',
  margin: '0 auto'
}}>
  
  {/* Left side */}
  <div style={{
    width: '33.33%', // Add this line
    height: '100vh', // Update this line
    backgroundColor: 'transparent'
  }}>
    {meals.length > 0 ? (
      <div style={{
        overflowY: 'scroll',
        height: '80%', // Update this line
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
        height: '80%', // Update this line
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

  {/* Right side */}
  <div style={{
    width: '66.66%', // Add this line
    height: '100vh', // Update this line
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
  {/*  */}
  <div className="bg-orange-500 py-4">
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold">Sign In</h2>
        <form onSubmit={handleSignIn}>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
      </>
    )
  }
}
