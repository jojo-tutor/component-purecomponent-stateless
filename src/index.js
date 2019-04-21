import React from "react";
import ReactDOM from "react-dom";
import Component from "./Component";
import PureComponent from "./PureComponent";
import StatelessComponent from "./StatelessComponent";

import "./styles.scss";

class App extends React.Component {
  state = {
    name: "",
    inputValue: ""
  };

  updateName = e => {
    e.preventDefault();
    this.setState(({ inputValue }) => ({ name: inputValue }));
  };

  updateInputValue = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  render() {
    const { name } = this.state;
    const stateString = JSON.stringify(this.state, null, 4);

    return (
      <div className="parent">
        <div className="title">Parent</div>

        <div className="section parent">
          <div className="group">
            <form autoComplete="off" onSubmit={this.updateName}>
              <div className="form-group">
                <label htmlFor="inputValue">Name: </label>
                <input
                  id="inputValue"
                  type="text"
                  onChange={this.updateInputValue}
                />
              </div>
              <button type="submit">Update Name</button>
            </form>
          </div>

          <div className="group last">
            <div className="group-label">this.state</div>
            <pre>{stateString}</pre>
          </div>
        </div>

        <div className="children">
          <PureComponent name={name} />
          <Component name={name} />
          <StatelessComponent name={name} />
        </div>

        <div className="note">
          *** Take note on the Child 1 (React.PureComponent), eventhough we did
          not change the "Age" input and we press many times the "Update Age"
          button, the "setStateCount" is still incremented but does not reflect
          in the browser since there is no re-render, for it to display the
          latest value, we need to change the age.
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
