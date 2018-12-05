import React from 'react';

class ResultBar extends React.Component {
  state = {
    result: this.props.result
  }

  extractNums = str => {
    const regex = /[0-9]*/;
    return str.match(regex)[0];
  }

  onFormSubmit = e => {
    e.preventDefault();
  }

  inputValueHandler() {
    if (!this.props.value) return this.props.result;
    return this.props.value;
  }

  render() {
    return (
      <>
        <form onSubmit={this.onFormSubmit}>
          <input
            value={this.inputValueHandler()}
            onChange={e => this.props.onInputChange(this.extractNums(e.target.value))}
            onClick={e => e.target.select()}
          />
        </form>
      </>
    )
  }
}

export default ResultBar;