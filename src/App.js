import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoButton } from './TodoButton';


const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Tomar del Curso a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALA', completed: false },
  { text: 'Usar estados derivados', completed: true },
];

function App() {
  const [todos, setTodos] = React.useState (defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => 
    !!todo.completed
  ).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(
    (todo) => {
      return todo.text.includes(searchValue);
    }
  );

  console.log('los usurios buscan to-dos de ' + searchValue);

  return (
    <>
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} 
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>
      <TodoButton />
    </>
  );
}

export default App;
