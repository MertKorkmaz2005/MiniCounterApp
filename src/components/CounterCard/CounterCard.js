import React from "react";
import "./CounterCard.css"

class CounterCard extends React.Component{

    constructor(){
        super();
        this.state = {number: 0};
    }

    increase = () =>{
      this.setState({number: this.state.number + 1})
    }

    decrease = () =>{
        this.setState({number: this.state.number - 1})
       
     }

     render(){
        return(
            <article className="counter">
             <section className="counter__number">
                 <h1 id="js--number" class="counter__value">{this.state.number}</h1>
             </section>
             <section class="counter__buttons">
                 <button onClick={this.decrease} className="counter__button counter__button--decrease">Decrease</button>
                 <button onClick={this.increase} className="counter__button counter__button--increase">Increase</button>
             </section>
            </article>
         );

     } 
}

export default CounterCard