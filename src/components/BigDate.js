import moment from 'moment';
import React, { Component, PropTypes } from 'react'
import {lightBlue500} from 'material-ui/styles/colors'

const divStyle = {
  textTransform: "uppercase",
  textAlign: "center",
  background: "rgba(255, 255, 255, 0.8)",
  fontFamily: "Roboto, sans-serif",
  fontSize: '120%',
  fontWeight: 500,
  color: lightBlue500,
  position: "absolute",
  width: "20%",
  paddingTop: "10px",
  paddingBottom: "10px",
  top: 0
}

const dayStyle = {
  fontSize: '150%'
}

export default class BigDate extends Component {
  render() {
    const {date} = this.props
    return (
      <time datetime="{date}" style={divStyle}>
        <div>
          {date.format('ddd')}
        </div>
        <div style={dayStyle}>
          {date.format('DD')}
        </div>
        <div>
          {date.format('MMM')}
        </div>
      </time>
    )
  }
}
