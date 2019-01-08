import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';

class Decrement extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stateNum: props.num
    }

  }
  handleClick = () => {
    if(this.state.stateNum == 0){
      alert("Cannot be less than zero");
      return;
    }
    this.setState({
      stateNum: this.state.stateNum - 1
    });
  }

  render() {
    var num = this.state.stateNum;
    return(
      <div>
        <div id="text"><h1>{num}</h1></div>
        <button id="button" onClick={this.handleClick }>Decrement</button>
      </div>

    );
  }
}

Decrement.propTypes = {
  num: PropTypes.number.isRequired
}

ReactDOM.render(
  <Decrement num={5} />,
  document.getElementById('root')
);
