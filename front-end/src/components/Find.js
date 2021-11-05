import RestaurantCard from './RestaurantCard'
import { useEffect, useState } from 'react'

function Find() {
  const [restaurants, setRestaurants] = useState([])
  const [filterBy, setFilterBy] = useState("")

  useEffect(() => {
    fetch('/restaurants')
      .then(res => res.json())
      .then(setRestaurants)  
  }, [])

  function handleCondTopFilterChange(e) {
    setFilterBy(e.target.value)
  }

  function restaurantsToDisplayByCondTop() {
    return restaurants.slice(0, -1).filter(rest => {
      if (filterBy === "") {
        return true
      } else {
        return rest.all_condiments_toppings.toLowerCase().includes(filterBy.toLowerCase())
      }
    })
  }

  function eachRestaurantByCondTop() {
    return restaurantsToDisplayByCondTop().map(restaurant =>
      <RestaurantCard 
        restaurant={restaurant}
        key={restaurant.id}
      />
      )
  }

  // function handleRatingFilterChange(e) {
  //   setFilterBy(e.target.value)
  // }

  // function restaurantsToDisplayRating() {
  //   return restaurants.slice(0, -1).filter(rest => {
  //     if (filterBy === "") {
  //       return true
  //     } else {
  //       return rest.rating.includes(filterBy)
  //     }
  //   })
  // }

  // function eachRestaurantByRating() {
  //   return restaurantsToDisplayByRating().map(restaurant =>
  //     <RestaurantCard 
  //       restaurant={restaurant}
  //       key={restaurant.id}
  //     />
  //     )
  // }


  return(
    <div>
      <h1>Find</h1>
      <p>Use the search bar below to filter through hot dog restaurants</p>
      <label>Search by Condiments or Toppings: </label>
      <input type="text" onChange={handleCondTopFilterChange} />
      {eachRestaurantByCondTop()}
      
    </div>
  )
}

export default Find