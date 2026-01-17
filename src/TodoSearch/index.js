import './TodoSearch.css';

function TodoSearch({
  searchValue,
  setSearchValue
}) {

  return (
    <input 
    className="InputSearch" 
    placeholder="Cortar Cebolla" 
    value={searchValue}
    onChange={(event) => {
      setSearchValue(event.target.value);
    }}
    />  
  );
}

export { TodoSearch };