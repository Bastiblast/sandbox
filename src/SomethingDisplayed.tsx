import React, { useEffect, useState } from 'react'
import { uzeCPTSelection } from './uzeSelectedCPT'


export default function SomethingDisplayed() {

    const [jphData,setjphData] = useState(null)
    const CPTlist = uzeCPTSelection(s => s.CPTlist)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(data => data.json())
      .then(json => setjphData(json))
    }, [])

    useEffect(() => {
        if (!jphData) return 
        console.log({jphData})
    },[jphData])
    
  return (
    <>
        {jphData && jphData.map(book => {
            let isActive  
            CPTlist.forEach(cpt => book.title.toString().includes(cpt) ? isActive = "bg-green-500" : null)
            return <div className={isActive}>
            <span className='mx-2'>book.completed: {book.completed.toString()}</span>
            <span className='mx-2'>book.id: {book.id.toString()}</span>
            <span className='mx-2'>book.title: {book.title.toString()}</span>
            <span className='mx-2'>book.userId: {book.userId.toString()}</span>
        </div>}) }
    </>
  )
}
