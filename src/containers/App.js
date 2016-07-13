import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AwesomeBar from '../components/AwesomeBar'
import TimeTable from '../components/TimeTable'
import * as Actions from '../actions'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
  render() {
    const {place, date, actions} = this.props
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <AwesomeBar place={place} selectPlace={actions.selectPlace} />
          <TimeTable place={place} date={date}
           nextDay={actions.nextDay} previousDay={actions.previousDay} />
        </div>
      </MuiThemeProvider>
    )
  }
}

// Bind the state and actions to the props via redux
App.propTypes = {
  place: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    place: state.place,
    date: state.date
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
