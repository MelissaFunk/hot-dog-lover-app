import HotDogs from "./HotDogs"
import { useState, useEffect } from "react"
import { useParams } from "react-router"

function RestaurantDetails({ currentUser }) {
  const [restaurant, setRestaurant] = useState([])
  const [commentsArr, setCommentsArr] = useState([])
  const [hotDogsArr, setHotDogsArr] = useState([])
  const [favorites, setFavorites] = useState([])
  const [ratings, setRatings] = useState([])
  const [favClicked, setFavClicked] = useState(false)
  const [commentClicked, setCommentClicked] = useState(false)
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
    setCommentsArr([...commentsArr, newComment])
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
    .then(data => {
      handleAddComment(data)
      setCommentClicked(commentClicked => !commentClicked)
    })
    e.target.reset()
  }

  const handleAddFav = (newFav) => {
    setRatings([...ratings, newFav])
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
    .then(data => {
      handleAddFav(data)
      setFavClicked(favClicked => !favClicked)
    })
  }

  const handleAddRating = (newRating) => {
    setFavorites([...favorites, newRating])
  }

  const handleRating = (e) => {
    e.preventDefault()
    fetch('/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        rating: e.target.value,
        favorite: false,
        restaurant_id: restaurant.id,
        user_id: currentUser.id
      })
    })
    .then(res => res.json())
    .then(handleAddRating)
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
      <h1>{restaurant.name} {"★".repeat(restaurant.avg_rating) + "☆".repeat(5 - restaurant.avg_rating)}</h1>
      <p>{restaurant.address}</p>
      <img src={restaurant.image} alt="restaurant"/>
      {eachHotDog()}
      <button onClick={handleFavorite}>{favClicked ? "Added!" : "Add to Favorites"}</button>
      <p>Comments: {commentsArr.map(com => {
        return <li key={com.id}>{com.comment}</li>})}
      </p>
      <form onSubmit={handleCommentSubmit}>
        <label>Add a Comment: </label>
        <input type="text" name="comment"/>
        <button>{commentClicked ? "Added!" : "Add Comment"}</button>
      </form>
      <label>Rate Restaurant: </label>
      <select onChange={handleRating}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  )
}

export default RestaurantDetails