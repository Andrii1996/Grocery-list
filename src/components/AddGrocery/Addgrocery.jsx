import React, { useCallback, useState } from 'react';
import './AddGrocery.css';

export const AddGrocery = ({ addNewGrocery }) => {
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');

  const handleNameChange = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const handlePriorityChange = useCallback((event) => {
    setPriority(event.target.value);
  }, []);

  const handleStatusChange = useCallback((event) => {
    setStatus(event.target.value);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!priority || !status) {
      return;
    }

    addNewGrocery(name, priority, status);
    setName('');
    setPriority('');
    setStatus('');
  };

  return (
    <div className="addProduct">
      <h3 className="addProduct__title">Add new product</h3>
      <form onSubmit={handleSubmit} className="ui form">
        <input
          type="text"
          className="ui input"
          placeholder="Enter product name"
          required
          value={name}
          onChange={handleNameChange}
        />

        <select
          className="ui basic floating dropdown button"
          value={priority}
          onChange={handlePriorityChange}
          required
        >
          <option value="">Select priority</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <select
          className="ui basic floating dropdown button"
          value={status}
          onChange={handleStatusChange}
          required
        >
          <option value="">Select status</option>
          <option value="ranOut">Ran out</option>
          <option value="have">Have</option>
        </select>

        <div>
          <button
            type="submit"
            className="ui primary button"
          >
            Add product
          </button>
        </div>
      </form>
    </div>
  );
};