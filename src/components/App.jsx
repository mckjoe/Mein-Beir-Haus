import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Header from './Header';
import KegList from './KegList';
import NewKegControl from './NewKegControl';
import Moment from 'moment';
import Home from './Home';
import FoodList from './FoodList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [
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
      ]
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

  handleAddingNewKegToList(newKeg) {
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  render(){
    return(
      <div>
      <style global jsx>{`
        div {
          background-color: black;
        }
      `}</style>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' render={()=><KegList kegList={this.state.masterKegList} />} />
            <Route path='/newkeg' render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
            <Route path='/food' component={FoodList} />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
