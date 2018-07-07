import React from 'react';
import Keg from './Keg';

var masterKegList = [
  {
    img: 'https://stillmankbrewing.com/wp-content/uploads/2018/03/Squeezins-300x300.png',
    name: 'MGD',
    maker: 'Miller',
    abv: 4.66,
    cost: '3.00',
    pints: 124
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVWEzweNWFIf_y4Vr2Jp3lzVejwszrND5pB2-4SQkV9lUyQfUR',
    name: "800 HG",
    maker: 'Olde Englilsh',
    abv: 7.5,
    cost: '2.00',
    pints: 124
  },
  {
    img: 'https://hips.hearstapps.com/pop.h-cdn.co/assets/cm/15/05/54cb236e6459e_-_xmas-beer-1213-mdn.jpg',
    name: 'Best Ice',
    maker: 'Milwaukees Best',
    abv: 6.9,
    cost: '3.00',
    pints: 124
  }
];

function KegList(){
  return(
    <div>
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }
      `}</style>
      <hr/>
      <div className="grid">
      {masterKegList.map((keg, index) =>
        <Keg img={keg.img}
          name={keg.name}
          maker={keg.maker}
          abv={keg.abv}
          cost={keg.cost}
          pints={keg.pints}
          key={index} />
      )}
      </div>
    </div>
  )
}

export default KegList;
