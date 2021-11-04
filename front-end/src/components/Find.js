import { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'

function Find() {
  const [restaurants, setRestaurants] = useState([])
  const [filterBy, setFilterBy] = useState("")

  useEffect(() => {
    fetch('/restaurants')
      .then(res => res.json())
      .then(setRestaurants)  
  }, [])

  function handleFilterChange(e) {
    setFilterBy(e.target.value)
  }

  function restaurantsToDisplay() {
    return restaurants.slice(0, -1).filter(rest => {
      if (filterBy === "") {
        return true
      } else {
        return rest.name === filterBy
      }
    })
  }

  function eachRestaurant() {
    return restaurantsToDisplay().map(restaurant =>
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
      <label>Search by Name: </label>
      <input type="text" onChange={handleFilterChange} />
      {eachRestaurant()}
    </div>
  )
}

export default Find