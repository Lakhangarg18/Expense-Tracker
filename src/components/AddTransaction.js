import React, { useContext } from 'react'
import { useState } from 'react'
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {
  const [text,setText]=useState(" ");
  const [amount,setAmount]=useState(" ");
  const {addTransaction}=useContext(GlobalContext);
  const onSubmit=(e)=>{
    e.preventDefault();
    const newTransaction={
      id:Math.floor(Math.random() * 100000000),
      text,
      amount:+amount,

    }
    addTransaction(newTransaction);
    


  }


  return (
    <>
     <h3>Add new Expense</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlfor="text">Name</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)}  placeholder="Enter New Expense!!" />
        </div>
        <div className="form-control">
          <label htmlfor="amount"
            >Amount <br />
            (negative -किसी और ने खर्च किए। , positive - तूने खर्च किए।)</label
          >
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}  placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
      
    </>
  )
}

{/* export default AddTransaction */}
