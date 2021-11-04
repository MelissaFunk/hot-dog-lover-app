function HotDogs({ hotdog }) {

  return(
    <div>
      <h4>{hotdog.name}</h4>
      <img src={hotdog.image} alt="hotdog" />
      <p>Dog Style: {hotdog.dog_style}</p>
      <p>Toppings: {hotdog.toppings}</p>
      <p>Condiments: {hotdog.condiments}</p>
    </div>
  )
}

export default HotDogs

