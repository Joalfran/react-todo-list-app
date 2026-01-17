import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';

function TodoItem(props) {
  return (
      <li className="TodoItem">
        <CompleteIcon
          completed={props.completed}
          onComplete={props.onComplete} />
        {/*<span className={`CkeckItem ${props.completed && "CheckItem--Completed"}`}
        onClick={props.onComplete}
        >
          V</span> */}
        <p className={`DescriptionItem ${props.completed && "DescriptionItem__p--Completed"}`}>{props.text}</p>
        <DeleteIcon
          completed={props.completed} 
          onDelete={props.onDelete}/>
        {/* <span className="CheckItem--delete" onClick={props.onDelete}>X</span> */}
      </li>
  )
}

export { TodoItem };