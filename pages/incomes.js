import React from 'react'
import TransactionWindow from '../components/TransactionWindow'

function incomes() {
  return (
    <>
    <TransactionWindow rev_page="Expenses" nav_page="/expenses" btn_class="add-income-btn" form_title="Income" title_type="Income title" amount_type="Income amount" add_type="Add Income"/>
    </>
  )
}

export default incomes