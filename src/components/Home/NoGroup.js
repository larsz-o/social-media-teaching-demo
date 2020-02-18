import React, { Component } from 'react';

class NoGroup extends Component{
    render(){
        return(
        <div className="warning">
            <div className="warning-text">
            <h1>This is a restricted page.  <img src={require('../images/password.png')} alt="locked" height="50px"/></h1>
           <p>To view your news, add your access number to the URL above. For example: <a href="https://social-risks-demo.herokuapp.com/1">https://social-risks-demo.herokuapp.com/#/1</a></p>
           
            </div>
            
        </div>
        )
    }
}
export default NoGroup; 