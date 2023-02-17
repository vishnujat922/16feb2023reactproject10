//1. Import Area
import React, { Component } from 'react'
import Nav from './Nav'
//2. Definition Area
export default class Header extends Component {
    //1. Properties
    //2. Constructor
    //3. Methods
    render() {
        return (
            <header>
                <div className="container">
                    <Nav />
                </div>
            </header>
        )
    }
}
//3. Export Area
//3.1 Default Export Area
//3.2 Named Export Area