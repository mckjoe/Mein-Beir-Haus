import React from 'react';
import KegList from './KegList'
import LocationInfo from './LocationInfo';

function Home() {
  return(
    <div>
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
        }
        @media screen and (max-width: 300px) {
          .grid {
            display: flex;
            flex-direction: column;
          }
        }
      `}</style>
      <div className="grid">
        <KegList />
        <LocationInfo />
      </div>
    </div>
  )
}

export default Home;
