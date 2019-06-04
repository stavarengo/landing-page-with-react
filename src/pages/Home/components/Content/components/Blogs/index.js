import React, { Component } from 'react';
import { defineMessages } from 'react-intl.macro';
import { injectIntl } from 'react-intl';
import { Card, CardContent, CardFooter, CardHeader } from '../../../../../../components/Card';
import service from './services';
import pencilIcon from '../../../../../../components/Icon/assets/pencil.svg';
import { List, ListItem, ListItemAvatarImg, ListItemText } from '../../../../../../components/List';
import favoriteIcon from '../../../../../../components/assets/favorites.png';
import commentsIcon from '../../../../../../components/assets/comments.svg';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const i18nMsg = defineMessages({
  title: {
    id: 'HomeContent_Blogs_Title',
    defaultMessage: 'Blogs',
  },
  footer: {
    id: 'HomeContent_Blogs_Footer',
    defaultMessage: 'More blogs',
  },
});

class News extends Component {
  render() {
    const { intl, ...other } = this.props;
    const blog = service();

    return (
      <Card {...other}>
        <CardHeader icon={pencilIcon} title={intl.formatMessage(i18nMsg.title)} />
        <CardContent>
          <List>
            <ListItem alignItems={'flex-start'}>
              <ListItemAvatarImg
                src={blog.author.picture.src}
                height={blog.author.picture.h}
                width={blog.author.picture.w}
                marginRight={4}
              />
              <ListItemText primary={blog.author.name} secondary={intl.formatDate(blog.post.date)} />
              <ListItemSecondaryAction style={{ top: '18px', transform: 'none' }}>
                <img src={favoriteIcon} alt="" />
                <img src={commentsIcon} alt="" />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemText primary={blog.post.title} secondary={blog.post.description} />
            </ListItem>
          </List>
        </CardContent>

        <CardFooter text={intl.formatMessage(i18nMsg.footer)} />
      </Card>
    );
  }
}

export default injectIntl(News);
