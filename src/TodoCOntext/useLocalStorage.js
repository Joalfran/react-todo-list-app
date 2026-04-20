import React from 'react';

function useLocalStorage (itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);

      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {item, saveItem, loading, error};
}
// Parámetros que puedes ser usados en la consola del navegador para probar el hook:
//const defaultTodos = [
  //{ text: 'Cortar Cebolla', completed: true },
  //{ text: 'Tomar del Curso a React.js', completed: false },
  //{ text: 'Llorar con la Llorona', completed: false },
  //{ text: 'LALALALA', completed: false },
  //{ text: 'Usar estados derivados', completed: true },
//];

//localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
//localStorage.removeItem('TODOS_V1', defaultTodos);

export { useLocalStorage };