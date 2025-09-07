import './TodoButton.css'
function TodoButton () {
    return (
      <button className="TodoButton" 
      onClick = {
        (event) => {
          console.log ('Le diste clic')
          console.log (event)
          console.log (event.target)
          }
        } 
      >+</button>
    )
  }

  export { TodoButton };