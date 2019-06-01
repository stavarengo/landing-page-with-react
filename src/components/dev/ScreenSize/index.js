import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import withWidth from '@material-ui/core/withWidth';

const ScreenSize = withWidth()(({ theme, width, ...other }) => (
  <Tooltip title={`Your screen width is ${width}`} {...other}>
    <IconButton disableRipple>
      <Badge badgeContent={width}>
        <DeveloperModeIcon />
      </Badge>
    </IconButton>
  </Tooltip>
));

export default ScreenSize;
