import React, { PropTypes } from 'react';
import Swipeable from 'react-swipeable';
import BigDate from './BigDate';
import * as style from './TimeTable.scss';

// The events are absolute positioned relative to the parent div
// https://css-tricks.com/absolute-positioning-inside-relative-positioning/
const divStyle = {
  position: 'relative',
};

function toPercent(n) {
  // convert a float point to the percent
  const f = parseFloat(n) * 100;
  return `${f}%`;
}

const TimeTable = ({ place, date, schedule, nextDay, previousDay }) =>
  <Swipeable
    onSwipedLeft={nextDay}
    onSwipedRight={previousDay}
  >
    <div style={divStyle}>
      <BigDate date={date} />
      <table id="timetable">
        <tbody>
          {['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM',
            '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM',
            '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM',
            '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM',
          ].map(label =>
            <tr>
              <th>{label}</th>
              <td>&nbsp;</td>
            </tr>
          )}
        </tbody>
      </table>
      {
        // insert events
        schedule[place][date.format('dddd')].map(e => {
          const left = toPercent((e.left || 0.0) * 0.8 + 0.2);
          const width = toPercent((e.width || 1.0) * 0.8);
          const eventStyle = {
            top: `${e.start / 0.24}%`,
            left,
            width,
            height: `${(e.end - e.start) / 0.24}%`,
            backgroundColor: '#8FDAFF',
          };
          return <div className="event" style={eventStyle}>{e.title}</div>;
        })
      }
    </div>
  </Swipeable>;

TimeTable.propTypes = {
  place: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  schedule: PropTypes.object.isRequired,
  nextDay: PropTypes.func.isRequired,
  previousDay: PropTypes.func.isRequired,
};

export default TimeTable;
