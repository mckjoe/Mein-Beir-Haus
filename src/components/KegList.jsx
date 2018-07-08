import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){
  return(
    <div>
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }
        @media screen and (max-width: 700px) {
          .grid {
            grid-template-columns: 1fr 1fr;
          }
        @media screen and (max-width: 400px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <hr/>
      <div className="grid">
        {Object.keys(props.kegList).map(function(kegId) {
          var keg = props.kegList[kegId];
          return <Keg img={keg.img}
            name={keg.name}
            maker={keg.maker}
            abv={keg.abv}
            cost={keg.cost}
            pints={keg.pints}
            currentRouterPath={props.currentRouterPath}
            key={kegId}
            onKegSelection={props.onKegSelection}
            kegId={kegId} />

        })}
        </div>
    </div>
  )
}

KegList.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func
}

export default KegList;
