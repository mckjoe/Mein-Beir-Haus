import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){
  console.log(props.kegList);
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
      {props.kegList.map((keg) =>
        <Keg img={keg.img}
          name={keg.name}
          maker={keg.maker}
          abv={keg.abv}
          cost={keg.cost}
          pints={keg.pints}
          currentRouterPath={props.currentRouterPath}
          key={keg.id} />
      )}
      </div>
    </div>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string
}

export default KegList;
