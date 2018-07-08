import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){
  return(
    <div>
      <style jsx>{`
        p {
          color: white;
        }
        .detailView {
          display: flex;
        }
        .flex {
          padding: 10px;
        }
        button {
          text-align: center;
          margin: 0 5px;
        }
        img {
          width: 200px;
          height: 200px;
        }
      `}</style>
      <div className="detailView">
        <img src={props.selectedKeg.img} />
        <div className="flex">
          <h2>{props.selectedKeg.maker} - {props.selectedKeg.name}</h2>
          <p></p>
          <p>{props.selectedKeg.abv}% Alcohol By Volume</p>
          <p>${props.selectedKeg.cost}</p>
          <p>{props.selectedKeg.pints} Remaining in current keg</p>
          <button>Sell Pint</button>
          <button>Close Window</button>
        </div>
      </div>
    </div>
  )
}

KegDetail.propTypes = {
  selectedKeg: PropTypes.object
}

export default KegDetail;
