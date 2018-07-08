import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import KegList from './KegList';

function NewKegForm(props){
  let _img = null;
  let _name = null;
  let _maker = null;
  let _abv = null;
  let _cost = null;
  let _pints = null;

  function handleNewKegFormSubmission(e) {
    e.preventDefault();
    props.onNewKegCreation({img: _img.value, name: _name.value, maker: _maker.value, abv: parseInt(_abv.value), cost: _cost.value, pints: parseInt(_pints.value), id: v4() });
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
        div {
          color: black
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
      <KegList kegList={props.kegList} />
    </div>
  )
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func,
  kegList: PropTypes.array
}

export default NewKegForm;
