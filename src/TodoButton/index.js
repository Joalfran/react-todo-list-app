import './TodoButton.css'
function TodoButton ({ setOpenModal }) {
    return (
      <button className="TodoButton" 
      onClick = {
        //(event) => {
          //console.log ('Le diste clic')
          //console.log (event)
          //console.log (event.target)
          () => {
          setOpenModal(state => !state);
          }
        } 
      >+</button>
    )
  }

  export { TodoButton };