import React from 'react'

const Navbar = () => {
    const brandStyles = {
        fontFamily: "Roboto"
    }
    return (
        <div>
            <nav className="navbar has-background-dark">
            <div className="navbar-brand">
                <h1 className="title has-text-white navbar-item" style={brandStyles}>Match Up!</h1>
            </div>
            </nav>
        </div>
        
    )
}

export default Navbar
