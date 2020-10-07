import React from 'react'

const Header = () => {

    const headerStyle = {
        padding: "1.25rem 0",
        lineHeight: "2em",
    }

    return (
        <header style={headerStyle}>
            <h1 style={{ fontSize: "1.5rem", marginBottom: ".9rem" }}>Simple Todo App</h1>
            <p style={{ fontSize: "1.2rem" }}>Please add to-dos item(s) through the input field</p>
        </header>
    )
}

export default Header