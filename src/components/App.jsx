import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Header from './Header';
import Moment from 'moment';

class App extends React.Component {



  render(){
    return(
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component='Home' />
          <Route path='/newkeg' component='NewKeg' />
          <Route path='/food' component='FoodList' />
          <Route component={Error404} />
        </Switch>
      </div>
    )
  }
}

export default App;
