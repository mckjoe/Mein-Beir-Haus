import React from 'react';
import ConfirmationStep from './ConfirmationStep';
import NewKegForm from './NewKegForm';
import PropTypes from 'prop-types';

class NewKegControl extends React.Component {

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
      currentlyVisibleContent = <NewKegForm kegList={this.props.kegList} onNewKegCreation={this.props.onNewKegCreation} currentRouterPath={this.props.currentRouterPath} onKegSelection={this.props.onKegSelection}
      selectedKeg={this.props.selectedKeg} onCloseDetailWindow={this.props.onCloseDetailWindow}/>;
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

NewKegControl.propTypes = {
  onNewKegCreation: PropTypes.func,
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onKegSelection: PropTypes.func,
  selectedKeg: PropTypes.string,
  onCloseDetailWindow: PropTypes.func
}

export default NewKegControl;
