
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css"
const TodoItems = ({TodoItems, onDeleteClick}) =>{
    
    
return (
    <div className={styles.itemsContainer}>
        {TodoItems.map((item) =><TodoItem key={item.name} TodoName={item.name} TodoDate={item.dueDate} onDeleteClicks={onDeleteClick}/> )}
    </div>
)
}
export default TodoItems;