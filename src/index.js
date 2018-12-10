import React, { Component, Fragment } from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif"
};

class NewLifecycleMethods extends Component {
  state = {
    myDerivedStatePropFromProps: "NO_VALUE",
    fromNextProp: "NO_VALUE"
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      prevState.myDerivedStatePropFromProps === "NO_VALUE" &&
      nextProps.newNextProp === "Im a new prop"
    ) {
      console.log(nextProps);
      return {
        myDerivedStatePropFromProps: "New Value",
        fromNextProp: nextProps.newNextProp
      };
    }
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps.newNextProp !== "NO_VALUE") {
      return console.log("HELLO WORLD");
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps, prevState, snapshot);
  }
  render() {
    return (
      <Fragment>
        <h3>static getDerivedStateFromProps(nextProps, prevState)</h3>
        <p>
          The new function which main responsibility is ensuring that the state
          and props are in sync for when it is required. It’s main job is
          replacing componentWillReceiveProps
        </p>
        <p>
          This will be updated from getDerivedStateFromProps{" "}
          {this.state.myDerivedStatePropFromProps} {this.state.fromNextProp}
        </p>
      </Fragment>
    );
  }
}

const App = () => (
  <div style={styles}>
    <h1>New Lifecycle Methods</h1>
    <NewLifecycleMethods newNextProp="Im a new prop" />
  </div>
);

render(<App />, document.getElementById("root"));
