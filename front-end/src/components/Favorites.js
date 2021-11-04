import { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'

function Favorites({ currentUser }) {
  const [favorites, setFavorites] = useState([])
  
  useEffect(() => {
    fetch(`/favorites/${currentUser.id}`)
      .then(res => res.json())
      .then(setFavorites)  
  }, [currentUser.id])
  
  const eachRestaurant = favorites.map(restaurant =>
      <RestaurantCard 
        restaurant={restaurant.restaurant}
        key={restaurant.restaurant.id}
      />
    )

  return(
    <div>
      <h1>My Favorite Restaurants</h1>
      {eachRestaurant}
    </div>
  )
}

export default Favorites