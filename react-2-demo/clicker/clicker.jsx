"use strict";

/* class start*/  // These comments are used to create handouts!
class HelloClicker extends React.Component {
  alertMessage = () => {
    alert('Hello, world!');
  }

  render() {
    return (
      <button onClick={this.alertMessage}>
        Click me
      </button>
    );
  }
}
/* class end */

/* main start */
ReactDOM.render(
  <HelloClicker />,
  document.getElementById('root')
);
/* main end */
