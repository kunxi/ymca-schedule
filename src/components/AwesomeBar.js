import React, { Component, PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

export default class AwesomeBar extends Component {
  handlePlaceChange(event, index, place) {
    const {selectPlace} = this.props
    selectPlace(place)
  }

  render() {
    const {place} = this.props
    console.log(place)
    return (
      <AppBar
        title={
          <DropDownMenu value={place} onChange={this.handlePlaceChange.bind(this)}>
            <MenuItem value={"lap_pool"} primaryText="Lap Pool" />
            <MenuItem value={"kids_zone"} primaryText="Kids Zone" />
            <MenuItem value={"gymnasium"} primaryText="Gymnasium" />
          </DropDownMenu>
        }
        iconElementLeft={<IconButton><NavigationMenu /></IconButton>}
      />
    )
  }
}

