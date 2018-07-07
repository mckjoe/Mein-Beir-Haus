import React from 'React';

function Hours(){
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
          margin: 5px auto;
          width: 90%;
          color: white;
        }
      `}</style>
      <div>
        <p><strong>As long as it's:</strong></p>
        <ul>
        <li>M-Th 8am til 2am</li>
        <li>F/S 7am til 3am</li>
        <li>Happy Hour ALWAYS</li>
        </ul>
      </div>
    </div>
  )
}

export default Hours;
