import './TodoItem.css'
function TodoItem(props) {
  return (
      <li className="TodoItem">
        <span className={`CkeckItem ${props.completed && "CheckItem--Completed"}`}>V</span>
        <p className={`DescriptionItem ${props.completed && "DescriptionItem__p--Completed"}`}>{props.text}</p>
        <span className="DeleteItem">X</span>
      </li>
  )
}

export { TodoItem};