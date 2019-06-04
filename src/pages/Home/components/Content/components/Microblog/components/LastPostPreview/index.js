import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl.macro';
import { injectIntl } from 'react-intl';
import { ListItem, ListItemAvatarImg, ListItemText } from '../../../../../../../../components/List';
import favoriteIcon from '../../../../../../../../components/assets/favorites.png';
import service from './services';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { withStyles } from '@material-ui/styles';
import Link from '../../../../../../../../components/Link';

const styles = theme => ({
  secondaryActions: {
    top: theme.typography.pxToRem(18),
    transform: 'none',
  },
  coverPicture: {
    maxWidth: '100%',
  },
});

class LastPostPreview extends Component {
  render() {
    const { classes, intl, ...other } = this.props;
    const blog = service();

    return (
      <div {...other}>
        <ListItem>
          <ListItemAvatarImg
            src={blog.author.picture.src}
            height={blog.author.picture.h}
            width={blog.author.picture.w}
            marginRight={4}
          />
          <ListItemText
            primary={blog.author.name}
            secondary={intl.formatDate(blog.post.date, {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            })}
          />
          <ListItemSecondaryAction className={classes.secondaryActions}>
            <img src={favoriteIcon} alt={''} />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText secondary={blog.post.description} />
        </ListItem>
        <ListItem>
          <img src={blog.post.coverPicture} className={classes.coverPicture} alt={''} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <Link color={'inherit'} to={'#'}>
                <FormattedMessage
                  id={'HomeContent_Microblog_Reaction'}
                  defaultMessage={'Read more and reactions ({number})'}
                  values={{ number: 0 }}
                />
              </Link>
            }
          />
        </ListItem>
      </div>
    );
  }
}

export default injectIntl(withStyles(styles)(LastPostPreview));
