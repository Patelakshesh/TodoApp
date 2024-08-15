import {  useRef } from "react"
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({onNewItem}){

 
  const todoNameElement = useRef()
  const todoDateElement = useRef()

  
  const handleAddButtonClicked = (event) =>{
    event.preventDefault();
    const todoName= todoNameElement.current.value;
    const todoDueDate= todoDateElement.current.value;
    todoNameElement.current.value = ''
    todoDateElement.current.value = ''
    onNewItem(todoName, todoDueDate)
   
  }

return(
    <form  className="row ak-row " onSubmit={handleAddButtonClicked}>
      
      <div className="col-6">
        <input type="text" ref={todoNameElement}  placeholder="Enter Todo here..."  />
      </div>
      <div className="col-4">
        <input type="date" ref={todoDateElement}   />
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-success ak-button " ><BiMessageAdd/></button>
      </div>
    </form>
)
}
export default AddTodo;