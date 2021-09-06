import React, { Component } from 'react';

export class Card extends Component {
    render() {
        return (
            <span>
              <span class="cardo">
                <div class="card" style={{width: 400,height: 500 ,border: "solid"}}>
                    <img src={this.props.image} class="card-img-top" style={{height: 200 ,width: 300, paddingTop:20, paddingLeft:30}}/>
                    <div class="card-body">
                    <h5 class="card-title">{this.props.heading}</h5>
                    <p class="card-text">{this.props.text}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
               </div>
          </div>
      </span>
  </span>

    
           
        )
    }
}

export default Card 
