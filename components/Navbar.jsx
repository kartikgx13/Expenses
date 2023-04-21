import { faArrowUp19, faArrowUp91, faBars, faChartArea, faChartLine, faCreditCard, faMoneyBill, faMoneyBillTrendUp, faRightFromBracket, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

function Navbar() {
  const [first,setFirst]=useState("black")
  const [second,setSecond]=useState("black")
  const [third,setThird]=useState("black")
  const [fourth,setFourth]=useState("black")

  const [firstB,setFirstB]=useState("none")
  const [secondB,setSecondB]=useState("none")
  const [thirdB,setThirdB]=useState("none")
  const [fourthB,setFourthB]=useState("none")

  const [click,setClick]=useState(false)
  const handleClick=()=>setClick(!click)

  const firstchange=()=>{
    setFirst("white");
    setSecond("black")
    setThird("black")
    setFourth("black")
    setFirstB("0 0 0 2px solid #452c63")
    setSecondB("none")
    setThirdB("none")
    setFourthB("none")
  }

  const secondchange=()=>{
    setFirst("black");
    setSecond("white")
    setThird("black")
    setFourth("black")
    setFirstB("none")
    setSecondB("0 0 0 2px solid #452c63")
    setThirdB("none")
    setFourthB("none")
  }

  const thirdchange=()=>{
    setFirst("black");
    setSecond("black")
    setThird("white")
    setFourth("black")
    setFirstB("none")
    setSecondB("none")
    setThirdB("0 0 0 2px solid #452c63")
    setFourthB("none")
  }

  const fourthchange=()=>{
    setFirst("black");
    setSecond("black")
    setThird("black")
    setFourth("white")
    setFirstB("none")
    setSecondB("none")
    setThirdB("none")
    setFourthB("0 0 0 2px solid #452c63")
  }


  return (
    <section className="main-navbar-section">
        <div className="navbar-container">
            <div className="user-details">
              <div className="user-image">
               <Image
               src="/images/user.png"
               alt="user_image"
               width={40}
               height={40}
               />
              </div>
              <div className="user-name">
               <h1>Thakur</h1>
               <p>thakur_69</p>
              </div>
            </div>
            <ul className={click ? "nav-links active" : "nav-links"}>
                <Link href="/dashboard" onClick={firstchange} style={{color:first,border:firstB}}><li><FontAwesomeIcon icon={faChartLine} width={50}/>Dashboard</li></Link>
                <Link href="/expenses" onClick={secondchange} style={{color:second,border:secondB}}><li><FontAwesomeIcon icon={faMoneyBill} width={50}/>Expenses</li></Link>
                <Link href="/incomes" onClick={thirdchange} style={{color:third,border:thirdB}}><li><FontAwesomeIcon icon={faMoneyBillTrendUp} width={50}/>Income</li></Link>
                <Link href="#" onClick={fourthchange} style={{color:fourth,border:fourthB}}><li><FontAwesomeIcon icon={faCreditCard} width={50}/>Transactions</li></Link>
            </ul>
            <div className="sign-out-btn">
              <button style={{width:"auto",display:"flex",justifyContent:"space-between",alignItems:"center"}}>Sign Out
            </button>
            </div>
            <div className="hamburger-menu" onClick={handleClick}>
          {
          click ? (<FontAwesomeIcon
            icon={faXmark}
            style={{width:"1.5rem",height:"1.5rem",color:"white"}}
            />) 
            : (<FontAwesomeIcon
              icon={faBars}
              style={{width:"1.5rem",height:"1.5rem",color:"rgb(27, 27, 27)"}}
              />)}
        </div>
        </div>
    </section>
  )
}

export default Navbar