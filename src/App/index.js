import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';
import react from 'react';

//const defaultTodos = [
  //{ text: 'Cortar Cebolla', completed: true },
  //{ text: 'Tomar del Curso a React.js', completed: false },
  //{ text: 'Llorar con la Llorona', completed: false },
  //{ text: 'LALALALA', completed: false },
  //{ text: 'Usar estados derivados', completed: true },
//];

//localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
//localStorage.removeItem('TODOS_V1', defaultTodos);

function App() {
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage ('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => 
    !!todo.completed
  ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    }
  );

const completeTodo = (text) => {
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text === text
  );
  newTodos[todoIndex].completed = true;
  saveTodos(newTodos);
};

const deleteTodo = (text) => {
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text === text
  );
  newTodos.splice(todoIndex, 1);
  saveTodos(newTodos);
};

  return (
    <AppUI 
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )
};

export default App;
