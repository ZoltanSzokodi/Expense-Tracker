import React, { useContext, Fragment } from 'react';

import { numberWithCommas } from '../utils/format';

import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <Fragment>
      <h4>Your Balance</h4>
      <h1>${numberWithCommas(total)}</h1>
    </Fragment>
  );
};

export default Balance;