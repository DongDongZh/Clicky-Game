import React from "react";
import Nav from "../Navbar";
import Card from "../Card"; 
import cards from "../../clickycards.json"; 
import "./style.css"; 
var shuffle = require('shuffle-array'); 


// By extending the React.Component class, Counter inherits functionality from it
class Cards extends React.Component {
  // Setting the initial state of the component
  state = {
    hint: `Click an image to begin!`,
    currentScore: 0,
    topScore: 0,
    cards,
    alreadyClickedId : [],
  };
  
  cardClick = (id) => {
    // We always use the setState method to update a component's state
    // this.setState({ hint: id });
    // if the image / id is already clicked 
    if (this.state.alreadyClickedId.includes(id)){
      //reset the game 
      this.setState({hint:"You guessed incorrectly!", currentScore:0, alreadyClickedId:[]});
    }
    // if guessed correctly 
    else{
      this.setState({hint:"You guessed correctly!"});
      this.setState({currentScore:this.state.currentScore+1});
      // update the top score only when it's smaller than current score 
      if (this.state.topScore<this.state.currentScore+1){
        this.setState({topScore:this.state.currentScore+1})
      }
      // push the currently guessed id to the aready guessed id array 
      this.state.alreadyClickedId.push(id); 
    }
    // the condition of wining
    // because react is slow in updating scores so there is a +1
    if (this.state.currentScore+1 === 12){
      this.setState({hint:"You win!", currentScore:0, alreadyClickedId:[]}); 
    }
    // npm shuffle package (shuffle an array)
    this.setState({cards:shuffle(this.state.cards)}); 
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className = "cards">
        <Nav 
          hint = {this.state.hint}
          currentScore={this.state.currentScore}
          topScore = {this.state.topScore}/>
          
        <div className="cards-container">
          {this.state.cards.map(x => (
            <Card
              id={x.id}
              imgUrl={x.imageUrl} 
              onClick={this.cardClick}
            />
          ))}
          {/* <Card
              onClick={this.cardClick}
              id= "3"
              imgUrl="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            /> */}
        </div>
      </div>
    );
  }
}

export default Cards;
