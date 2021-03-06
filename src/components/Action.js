import React from 'react';

const Action = (props) => (
  <div>
    <button
      class='big-button'
      onClick={ props.handlePick }
      disabled={ !props.hasOptions }
    >
      What should I do?
      </button>
  </div>
);

export default Action;
