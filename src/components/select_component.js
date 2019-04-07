import React from 'react';


class SelectComponent extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      selectedOption: this.props.selectedOption,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(selectedOption.target);
    this.props.onSelect(
      {
        value : selectedOption.target.value,
        label :  selectedOption.target.value
      });
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <div>
      <span>{this.props.label} </span>
      <select value={this.state.selectedOption.value} onChange={this.handleChange}>
       { this.props.selectOptions.map((selectOption) =>
         <option value={selectOption.value} key={selectOption.value}>{selectOption.label}</option>) }
      </select>
      </div>
    );
  }
}

export default SelectComponent
