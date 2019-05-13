import React from "react"
import "./navstyle.css"


function Nav(props) {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="col">
                    <strong><h1 className="title" id="title">Clicky Game</h1></strong>
                </div>
                <div className="col">
                    <h1 className="title" id="middle">Click an Image to Begin</h1>
                </div>
                <div className="col">
                    <h1 className="title">Score: {props.score} | Top Score: {props.topScore}</h1>
                </div>
            </nav>
        </div>

    )
}

export default Nav