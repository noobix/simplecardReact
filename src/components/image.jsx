import '../App.css'
import React from 'react'
//import Picture from '../pexels-djalma-paiva-armelin-705301c.jpg'

let img = (props) => {
    return(
    <div className="imgCard">
            <img src={props.path} alt="..."/>
        </div>
    )
}
export default img