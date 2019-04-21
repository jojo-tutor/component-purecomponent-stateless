import React from "react";
import PropTypes from "prop-types";

let renderCount = 0;
const StatelessComponent = props => {
  renderCount += 1;
  const propsString = JSON.stringify(props, null, 4);

  return (
    <div className="section">
      <div className="title">Stateless Component</div>
      <div className="subtitle">(Child 3)</div>

      <div className="group empty" />

      <div className="group empty" />

      <div className="group">
        <div className="group-label">renderCount</div>
        <pre className="count">{renderCount}</pre>
      </div>

      <div className="group">
        <div className="group-label">props</div>
        <pre>{propsString}</pre>
      </div>

      <div className="group empty" />
    </div>
  );
};

StatelessComponent.propTypes = {
  name: PropTypes.string
};

export default StatelessComponent;
