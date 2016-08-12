import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as Actions from '../actions';
import * as gymnasium from '../constants/gymnasium.json';
import * as activity_pool from '../constants/activity_pool.json';
import * as lap_pool from '../constants/lap_pool.json';
import * as group_wellness from '../constants/group_wellness.json';

import AwesomeBar from '../components/AwesomeBar';
import TimeTable from '../components/TimeTable';


// load the normalize.css globally
import 'normalize.css';
import './App.css';

injectTapEventPlugin();

const schedule = {
  gymnasium,
  activity_pool,
  lap_pool,
  group_wellness
};


const App = ({ place, date, actions }) =>
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <AwesomeBar
        place={place} selectPlace={actions.selectPlace}
      />
      <TimeTable
        place={place} date={date} schedule={schedule[place]}
        nextDay={actions.nextDay} previousDay={actions.previousDay}
      />
    </div>
  </MuiThemeProvider>;


// Bind the state and actions to the props via redux
App.propTypes = {
  place: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    place: state.place,
    date: state.date,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
