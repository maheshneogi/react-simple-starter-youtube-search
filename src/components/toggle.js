import React, { Component } from "react";


export default class Toggle extends Component {
   constructor (props){
       super(props);
       this.state = {
           checked: this.props.checked
       }
   }

  toggleChange =  (event) => {
      console.log(this.state.checked)
    this.setState({checked : !this.state.checked});
    this.props.onChange(this.state.checked);
    console.log(this.state)

 };
   render() {
       const { checked } = this.state;
       return (
           <div>
               <span>{this.props.label} </span>
               <input type="checkbox"
                      checked={this.state.checked}
                      onChange={(event) => this.toggleChange(event)}

               />
           </div>
       );
   }
}
