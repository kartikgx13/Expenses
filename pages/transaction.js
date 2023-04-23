import React from 'react'
import Navbar from '../components/Navbar';
import { useState,useEffect } from 'react';

function transaction() {
    const [income, setIncome] = useState([]);
    const [expenses, setExpenses] = useState([]);
  
    useEffect(()=>{
      const expense_list=window.localStorage.getItem('expense_list')
      if (expense_list!==null){
          setExpenses(JSON.parse(expense_list))
      }
      },[])
    
    useEffect(()=>{
    const income_list=window.localStorage.getItem('income_list')
    if (income_list!==null){
        setIncome(JSON.parse(income_list))
    }
    },[])


  return (
    <>
    <section className="main-transactions-section">
    <Navbar/>
    <div className="main-transaction-container">
     <div className="debit-container">
     <h1 style={{color:"red"}}>Debit</h1>
     {expenses.length===0 ? (
        <p>No transactions yet</p>
     ):(
        <>
    <div class="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead>
        <tr>
          <th>Title</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Category</th>
        </tr>
      </thead>
    </table>
  </div>
  <div class="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
        {expenses.map((expense,index)=>(
            <tr key={index}>
                <td>{expense.title}</td>
                <td>{expense.amount}</td>
                <td>{expense.date}</td>
                <td>{expense.category}</td>
            </tr>
        ))}
      </tbody>
    </table>
  </div>
        </>
     )}
     </div>
     <div className="credit-container">
      <h1 style={{color:"green"}}>Credit</h1>
      {income.length===0 ? (
        <p>No transactions yet</p>
     ):(
        <>
    <div class="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead>
        <tr>
        <th>Title</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Category</th>
        </tr>
      </thead>
    </table>
  </div>
  <div class="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
      {income.map((income,index)=>(
            <tr key={index}>
                <td>{income.title}</td>
                <td>{income.amount}</td>
                <td>{income.date}</td>
                <td>{income.category}</td>
            </tr>
        ))}
      </tbody>
    </table>
  </div>
        </>
     )}
     </div>
    </div>
    </section>
    </>
  )
}

export default transaction