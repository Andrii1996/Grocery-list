import React from 'react';
import './GroceryList.css'

export const GroceryList = ({ groceryList, removeProduct, changeStatus, setFilteredGrocery }) => {
  const sortedGloceryList = groceryList.sort((a, b) => a.priority - b.priority);

  return (
    <div>
      <div className="buttons">
        <button
          type="button"
          className="ui button"
          // onClick={setFilteredGrocery('all')}
        >
          All
        </button>
        <button
          type="button"
          className="ui button"
          // onClick={setFilteredGrocery('have')}
        >
          Have
        </button>
        <button
          type="button"
          className="ui button"
          // onClick={setFilteredGrocery('ranOut')}
        >
          Ran Out
        </button>
      </div>
      {sortedGloceryList.length > 0
      ? (
        <ul className="groceryList">
        {sortedGloceryList.map(item => (
          <li
            key={item.id}
            className="ui card"
            id="groceryCard"
          >
            <p>
              <span>
                {`Name : `}
                {item.name}
              </span>
            </p>
            <p>
              <span>
              {`Priority : `}
                {item.priority}
              </span>
            </p>
            <p>
              <span>
              {`Status : `}
                {item.status === 'have' ? 'Have' : 'Ran Out'}
              </span>
            </p>
            <div>
              <span>Status</span>
              <select
                className="ui basic floating dropdown button"
                onChange={event => changeStatus(event.target.value, item.id)}
              >
                <option value="">Change Status</option>
                <option value="ranOut">Ran out</option>
                <option value="have">Have</option>
              </select>
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
