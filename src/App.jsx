import React, { useState } from 'react';
import { GroceryList } from './components/GroceryList/GroceryList';
import { AddGrocery } from './components/AddGrocery/Addgrocery';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

const list = [
  {
    name: 'bread',
    priority: 3,
    status: 'have',
    id: new Date(),
  },
];


export const App = () => {
  const [groceryList, setGroceryList] = useState(list)

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

  // const setFilteredGrocery = (status) => {
  //   setGroceryList(groceryList.filter((item) => item.status === status));
  // }

  return (
    <div className="App">
      <AddGrocery addNewGrocery={addNewGrocery} />
      <GroceryList
        groceryList={groceryList}
        removeProduct={removeProduct}
        changeStatus={changeStatus}
        // setFilteredGrocery={setFilteredGrocery}
      />
    </div>
  );
}
