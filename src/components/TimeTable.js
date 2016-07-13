import React, { Component, PropTypes } from 'react'
import BigDate from './BigDate'


// https://css-tricks.com/absolute-positioning-inside-relative-positioning/
const divStyle = {
  position: 'relative'
}

const tableStyle = {
  width: '100%',
  maxWidth: '100%'
}

const tdStyle = {
  borderTop: '1px solid #ccc',
  padding: '1.25em',
  width: 'auto'
}

const thStyle = {
  verticalAlign: 'top',
  paddingTop: '4px',
  width: '20%',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 200,
  fontSize: '90%',
  color: '#AAA'
}



export default class TimeTable extends Component {
  render() {
    const {place, date} = this.props
    const labels = [
      '12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM',
      '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM',
      '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM',
      '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM']

    // fake events
    const events = [{
      start: 8,
      end: 10.5,
      title: "Swim Lessons"
    }, {
      start: 10.5,
      end: 15,
      title: "Rec swim with slide"
    }, {
      start: 15,
      end: 15.5,
      title: "Reserved for Summer Camp"
    },{
      start: 15.5,
      end: 19,
      title: "Swim Lessons"
    },{
      start: 19,
      end: 21.5,
      title: "Rec swim with slide"
    }]

    return (
      <div style={divStyle}>
        <BigDate date={date} />
        <table style={tableStyle}>
          <tbody>
            {labels.map(label =>
              <tr>
                <th style={thStyle}>{label}</th>
                <td style={tdStyle}>&nbsp;</td>
              </tr>
            )}
          </tbody>
        </table>
        {// insert events
          events.map(e => {
            const eventStyle = {
              backgroundColor: '#8FDAFF',
              border: '1px solid #aaa',
              position: 'absolute',
              top: e.start / 0.24 + '%',
              height: (e.end - e.start) / 0.24 + '%',
              left: '20%',
              width: '80%'
            }
            return <div style={eventStyle}>{e.title}</div>
          })
        }

      </div>
    )
  }

}
