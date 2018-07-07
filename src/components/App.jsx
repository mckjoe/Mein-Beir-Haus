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
            <Route exact path='/' component={Home} />
            <Route path='/newkeg' component={NewKegControl} />
            <Route path='/food' component={FoodList} />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
