import { Link } from "react-router-dom"

function RestaurantCard({ restaurant }) {

  return(
    <div>
      <img src={restaurant.image} alt="restaurant"/>
      <h3>{restaurant.name} {"★".repeat(restaurant.avg_rating)} {"☆".repeat(5 - restaurant.avg_rating)}</h3>
      <Link to={`/restaurant/${restaurant.id}`}><button>Restaurant Details</button></ Link>

    </div>
  )
}

export default RestaurantCard