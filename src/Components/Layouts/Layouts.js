import React from 'react'
import Aside from './Aside'
import Footer from './Footer'
import Header from './Header'

//2. Definition Area
export default function Layouts(props) {
    //Every Function Should Return Something
  return (
    <>
        <Header />
        <main>
            <div className="container h-100 v_cont">
                <div className="row h-100">
                    <Aside cls="v_leftaside">Left Aside</Aside>
                    {props.children}
                    <Aside cls="v_rightaside">Right Aside</Aside>
                </div>
            </div>
        </main>
        <Footer />
    </>
  )
}
//3. Export Area