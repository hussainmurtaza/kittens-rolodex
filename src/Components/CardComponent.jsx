import React from 'react'
import '../Css/Card.css'


class Card extends React.Component{

    

    render(){
        return(
            <>
            <div className="card-container">
                <img alt='kitten' src={`https://robohash.org/${this.props.name.id}?set=set4&size=180x180`}/>
                <h2>{this.props.name.name}</h2>
                <p>{this.props.name.email}</p> 
            </div>
                
            
            </>
        );
    }

}

export default Card