

import './item.css'
export  const Item = ({item,todo,setTodo}) =>{

const newTodo = (todoId)=>{
  const filterTodo = todo.filter(todo => todo.id !== todoId)
  setTodo([...filterTodo]);
}

const newEditTodo = (todoId)=>{
 const editText = prompt("O'zgartirish mumkin!")
 const findTodo=todo.find(todo =>todo.id === todoId)

 findTodo.name = editText;
 setTodo([...todo])
}



 
return(
    <>
      <div className="inputbox">
       <input className="input"  type="checkbox" name="type"/>


       <span className='idspan' >{item.id + 1}</span>&nbsp;
       
         <h1  className={"title"} >{item.name}</h1>      
        <p>{item.isComplate}</p>&nbsp;
      </div>
      <div  className="">
 
        <button onClick={ () => newEditTodo(item.id)} className="ItemEdit ">edite</button>&nbsp;
        <button onClick={ () => newTodo(item.id)} className="ItemDelete">delete &nbsp;<span className="span"  >&times;</span></button>&nbsp;
      </div>

    </>
)
}