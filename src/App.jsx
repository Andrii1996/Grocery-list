import React, { useState } from 'react';
import { GroceryList } from './components/GroceryList/GroceryList';
import { AddGrocery } from './components/AddGrocery/Addgrocery';
import { SetLocalStorage } from './localStorage/setLocalStorage';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

export const App = () => {
  const [groceryList, setGroceryList] = SetLocalStorage('groceryList', [])
  const [ filteredGroceryList, setFilteredGroceryList ] = useState(groceryList);

  const addNewGrocery = (name, priority, status) => {
    const newGrocery = {
      name,
      priority,
      status,
      id: new Date(),
    };

    setGroceryList([...groceryList, newGrocery]);
  };

  const removeProduct = (id) => {
    setGroceryList(groceryList.filter((item) => item.id !== id));
  }

  const filtHave = (str) => {
    console.log(str);
    setFilteredGroceryList(filteredGroceryList.filter((item) => item.status !== str));
  }
  

  const changeStatus = (status, id) => {
    setGroceryList(groceryList.map((item) => {

      if (item.id !== id) {
        return { ...item };
      }
      
        return {
          ...item,
          status,
        };
    }));
  }

  return (
    <div className="App">
      <AddGrocery addNewGrocery={addNewGrocery} />
      <GroceryList
        groceryList={groceryList}
        removeProduct={removeProduct}
        changeStatus={changeStatus}
        filtHave={filtHave}
      />
    </div>
  );
}
