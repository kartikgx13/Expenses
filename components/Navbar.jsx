import { faArrowUp19, faArrowUp91, faBars, faChartArea, faChartLine, faCreditCard, faMoneyBill, faMoneyBillTrendUp, faRightFromBracket, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { useEffect } from 'react'

function Navbar() {
  const [first,setFirst]=useState("white")
  const [second,setSecond]=useState("white")
  const [third,setThird]=useState("white")
  const [fourth,setFourth]=useState("white")

  const [firstB,setFirstB]=useState("none")
  const [secondB,setSecondB]=useState("none")
  const [thirdB,setThirdB]=useState("none")
  const [fourthB,setFourthB]=useState("none")

  const [userName,setUserName]=useState('');

  const [click,setClick]=useState(false)
  const handleClick=()=>setClick(!click)



  const firstchange=()=>{
    setFirst("#121212");
    setSecond("white")
    setThird("white")
    setFourth("white")
    setFirstB("0 0 0 2px solid #452c63")
    setSecondB("none")
    setThirdB("none")
    setFourthB("none")
  }

  const secondchange=()=>{
    setFirst("white");
    setSecond("#121212")
    setThird("white")
    setFourth("white")
    setFirstB("none")
    setSecondB("0 0 0 2px solid #452c63")
    setThirdB("none")
    setFourthB("none")
  }

  const thirdchange=()=>{
    setFirst("white");
    setSecond("white")
    setThird("#121212")
    setFourth("white")
    setFirstB("none")
    setSecondB("none")
    setThirdB("0 0 0 2px solid #452c63")
    setFourthB("none")
  }

  const fourthchange=()=>{
    setFirst("white");
    setSecond("white")
    setThird("white")
    setFourth("#121212")
    setFirstB("none")
    setSecondB("none")
    setThirdB("none")
    setFourthB("0 0 0 2px solid #452c63")
  }

  useEffect(()=>{
    const data=window.localStorage.getItem('nav-color1')
    if (data!==null){
        setFirst(JSON.parse(data))
    }
    },[])

  useEffect(()=>{
  window.localStorage.setItem('nav-color1',JSON.stringify(first))
  },[first])

  useEffect(()=>{
    const data=window.localStorage.getItem('nav-color2')
    if (data!==null){
        setSecond(JSON.parse(data))
    }
    },[])

  useEffect(()=>{
  window.localStorage.setItem('nav-color2',JSON.stringify(second))
  },[second])

  useEffect(()=>{
    const data=window.localStorage.getItem('nav-color3')
    if (data!==null){
        setThird(JSON.parse(data))
    }
    },[])

  useEffect(()=>{
  window.localStorage.setItem('nav-color3',JSON.stringify(third))
  },[third])

  useEffect(()=>{
    const data=window.localStorage.getItem('nav-color4')
    if (data!==null){
        setFourth(JSON.parse(data))
    }
    },[])

  useEffect(()=>{
  window.localStorage.setItem('nav-color4',JSON.stringify(fourth))
  },[fourth])

  const [username, setUsername] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const usernameFromLocalStorage = localStorage.getItem('username');
      if (usernameFromLocalStorage) {
        setUsername(usernameFromLocalStorage);
      }
    }
  }, []);

  const [email, setEmail] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const emailFromLocalStorage = localStorage.getItem('email');
      if (emailFromLocalStorage) {
        setEmail(emailFromLocalStorage);
      }
    }
  }, []);


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
               <h1>{username || 'Guest'}</h1>
              </div>
            </div>
            <ul className={click ? "nav-links active" : "nav-links"}>
                <Link href="/dashboard" onClick={firstchange} style={{color:first,border:firstB}}><li><FontAwesomeIcon icon={faChartLine} width={50}/>Dashboard</li></Link>
                <Link href="/expenses" onClick={secondchange} style={{color:second,border:secondB}}><li><FontAwesomeIcon icon={faMoneyBill} width={50}/>Expenses</li></Link>
                <Link href="/incomes" onClick={thirdchange} style={{color:third,border:thirdB}}><li><FontAwesomeIcon icon={faMoneyBillTrendUp} width={50}/>Income</li></Link>
                <Link href="/transaction" onClick={fourthchange} style={{color:fourth,border:fourthB}}><li><FontAwesomeIcon icon={faCreditCard} width={50}/>Transactions</li></Link>
            </ul>
            <div className={click ? "sign-out-btn active" : "sign-out-btn"}>
              <Link href="/">
              <button style={{width:"auto",display:"flex",justifyContent:"space-between",alignItems:"center"}}>Sign Out
              </button>
              </Link>
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