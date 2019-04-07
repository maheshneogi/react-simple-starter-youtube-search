import React, {Component} from 'react';

class InputComponent extends Component{
    constructor (props){
      super(props);
      this.state = {
        value : this.props.defaultValue
      };
    }
    render() {
      return (
      <div className="input-element">
      <span>{this.props.label}</span>
       <input
        value={this.state.value}
        onChange={event => this.onValueChange(event.target.value)}/>
      </div>
    );
    }

    onValueChange = (value) => {
      this.setState({value});
      this.props.onInputChange(value);
    }
}

export default InputComponent;
