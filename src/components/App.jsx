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
      masterKegList: {
       '1' : {
          img: 'https://stillmankbrewing.com/wp-content/uploads/2018/03/Squeezins-300x300.png',
          name: 'MGD',
          maker: 'Miller',
          abv: 4.66,
          cost: '3.00',
          pints: 124,
        },
        '2' : {
          img: 'https://stillmankbrewing.com/wp-content/uploads/2018/01/wiscodisco12oz-300x300.jpg',
          name: "800 HG",
          maker: 'Olde Englilsh',
          abv: 7.5,
          cost: '2.00',
          pints: 124,
        },
        '3': {
          img: 'https://hips.hearstapps.com/pop.h-cdn.co/assets/cm/15/05/54cb236e6459e_-_xmas-beer-1213-mdn.jpg',
          name: 'Best Ice',
          maker: 'Milwaukees Best',
          abv: 6.9,
          cost: '3.00',
          pints: 124,
        }
      },
      selectedKeg: null
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleChangingSelectedKeg = this.handleChangingSelectedKeg.bind(this);
    this.handleClosingDetailWindow = this.handleClosingDetailWindow.bind(this);
  }

  handleAddingNewKegToList(newKeg){
    var newMasterKegList = Object.assign({}, this.state.masterKegList, {
      [newKeg.id]: newKeg
    });
    this.setState({masterKegList: newMasterKegList});
  }


  handleChangingSelectedKeg(kegId){
    this.setState({selectedKeg: kegId})
  }

  handleClosingDetailWindow() {
    this.setState({selectedKeg: null})
  }

  render(){
    console.log(this.state.masterKegList)
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

            <Route path='/newkeg' render={(props)=><NewKegControl  kegList={this.state.masterKegList} onNewKegCreation={this.handleAddingNewKegToList} currentRouterPath={props.location.pathname} onKegSelection={this.handleChangingSelectedKeg}
            selectedKeg={this.state.selectedKeg} onCloseDetailWindow={this.handleClosingDetailWindow}/>} />

            <Route path='/food' component={FoodList} />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
