import React from 'react';
import ConfirmationStep from './ConfirmationStep';
import NewKegForm from './NewKegForm';

class NeweKegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    }
    this.handleEmployeeConfirmation=this.handleEmployeeConfirmation.bind(this);
  }

  handleEmployeeConfirmation(){
    this.setState({formVisibleOnPage: true})
    alert('Welcome back! Please remember to verify all information is accurate before submitting new entries!');
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewKegForm />;
    } else {
      currentlyVisibleContent = <ConfirmationStep onEmployeeConfirmation={this.handleEmployeeConfirmation} />
    }
    return(
      <div>
        <style jsx>{`
          div {
            color: white;
          }
        `}</style>
        <div>
          {currentlyVisibleContent}
        </div>
      </div>
    )
  }
}

export default NeweKegControl;
