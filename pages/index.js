import Link from "next/link"
import React from "react"
export default function Home(){
  return(
    <>
    <div className="landing-page-container">
      <div className="landing-page-button">
        <Link href="/loginandregister">
        <button>
          Click here to begin
        </button>
        </Link>
      </div>
    </div>
    </>
  )
}
