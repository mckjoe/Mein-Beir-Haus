import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  const kegInformation =
    <div>
      <style jsx>{`
        div {
          width: 90%;
          background-color: white;
          display: flex;
          flex-direction: column;
          margin: 0 auto 15px auto;
        }
        img {
          width: 90%;
          margin: 15px auto 0 auto;
        }
        p {
          margin: 0;
        }
        button {
          margin-top: 15px;
        }
      `}</style>
      <div>
        <img src={props.img} />
        <h4>{props.maker} - {props.name}</h4>
        <p>ABV: <em>{props.abv}%</em></p>
        <p>${props.cost}</p>
        <p>{props.pints} pints</p>
      </div>
    </div>
    if (props.currentRouterPath === '/newkeg'){
      return (
        <div onClick={() => {props.onKegSelection(props.kegId);}}>
          {kegInformation}
        </div>
      );
    } else {
      return (
        <div>
          {kegInformation}
        </div>
      );
    }
}

Keg.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string.isRequired,
  maker: PropTypes.string.isRequired,
  abv: PropTypes.number.isRequired,
  cost: PropTypes.string.isRequired,
  pints: PropTypes.number.isRequired,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func,
  kegId: PropTypes.string.isRequired
}

export default Keg;
