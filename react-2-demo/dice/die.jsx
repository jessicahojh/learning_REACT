"use strict";

function getRandomNum(upperLimit) {
  return Math.ceil(Math.random() * upperLimit);
}

/* class start */
class Die extends React.Component {
  constructor() {
    super();

    this.state = { value: '?' };  // Set initial value
  }

  roll = () => {
    const rollResult = getRandomNum(this.props.sides);
    
    // Update state in callback
    this.setState({ value: rollResult });
  }

  render() {
    // Use state in render method to change DOM
    return (
      <button className="die" onClick={this.roll}>
        <i>d{this.props.sides}</i>
        <b>{this.state.value}</b>
      </button>
    );
  }
}
/* class end */

/* main start */
ReactDOM.render(
  (
    <div>
      <Die sides="4" />
      <Die sides="6" />
      <Die sides="8" />
      <Die sides="10" />
      <Die sides="12" />
      <Die sides="20" />
    </div>
  ),
  document.getElementById('root')
);
/* main end */
