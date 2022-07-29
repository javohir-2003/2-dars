



import { useState } from "react";
import "./App.css";
import Item from "./components/Item";

function App() {
  const [todos, setTodos] = useState([
    {
      name: "Kitob o'qish",
      isComplate: true,
     },
    {
    name: "Uxlash",
    isComplate: false,
   },
  
   {
    name: "Yugurish",
    isComplate: true,
   }
  ]);

  let count=0

  return (
    <div className="todos-box">
      <div className="container">
        <h1 className="heading">Todo add</h1>
        <div className="inner">
          <form
            onSubmit={(evt) => {
              evt.preventDefault();
              setTodos([
                ...todos,
                {
      
                  name: evt.target[0].value,
                  isComplate: false,
                },
              ]);
            }}
          >
            <input type={"text"} className="input" />
          </form>
          {todos.forEach((el)=>{
            count++;
            el.id=count;
            console.log(el);
          })}
          <ul className="listbox">
            {todos.map((el) => (
      
      
              <Item text={el.name}  isComplate={el.isComplate} id={el.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;