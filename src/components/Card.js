const Card = (name, age, img) => {

  return(
    <li>
      <h2>{name}</h2>
      <p>{age}</p>
      <img width={100} height={100} src={img}/>
    </li>
  )
}

export default Card