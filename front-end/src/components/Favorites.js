import { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'

function Favorites({ currentUser}) {
  const [favorites, setFavorites] = useState([])
  console.log(`Before useEffect: ${currentUser.id}`)

  useEffect(() => {
    fetch(`/favorites/${currentUser.id}`)
      .then(res => res.json())
      .then(data => {
        setFavorites(data)
        console.log(`After useEffect: ${currentUser.id}`)
      })  
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