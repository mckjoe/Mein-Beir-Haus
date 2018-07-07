import React from 'react';

function NewKegForm(){
  return(
    <div>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          width: 85%;
          margin: 50px auto;
        }
        input {
          margin-bottom: 10px;
          height: 25px;
          border-radius: 5px;
          padding-left: 20px;
        }
        button {
          width: 50%;
          height: 25px;
          margin: 25px auto 30px auto ;
        }
      `}</style>
      <div>
        <form>
          <input type="text" id="img" placeholder="enter image url" />
          <input type="text" id="name" placeholder="enter beer name" />
          <input type="text" id="maker" placeholder="enter maker name" />
          <input type="text" id="abv" placeholder="enter alcohol by volume" />
          <input type="text" id="cost" placeholder="enter cost" />
          <input type="text" id="pints" placeholder="enter pint number" />
          <button>Add Keg</button>
        </form>
      </div>
    </div>
  )
}

export default NewKegForm;
