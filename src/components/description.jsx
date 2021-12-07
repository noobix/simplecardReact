import '../App.css'
import React from 'react'

class description extends React.Component{
    render(){
        return <div className="description">{this.props.desc}</div>
    }
}
export default description