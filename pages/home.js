import React from 'react'
import { useState,useEffect } from 'react'
import Overview from '../components/Overview';
import Transaction from '../components/Transaction';
import LoginForm from '../components/LoginForm';
import TransactionWindow from '../components/TransactionWindow';


function home(props) {
  {/*const [transaction,updateTransaction]=useState([]);//since initially the list will be empty hence we have passed an empty array

  //method to add the transactions to the transaction array
  const addTransaction=(payload)=>{
    //defining an array to store the transaction
    const transactionArray= [...transaction]
    transactionArray.push(payload);
  updateTransaction(transactionArray);*/}
  return (
    <>
    <h1>Hello</h1>
    {/*<Overview addTransaction={addTransaction}/>
    <Transaction transaction={transaction}/>*/}
    <TransactionWindow/>
    </>
  )
  }
  

export default home