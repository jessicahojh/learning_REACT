"use strict";

/* component start */
class BoxedWord extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Make an array of letters in the word
    const letters = this.props.string.split('');

    // Make an array of JSX elements
    const letterDivs = letters.map((letter, idx) => {
      return (
        <div className="letter-box">
          {letter}
        </div>
      );
    });

    return (
      <div id="BoxedLetters">
        {letterDivs}
      </div>
    );
  }
}
/* component end */
