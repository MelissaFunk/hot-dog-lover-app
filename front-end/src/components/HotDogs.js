function HotDogs({ hotdog }) {

  return(
    <div>
      <div className="hotdog-card">
        <div className="hotdog-card-left">
          <h3>{hotdog.name}</h3>
          <img className="hotdog-img" src={hotdog.image} alt="hotdog" />
        </div>

        <div className="hotdog-card-right">
          <p><b>Dog Style:</b> {hotdog.dog_style}</p>
          <p><b>Toppings:</b> {hotdog.toppings}</p>
          <p><b>Condiments:</b> {hotdog.condiments}</p>
        </div>
      </div>
    </div>
  )
}

export default HotDogs

