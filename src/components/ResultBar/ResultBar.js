import React from 'react';

class ResultBar extends React.Component {
  state = {
    result: this.props.result
  }

  extractNums = str => {
    const regex = /[0-9]*/;
    return str.match(regex);
  }

  onInputChange = e => {
    this.props.onInputChange(Number(this.extractNums(e.target.value)));
  }

  onFormSubmit = e => {
    e.preventDefault();
  }

  inputValueHandler() {
    if (!this.props.result) return this.props.value;
    return this.props.result
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            className="input"
            value={this.inputValueHandler()}
            onChange={this.onInputChange}
            onClick={e => e.target.select()}
          />
        </form>
      </div>
    )
  }
}

export default ResultBar;