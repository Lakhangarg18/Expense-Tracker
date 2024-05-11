import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction';

export const TransactionList = () => {
  const {transactions}=useContext(GlobalContext);

  return (
    <>
     <h3>Previous Expenses</h3>
      <ul className="list">
         {transactions.map((transaction)=>(<Transaction id={transaction.id} transaction={transaction}/>))}
        
      </ul>

      
    </>
  )
}

// export default TransactionList
