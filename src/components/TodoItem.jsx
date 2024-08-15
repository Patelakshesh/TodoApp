import { MdDelete } from "react-icons/md";
function TodoItem({TodoName, TodoDate, onDeleteClicks}){
    
return (
    <div className="row ak-row">
      
    <div className="col-6">
    {TodoName}
    </div>
    <div className="col-4">
    {TodoDate}
    </div>
    <div className="col-2">
      <button className="btn btn-danger ak-button" onClick={() => onDeleteClicks(TodoName)}><MdDelete /></button>
    </div>
    
  </div>
)
}
export default TodoItem;