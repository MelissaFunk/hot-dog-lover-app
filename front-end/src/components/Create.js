import { useState } from "react"

function Create({ currentUser }) {
  const [hotDog, setHotDog] = useState(null)
  const [dogStyle, setDogStyle] = useState(null)

  const handleDogStyleClick = (e) => {
    e.preventDefault()
    setDogStyle(e.target.value)
    console.log(dogStyle)
  }

  const handleHotDogSubmit = (e) => {
    e.preventDefault()
    fetch('/hot_dogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: e.target.name.value,
        image: e.target.image.value,
        dog_style: dogStyle,
        toppings: e.target.toppings.value,
        condiments: e.target.condiments.value,
        restaurant_id: 8,
        user_id: currentUser.id
      })
    })
    .then(res => res.json())
    .then(setHotDog)
  }

  return(
    <div>
      <h1>Create Your Own Hot Dog!</h1>
      <form onSubmit={handleHotDogSubmit}>
        <label>Name: </label>
        <input type="text" name="name" />
        <label> Image: </label>
        <input type="img" name="image" />
        <label> Dog Style: </label>
        <img src="https://cdn4.iconfinder.com/data/icons/food-9/512/food-19-512.png" alt="hotdog-icon" value="All Beef" onClick={handleDogStyleClick}/>
        <label> Toppings: </label>
        <input type="text" name="toppings" />
        <label> Condiments: </label>
        <input type="text" name="condiments" />
        <button>Add Hot Dog</button>
      </form>

      {hotDog ? 
      <div>
        <h3>{hotDog.name}</h3> 
        <img src={hotDog.image} alt="hotdog" />
        <p>Dog Style: {hotDog.dog_style}</p>
        <p>Toppings: {hotDog.toppings}</p>
        <p>Condiments: {hotDog.condiments}</p>
      </div>
      : null}
    </div>
  )
}

export default Create