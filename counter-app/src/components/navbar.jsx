import React, { Component } from 'react';

const Navbar =({totalCounters}) => {
        return (
            <nav>
                <a>
                    Navbar 
                    <span> You have {totalCounters} counters</span>
                </a>
            </nav>
        )
}



export default Navbar;