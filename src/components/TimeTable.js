import React, { PropTypes } from 'react';
import Swipeable from 'react-swipeable';
import BigDate from './BigDate';


// https://css-tricks.com/absolute-positioning-inside-relative-positioning/
const divStyle = {
  position: 'relative',
};

const tableStyle = {
  width: '100%',
  maxWidth: '100%',
};

const tdStyle = {
  borderTop: '1px solid #ccc',
  padding: '1.25em',
  width: 'auto',
};

const thStyle = {
  verticalAlign: 'top',
  paddingTop: '4px',
  width: '20%',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 200,
  fontSize: '90%',
  color: '#AAA',
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
      <table style={tableStyle}>
        <tbody>
          {['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM',
            '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM',
            '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM',
            '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM',
          ].map(label =>
            <tr>
              <th style={thStyle}>{label}</th>
              <td style={tdStyle}>&nbsp;</td>
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
            backgroundColor: '#8FDAFF',
            border: '1px solid #aaa',
            position: 'absolute',
            top: `${e.start / 0.24}%`,
            left,
            width,
            height: `${(e.end - e.start) / 0.24}%`,
            boxSizing: 'border-box',
            padding: '10px',
          };
          return <div style={eventStyle}>{e.title}</div>;
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
