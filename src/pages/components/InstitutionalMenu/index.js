import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ListOfLinks from './components/ListOfLinks';
import ListOfIcons from './components/ListOfIcons';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';

class InstitutionalMenu extends Component {
  static propTypes = {
    /**
     * Set if the items of the menu should be rendered.
     * If `false`, only the "icons buttons" will be rendered.
     */
    renderMenuSandwich: PropTypes.bool,
    /**
     * Callback invoked when the users clicks in the menu sandwich button.
     */
    onSandwichMenuClick: PropTypes.func.isRequired,
    /**
     * @see ListOfIcons.PropTypes.languages
     */
    languages: PropTypes.arrayOf(PropTypes.object),
    /**
     * List of items to display in the menu.
     */
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render() {
    const { languages, items, renderMenuSandwich, onSandwichMenuClick, ...other } = this.props;

    return (
      <Box borderBottom={1} borderColor={'#ebf0f4'} clone p={1}>
        <Grid container alignItems={'center'} {...other}>
          <Grid item>{this.getMenuItemsOrSandwichIcon(renderMenuSandwich, items, onSandwichMenuClick)}</Grid>
          <Grid item xs>
            <ListOfIcons justify={'flex-end'} languages={languages} />
          </Grid>
        </Grid>
      </Box>
    );
  }

  getMenuItemsOrSandwichIcon(renderMenuSandwich, items, onSandwichMenuClick) {
    if (renderMenuSandwich) {
      return (
        <IconButton onClick={onSandwichMenuClick}>
          <MenuIcon fontSize={'large'} />
        </IconButton>
      );
    }

    return <ListOfLinks items={items} />;
  }
}

export default InstitutionalMenu;
