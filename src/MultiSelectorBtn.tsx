import React, { MouseEventHandler, useState } from 'react'
import { uzeCPTSelection } from './uzeSelectedCPT'
const CPTarray = [
    "09:00",
    "11:15",
    "12:15",
    "12:45"
]

export default function MultiSelectorBtn() {

    const [selectorList,SetSelectorList] = useState([])

    const CPTlist = uzeCPTSelection(s => s.CPTlist)
    const updateCPTTracking = uzeCPTSelection(s => s.updateCPTTracking)

    const handleClick = (event: MouseEvent) => {
        updateCPTTracking(event)
    }

  return (
    <>
    {CPTarray.map((val,index) => {
        const isActive = CPTlist.includes(val) ? "bg-green-500" : null
        return <button id={val+index}
        className={"btn " + isActive}
        onClick={handleClick}
        >{val}</button>
    })}
    </>
  )
}
