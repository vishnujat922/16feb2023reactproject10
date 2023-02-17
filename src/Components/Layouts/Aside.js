//1. Import Area
import React from 'react'
//2. Definition Area
//Every Functional Component Return Something
export default function Aside(props) {
  return (
    <aside className={`col-2 ${props.cls} tbdr h-100`}>{props.children}</aside>
  )
}
//3. Export Area