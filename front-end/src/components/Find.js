import RestaurantCard from './RestaurantCard'
import { useEffect, useState } from 'react'

function Find() {
  const [restaurants, setRestaurants] = useState([])
  const [filterByCondTop, setFilterByCondTop] = useState("")
  const [filterByRating, setFilterByRating] = useState("All")
  // create one Filter State

  useEffect(() => {
    fetch('/restaurants')
      .then(res => res.json())
      .then(setRestaurants)  
  }, [])

  function handleCondTopFilterChange(e) {
    setFilterByCondTop(e.target.value)
  }

  function restaurantsToDisplayByCondTop() {
    return restaurants.slice(0, -1).filter(rest => {
      if (filterByCondTop === "") {
        return true
      } else {
        return rest.all_condiments_toppings.toLowerCase().includes(filterByCondTop.toLowerCase())
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

  function handleRatingFilterChange(e) {
    setFilterByRating(e.target.value)
  }

  function restaurantsToDisplayRating() {
    return restaurants.slice(0, -1).filter(rest => {
      if (filterByRating === "All") {
        return true
      } else {
        return filterByRating == rest.avg_rating[0]
      }
    })
  }

  function eachRestaurantByRating() {
    return restaurantsToDisplayRating().map(restaurant =>
      <RestaurantCard 
        restaurant={restaurant}
        key={restaurant.id}
      />
      )
  }


  return(
    <div>
      <h1>Find</h1>
      <p>Use the search bar below to filter through hot dog restaurants</p>
      <label>Search by Condiments or Toppings: </label>
      <input type="text" onChange={handleCondTopFilterChange} />
      <label>Search by Rating : </label>
      <select onChange={handleRatingFilterChange}>
        <option value="All">All</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      {filterByRating === "All" ? eachRestaurantByCondTop() : eachRestaurantByRating()}
    </div>
  )
}

export default Find