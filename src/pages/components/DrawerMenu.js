import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import allMenuItems from './services/allMenuItems';
import { injectIntl } from 'react-intl';
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

class DrawerMenu extends Component {
  static propTypes = {
    /**
     * Callback fired when the user requests the Drawer to be closed.
     */
    onClose: PropTypes.func.isRequired,
  };

  render() {
    const { onClose, intl, classes, ...other } = this.props;

    return (
      <Drawer onClose={onClose} {...other}>
        <div className={classes.list} onClick={onClose}>
          <List>
            {allMenuItems(intl).mainMenu.map((item, index) => (
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
            {allMenuItems(intl).institutionalMenu.map((item, index) => (
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

export default injectIntl(withStyles(styles)(DrawerMenu));
