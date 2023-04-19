import React from 'react'
import TransactionWindow from '../components/TransactionWindow'
import Navbar from '../components/Navbar'

function expenses() {
  return (
    <>
    <section className="expense-income-section">
    <Navbar/>
    <TransactionWindow/>
    </section>
    </>
  )
}

export default expenses