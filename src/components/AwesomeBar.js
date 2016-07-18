import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

export default class AwesomeBar extends Component {
  render() {
    const { place, selectPlace } = this.props;
    function handlePlaceChange(event, index, value) {
      selectPlace(value);
    }
    return (
      <AppBar
        title={
          <DropDownMenu value={place} onChange={handlePlaceChange}>
            <MenuItem value={"kids_zone"} primaryText="Kids Zone" />
            <MenuItem value={"gymnasium"} primaryText="Gymnasium" />
            <MenuItem value={"activity_pool"} primaryText="Activity Pool" />
            <MenuItem value={"lap_pool"} primaryText="Lap Pool" />
          </DropDownMenu>
        }
        iconElementLeft={<IconButton><NavigationMenu /></IconButton>}
      />
    );
  }
}

AwesomeBar.propTypes = {
  place: PropTypes.string.isRequired,
  selectPlace: PropTypes.func.isRequired,
};
