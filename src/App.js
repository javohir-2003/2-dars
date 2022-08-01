



import { List } from "./components/List";
import { Item } from "./components/Item";
import {useState} from "react";


function App() {

 const [todo,setTodo]=useState(JSON.parse(window.localStorage.getItem("todo")) || [
   {
    id:1,
    name:"Code yozish",
    isComplate:true,
  },
  {
    id:2,
    name:"yugurish",
    isComplate:false,
  }

 ]) 


  return (
    <div className="App">
 <div className="container">
   
     <div className="app-inner">
       <form className=" form"  onSubmit={(evt)=>{
        evt.preventDefault();
        if(evt.target[0].value !== ""){
          setTodo([
            ...todo,{
              id:todo.at(-1).id ? todo.at(-1).id + 1 : 1,
              name:evt.target[0].value,
              isComplate:false,
            },   ]);
            window.localStorage.setItem("todo",JSON.stringify(todo))
        }
          evt.target[0].value ="";
        }}>
         <input className="Input " placeholder="Todo..." type="text" name="text"  />
         <button className="buttonli"  type="onSubmit " > Send </button>
       </form>
          <List >
          {
          
           todo.map((el) =>(
        <li className="item" key={el.id}>
          <Item   item={el} todo={todo} setTodo={setTodo} />
        </li>
           ))
          }
          
          </List>
     </div>
 </div>
  
    </div>
  );
}

export default App;