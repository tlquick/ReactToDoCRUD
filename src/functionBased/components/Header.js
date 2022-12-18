import React from "react"

const Header = ()=>{
    const headerStyle={
        padding:"20px 0",
        lineHeight:"1.5rem",
    }
    return(
        <header style={headerStyle}>
            <h1
            style={{
                fontSize:"6rem",
                fontWeight:"600",
                marginBottom:"2rem",
                marginTop: "1rem",
                lineHeight: "1rem",
                color: "#ececec",
                textTransform: "lowercase",
                textAlign: "center",
            }} >
                todos
            </h1>
        </header>
    )
}
export default Header