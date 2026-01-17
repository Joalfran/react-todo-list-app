import './TodoList.css'
function TodoList ({children}) {
    return (
      <span className="TodoList">
        {children}
      </span>
    )
  }

  export { TodoList };