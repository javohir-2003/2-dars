




import "./item.css";


const Item=({text,isComplate})=>{

  
  return(
    <li className="item-box">

      
        {isComplate?<input defaultChecked="true" className="checkinput" type={"checkbox"} />:<input className="checkinput" type={"checkbox"} />}
        <h1 className="Item-text">{text}</h1>
      


      <div className="wrapper">
        <button className="ItemEdit" >Edit</button>
        <button className="ItemDelete">Delete</button>
      </div>
    </li>
  )
}

export default Item