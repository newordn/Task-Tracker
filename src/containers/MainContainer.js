import React, {Component} from 'react'
import CreateCard from '../components/CreateCard'

class MainContainer extends Component
{
    state = {
        cards : []
    }
    componentDidMount(){
        fetch('http://localhost:3000/cards')
        .then(res=>res.json())
        .then(cards=>this.setState(
            {cards: cards}
        ))
    }
    createNewCard = (input) =>{
        fetch("http://localhost:3000/cards",{
            method : "POST",
            headers : {
                'Content-Type': 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify({title:input})
        }).then(res => res.json())
        .then(newCard=>{
            this.setState({
                cards: [...this.state.cards,newCard]
            })
        })
    }

    render (){
        return (
            <div className="main-container">
                <ToDoCardContainer cards={this.state.cards}/>
                <CreateCard createNewCard={this.createNewCard}/>
            </div>
        )
    }
}