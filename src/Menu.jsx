import React from "react"
import {Link} from "react-router-dom"

const NavBar = () =>
{
    return (
        <>
        <Link to="/"> Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Service">Service</Link>

        </>
        
    )
}

export default  NavBar