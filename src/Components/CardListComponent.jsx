import React from "react";
import '../Css/CardList.css'
import Card from "./CardComponent";

class CardList extends React.Component{

    render(){
        return(
            <>
            <div className="cardList">
            {
                this.props.monster.map( monster => (
                    <Card key={monster.id} name = {monster}/>
                ))
            }   
            </div>        
            </>
        );
    }
}

export default CardList