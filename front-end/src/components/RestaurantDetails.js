import HotDogs from "./HotDogs"
import { useState, useEffect } from "react"
import { useParams } from "react-router"

function RestaurantDetails({ currentUser }) {
  const [restaurant, setRestaurant] = useState([])
  const [commentsArr, setCommentsArr] = useState([])
  const [hotDogsArr, setHotDogsArr] = useState([])
  const [comments, setComments] = useState([])
  const [favorites, setFavorites] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`/restaurants/${id}`)
    .then(res => res.json())
    .then(rest => {
      setRestaurant(rest)
      setCommentsArr(rest.comments)
      setHotDogsArr(rest.hot_dogs)
    })
  }, [id])

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment])
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault()
    fetch('/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        comment: e.target.comment.value,
        restaurant_id: restaurant.id,
        user_id: currentUser.id
      })
    })
    .then(res => res.json())
    .then(handleAddComment)
    e.target.reset()
  }

  const handleAddFav = (newFav) => {
    setFavorites([...favorites, newFav])
  }

  const handleFavorite = () => {
    fetch('/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        favorite: true,
        restaurant_id: restaurant.id,
        user_id: currentUser.id
      })
    })
    .then(res => res.json())
    .then(handleAddFav)
  }

  function eachHotDog() {
    return hotDogsArr.map(hotdog =>
      <HotDogs
        hotdog={hotdog}
        key={hotdog.id}
      />
      )
  }

  return (
    <div>
      <h1>{restaurant.name} {"★".repeat(restaurant.avg_rating)} {"☆".repeat(5 - restaurant.avg_rating)}</h1>
      <img src={restaurant.image} alt="restaurant"/>
      <p>{restaurant.address}</p>
      {eachHotDog()}
      <button onClick={handleFavorite}>Add to Favorites</button>
      <p>Comments: {commentsArr.map(com => {
        return <li key={com.id}>{com.comment}</li>})}
      </p>
      <form onSubmit={handleCommentSubmit}>
        <label>Add a Comment: </label>
        <input type="text" name="comment"/>
        <button>Add Comment</button>
      </form>
    </div>
  )
}

export default RestaurantDetails