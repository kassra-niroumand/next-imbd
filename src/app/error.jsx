"use client"

import { useEffect } from "react"

export default function Error({error,reset}) {

  useEffect(()=>{
    console.log(error);
  },[error])

  return (
    <div className="text-center">
      <h1>Something went wrong</h1>
      <button onClick={()=>reset()} className="hover:text-amber-600">
        try again 
      </button>
    </div>
  )
}
