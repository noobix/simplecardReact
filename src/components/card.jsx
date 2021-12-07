import '../App.css'
import React from 'react'
import Title from './title'
import Description from './description'
import Image from './image'
import Picture from '../pexels-djalma-paiva-armelin-705301c.jpg'

class card extends React.Component{
    render(){
        let desc="This is a random long text based on react card display"
        return(<div className="card">
                <Image path={Picture} />
                <div>
                <Title name="This is a random title" />
                <Description desc={desc} />
                </div>
            </div>)
    }
}
export default card