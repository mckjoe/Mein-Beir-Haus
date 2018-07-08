import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationStep(props){
  return(
    <div>
      <style jsx>{`
        div {
          color: white;
          padding-left: 5px;
          padding-right: 5px;
        }
        input {
          margin: 0 15px 15px 15px;
        }
        input:nth-of-type(1) {
          margin-left: 10px;
        }
        button {
          margin-left: 15px;
        }
      `}</style>
      <div>
        <h3>This area is reserved for employees only.</h3>
        <p>Please sign in with your employee number to proceed to adding a new keg.</p>
        <input type="text" placeholder="employee number"/>
        <input type='password' placeholder='pin number'/>
        <button onClick={props.onEmployeeConfirmation}>Confirm</button>
      </div>
    </div>
  )
}

ConfirmationStep.propTypes = {
  onEmployeeConfirmation: PropTypes.func
}

export default ConfirmationStep;
