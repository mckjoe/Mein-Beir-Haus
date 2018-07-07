import React from 'React';

function Location(){
  return(

    <div>
      <style jsx>{`
        ul {
          padding: 0;
        }
        li {
          list-style: none;
        }
        div {
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          width: 90%;
          color: white;

        }
      `}</style>
      <div className="location-background">
        <p><strong>Find the Store:</strong></p>
        <ul>
        <li>Address: 400 sw 6th,</li>
        <li>Portland, OR - 97202</li>
        </ul>
      </div>
    </div>
  )
}

export default Location;
