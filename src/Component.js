import React from "react";
import PropTypes from "prop-types";

let renderCount = 0;
let setStateCount = 0;
class Component extends React.Component {
  state = {
    age: "",
    inputValue: ""
  };

  updateAge = e => {
    e.preventDefault();
    setStateCount += 1;
    this.setState(({ inputValue }) => ({ age: inputValue }));
  };

  updateInputValue = e => {
    const { id, value } = e.target;
    setStateCount += 1;
    this.setState({ [id]: value });
  };

  render() {
    renderCount += 1;
    const propsString = JSON.stringify(this.props, null, 4);
    const stateString = JSON.stringify(this.state, null, 4);

    return (
      <div className="section">
        <div className="title">React.Component</div>
        <div className="subtitle">(Child 2)</div>

        <div className="group">
          <form autoComplete="off" onSubmit={this.updateAge}>
            <div className="form-group">
              <label htmlFor="inputValue">Age: </label>
              <input
                id="inputValue"
                type="number"
                onChange={this.updateInputValue}
              />
            </div>
            <button type="submit">Update Age</button>
          </form>
        </div>

        <div className="group">
          <div className="group-label">setStateCount</div>
          <pre className="count">{setStateCount}</pre>
        </div>

        <div className="group">
          <div className="group-label">renderCount</div>
          <pre className="count">{renderCount}</pre>
        </div>

        <div className="group">
          <div className="group-label">this.props</div>
          <pre>{propsString}</pre>
        </div>

        <div className="group">
          <div className="group-label">this.state</div>
          <pre>{stateString}</pre>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  name: PropTypes.string
};

export default Component;
