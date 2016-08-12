import React, { PropTypes } from 'react';
import Swipeable from 'react-swipeable';
import BigDate from './BigDate';
import {red300, purple300, indigo300, blue300, cyan300,teal300,
    green300, lime300, yellow300, amber300, orange300,
    deepOrange300 } from 'material-ui/styles/colors';
import * as style from './TimeTable.scss';

// The events are absolute positioned relative to the parent div
// https://css-tricks.com/absolute-positioning-inside-relative-positioning/
const divStyle = {
  position: 'relative',
};

// The color for each room
const roomColors = {
  CR: red300,
  LG: purple300,
  SG: indigo300,
  LS: blue300,
  GF1: cyan300,
  GF2: teal300,
  RR: green300,
  AP: lime300,
  LP: yellow300,
  OS: orange300,
};

function toPercent(n) {
  // convert a float point to the percent
  const f = parseFloat(n) * 100;
  return `${f}%`;
}

const TimeTable = ({ date, schedule, nextDay, previousDay }) =>
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
        // insert events, the events data are stored in the following fashion:
        // each event is encoded as [name, duration, meta]
        //  - name: the event name, such as "Zumba Gold"
        //  - duration, the time frame in 24h: [9.75, 10.75]
        //  - meta(optional):
        //     - offset: the offset of the left boundary, default 0
        //     - width: the width of the event, default 1.0
        //     - comment: the extra comment, such as "by Sarah"
        //     - room: such as LG, this will override the background color.
        // The events are organized in day of week dict.
        //
        // The background color is determined by the colors.json, which maps the
        // name to a color code.

        schedule[date.format('dddd')].map(e => {
          const [title, [start, end], options] = e;
          const meta = options || {};
          const left = toPercent((meta.left || 0.0) * 0.8 + 0.2);
          const width = toPercent((meta.width || 1.0) * 0.8);
          const eventStyle = {
            top: `${start / 0.24}%`,
            left,
            width,
            height: `${(end - start) / 0.24}%`,
            backgroundColor: roomColors[meta.room] || '#8FDAFF',
          };
          return <div className="event" style={eventStyle}>{title}</div>;
        })
      }
    </div>
  </Swipeable>;

TimeTable.propTypes = {
  date: PropTypes.object.isRequired,
  schedule: PropTypes.object.isRequired,
  nextDay: PropTypes.func.isRequired,
  previousDay: PropTypes.func.isRequired,
};

export default TimeTable;
