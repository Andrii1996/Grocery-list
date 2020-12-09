import React, { useState, useEffect } from 'react';
import './GroceryList.css'

export const GroceryList = ({ groceryList, removeProduct, changeStatus }) => {
  const sortedGroceryList = groceryList.sort((a, b) => a.priority - b.priority);
  const [ filteredByStatus , setView ] = useState(sortedGroceryList);

  const viewAll = () => {
    setView(groceryList);
  }

  const filtHave = () => {
    setView([...groceryList].filter((item) => item.status === 'have'));
  }

  const filtRanOut = () => {
    setView([...groceryList].filter((item) => item.status === 'ranOut'));
  }

  useEffect(() => {
    setView(groceryList)
  }, [groceryList]);

  return (
    <div>
      <div className="buttons">
        <button
          type="button"
          className="ui button"
          onClick={() => viewAll()}
        >
          All
        </button>
        <button
          type="button"
          className="ui button"
          onClick={() => filtHave()}
        >
          Have
        </button>
        <button
          type="button"
          className="ui button"
          onClick={() => filtRanOut()}
        >
          Ran Out
        </button>
      </div>
      {filteredByStatus.length > 0
      ? (
        <ul className="groceryList">
        {filteredByStatus.map(item => (
          <li
            key={item.id}
            className="ui card"
            id="groceryCard"
          >
            <p>
              <span className="groceryCard__name">
                {`Name : `}
              </span>
              {item.name}
            </p>
            <p>
              <span className="groceryCard__name">
              {`Priority : `}
              </span>
              {item.priority}
            </p>
            <p>
              <span className="groceryCard__name">
              {`Status : `}
              </span>
              {item.status}
            </p>
            <div className="groceryCard__button">
              <div>
                <span>{`Status `}</span>
                <select
                  className="ui basic floating dropdown button"
                  onChange={event => changeStatus(event.target.value, item.id)}
                >
                  <option value="">Change Status</option>
                  <option value="ranOut">Ran out</option>
                  <option value="have">Have</option>
                </select>
              </div>
              <button
                type="button"
                className="ui primary button"
                onClick={() => removeProduct(item.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      )
      : (
        <p className="groceryCard__text">Add new product</p>
      )}

    </div>
  )
}
