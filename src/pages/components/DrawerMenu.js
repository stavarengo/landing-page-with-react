import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Link from '../../components/Link';

const styles = {
  list: {
    minWidth: '15.625rem',
  },
};

let menuItemsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    /**
     * Label of the menu.
     * This text will be shown to the user.
     */
    label: PropTypes.string.isRequired,
    /**
     * The URL to where the user will be redirect when he click in the menu.
     */
    href: PropTypes.string.isRequired,
  })
);

class DrawerMenu extends Component {
  static propTypes = {
    /**
     * Callback fired when the user requests the Drawer to be closed.
     */
    onClose: PropTypes.func.isRequired,
    /**
     * List of items to display as the principal menu.
     */
    mainMenuItems: menuItemsPropType.isRequired,
    /**
     * List of items to display as a secondary menu.
     */
    secondaryMenuItems: menuItemsPropType.isRequired,
  };

  render() {
    const { onClose, mainMenuItems, secondaryMenuItems, classes, ...other } = this.props;

    return (
      <Drawer onClose={onClose} {...other}>
        <div className={classes.list} onClick={onClose}>
          <List>
            {mainMenuItems.map((item, index) => (
              <ListItem button key={index}>
                <ListItemText
                  primary={
                    <Link color={'inherit'} to={item.href}>
                      {item.label}
                    </Link>
                  }
                />
              </ListItem>
            ))}
          </List>
          <Box my={2}>
            <Divider />
          </Box>
          <List>
            {secondaryMenuItems.map((item, index) => (
              <ListItem button key={index}>
                <ListItemText
                  secondary={
                    <Link color={'inherit'} to={item.href}>
                      {item.label}
                    </Link>
                  }
                />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles)(DrawerMenu);
