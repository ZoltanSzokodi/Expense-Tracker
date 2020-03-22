import React, { useState, useContext, Fragment } from 'react';
import { uuid } from 'uuidv4';

import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const handleChange = prop => e => {
    if (prop === 'text') {
      setText(e.target.value);
    }
    else if (prop === 'amount') {
      setAmount(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: uuid(),
      text,
      amount: amount * 1
    };

    addTransaction(newTransaction);
  };

  return (
    <Fragment>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={handleChange('text')} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
          >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={handleChange('amount')} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </Fragment>
  );
};

export default AddTransaction;
