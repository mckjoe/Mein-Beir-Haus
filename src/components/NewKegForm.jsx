import React from 'react';

function NewKegForm(){
  let _img = null;
  let _name = null;
  let _maker = null;
  let _abv = null;
  let _cost = null;
  let _pints = null;

  function handleNewKegFormSubmission(e) {
    e.preventDefault();
    console.log(_img.value);
    console.log(_name.value);
    console.log(_maker.value);
    console.log(_abv.value);
    console.log(_cost.value);
    console.log(_pints.value);
    _img.value = '';
    _name.value = '';
    _maker.value = '';
    _abv.value = '';
    _cost.value = '';
    _pints.value = '';
  }

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
        <form onSubmit={handleNewKegFormSubmission}>
          <input type="text" id="img" placeholder="enter image url" ref={(input) => {_img = input;}} />
          <input type="text" id="name" placeholder="enter beer name" ref={(input) => {_name = input;}}/>
          <input type="text" id="maker" placeholder="enter maker name" ref={(input) => {_maker = input;}} />
          <input type="text" id="abv" placeholder="enter alcohol by volume" ref={(input) => {_abv = input;}} />
          <input type="text" id="cost" placeholder="enter cost" ref={(input) => {_cost = input;}} />
          <input type="text" id="pints" placeholder="enter pint number" ref={(input) => {_pints = input;}} />
          <button type="submit">Add Keg</button>
        </form>
      </div>
    </div>
  )
}

export default NewKegForm;
