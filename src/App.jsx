import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";




function App() {
  

const [todoItems, setTodoItems] = useState([]);

const handleNewItem = (itemName, itemDueDate) =>{
  // console.log(`New Item Addes: ${itemName} Date: ${itemDueDate}`)
  const newTodoItem = [...todoItems, { name: itemName,
    dueDate: itemDueDate}]
    setTodoItems(newTodoItem)
}

const handleDeleteItem = (todoItemName) =>{
  const newTodoItems = todoItems.filter((item) => item.name !== todoItemName)
  setTodoItems(newTodoItems)

  
}
  
  return (
<center className='container'>
  <AppName></AppName>
  <div className="container">
   <AddTodo onNewItem = {handleNewItem}/>
   {todoItems.length === 0 && <WelcomeMessage/> }
   <TodoItems TodoItems={todoItems} onDeleteClick={handleDeleteItem}/>
  </div>
</center>
  )
}

export default App
