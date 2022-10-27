import React, { Component } from 'react';

class ClassCard extends Component {

    constructor() {
        super();
        this.state = {data: "Class"};
      }
      render() {
        return(
            <div className="card card2">
                <h1>This is created using {this.state.data} Component</h1>
                <p className='card-para'>This is done using external CSS</p>
                <p style={{color:"blue",fontFamily:"cursive",fontSize: "large"}}>This is done using internal CSS</p>
             </div> 
        )
      }
    
}

export default ClassCard;
