import React from 'react'
import { useState,useEffect } from 'react'
import Overview from '../components/Overview';
import Transaction from '../components/Transaction';
import LoginForm from '../components/LoginForm';
import TransactionWindow from '../components/TransactionWindow';


function home() {
  return (
    <>
    <h1>Hello</h1>
    <TransactionWindow/>
    </>
  )
  }

  

export default home