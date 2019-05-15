"use strict";

/**
 * A more advanced version of the dice demo. In this demo, we can roll
 * individual die. We can also roll all dice at the same time!
 *
 * This is a demo of a common design pattern in React. Here's the gist of it:
 * 
 * - We make a parent component that renders children components
 * - Parent component has state, children only have props
 * - Use parent's state to determine value of childrens' props
 */

function getRandomNum(upperLimit) {
  // Get a random number between 1 - upperLimit (exclusive)
  return Math.ceil(Math.random() * upperLimit);
}


// One die. Example:
//   <Die sides="6" value="?" clickHandler={callback} />
class Die extends React.Component {
  constructor(props) {
    super(props); // To use props, we have to pass it as an argument to super
  }

  render() {
    return (
      <button className="die" onClick={props.clickHandler}>
        <i>d{props.sides}</i>
        <b>{props.value}</b>
      </button>
    );
  }
}


class DiceController extends React.Component {
  // A collection of dice.
  //
  // this.props.dice should be a list of objects with the # of sides and value
  // of a die
  //
  // Example:
  //   <DiceController
  //     dice={[
  //       { sides: 4, value: '?' },
  //       { sides: 8, value: '?' }
  //     ]}
  //   />

  constructor(props) {
    super(props);

    this.state = { dice: props.dice };
  }

  getRoll(die) {
    return getRandomNum(die.sides);
  }

  rollDieAt(i) {
    // Make a copy of this.state.dice --- we don't want to modify
    // this.state directly!
    const dice = this.state.dice.slice();
    
    // We want to mutate the object at dice[i] and update its value
    dice[i].value = getRandomNum(dice[i].sides);

    // Update this.state
    this.setState({ dice: dice });
  }

  rollAllDice() {
    const dice = this.state.dice.slice();

    // Change the value of all die in dice
    dice.map(die => {
      die.value = getRandomNum(die.sides);
      return die;
    });

    this.setState({ dice: dice });
  }

  render() {
    const dice = this.state.dice;

    const renderedDice = dice.map((die, i) => {
      // When we click a die, we only want it to update the value for that
      // specific die.
      //
      // To do this, we need to call this.rollDieAt(i), where i is the index of
      // the die.
      return (
        <Die
          key={i}
          sides={die.sides}
          value={die.value}
          clickHandler={() => this.rollDieAt(i)}
        />
      );
    });

    return (
      <div className="DiceController">
        <div className="DiceController-dice">
          {renderedDice}
        </div>
        <button onClick={this.rollAllDice}>
          Roll All
        </button>
      </div>
    );
  }
}
/* end parent component */


/* main-start */
ReactDOM.render(
  (
    <React.Fragment>
      <DiceController />
      <div className="SingleDie-container">
        <SingleDie />
      </div>
    </React.Fragment>
  ),
  document.getElementById('root')
);
/* main-end */
