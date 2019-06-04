import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl.macro';
import TextField from '../../../../../../components/inputs/TextField';
import Button from '../../../../../../components/inputs/Button';
import Grid from '@material-ui/core/Grid';
import cameraIcon from './assets/camera.png';
import linkIcon from './assets/link.png';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  textField: {
    border: `${theme.typography.pxToRem(2)} solid #DAE4EE`,
  },
});

class PostEditor extends Component {
  render() {
    const { classes, ...other } = this.props;

    return (
      <Grid container {...other}>
        <Grid item xs={12}>
          <TextField fullWidth multiline rows={8} className={classes.textField} />
        </Grid>

        <Grid item xs>
          <Box mt={2}>
            <Grid container alignItems={'center'}>
              <Grid item xs style={{ lineHeight: 0 }}>
                <IconButton>
                  <img src={cameraIcon} alt="" />
                </IconButton>
                <IconButton>
                  <img src={linkIcon} alt="" />
                </IconButton>
              </Grid>
              <Grid item>
                <Button color={'primary'} variant={'contained'}>
                  <FormattedMessage id={'HomeContent_Microblog_PostEditor_PostButton'} defaultMessage={'Publish'} />
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(PostEditor);
