import { useState } from "react"

function Create({ currentUser }) {
  const [hotDog, setHotDog] = useState(null)
  const [dogStyle, setDogStyle] = useState("")
  const [hotDogImageUrl, setHotDogImageUrl] = useState("https://cdn4.iconfinder.com/data/icons/food-9/512/food-19-512.png")

  const handleDogStyleClick = (e) => {
    setDogStyle(e.target.name)
    setHotDogImageUrl("https://www.klostermanbakery.com/uploads/images/products/3735_PRODUCT_6in_WGR_HD_Bun_900px_Rev.jpg")
  }

  const handleHotDogSubmit = (e) => {
    e.preventDefault()
    fetch('/hot_dogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: e.target.name.value,
        dog_style: dogStyle,
        toppings: e.target.toppings.value,
        condiments: e.target.condiments.value,
        restaurant_id: 8,
        user_id: currentUser.id
      })
    })
    .then(res => res.json())
    .then(setHotDog)
    e.target.reset()
  }

  return(
    <div>
      <h1>Create Your Own Hot Dog!</h1>
      <img src={hotDogImageUrl} alt="hotdog-icon" name="All Beef" onClick={e => handleDogStyleClick(e)} />
      <form onSubmit={e => handleHotDogSubmit(e)}>
        <label>Name: </label>
        <input type="text" name="name" />
        <label> Toppings: </label>
        <input type="text" name="toppings" />
        <label> Condiments: </label>
        <input type="text" name="condiments" />
        <button>Add Hot Dog</button>
      </form>

      {hotDog ? 
      <div>
        <h3>Name: {hotDog.name}</h3> 
        <p>Dog Style: {hotDog.dog_style}</p>
        <p>Toppings: {hotDog.toppings}</p>
        <p>Condiments: {hotDog.condiments}</p>
      </div>
      : null}

    </div>
  )
}

export default Create