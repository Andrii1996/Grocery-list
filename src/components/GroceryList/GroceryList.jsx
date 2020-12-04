import React from 'react';
import './GroceryList.css'

export const GroceryList = ({ groceryList, removeProduct, changeStatus }) => {
  const sortedGloceryList = groceryList.sort((a, b) => a.priority - b.priority);

  return (
    <div>
      <div className="buttons">
        <button
          type="button"
          className="ui button"
        >
          All
        </button>
        <button
          type="button"
          className="ui button"
        >
          Have
        </button>
        <button
          type="button"
          className="ui button"
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
