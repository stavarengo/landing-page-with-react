import React, { Component } from 'react';
import { defineMessages } from 'react-intl.macro';
import { injectIntl } from 'react-intl';
import pencilIcon from '../../../../../../components/Icon/assets/pencil.svg';
import { Card, CardContent, CardFooter, CardHeader } from '../../../../../../components/Card';
import { List, ListItem } from '../../../../../../components/List';
import Box from '@material-ui/core/Box';
import PostEditor from './components/PostEditor';
import LastPostPreview from './components/LastPostPreview';

const i18nMsg = defineMessages({
  title: {
    id: 'HomeContent_Microblog_Title',
    defaultMessage: 'Microblog',
  },
  footer: {
    id: 'HomeContent_Microblog_Footer',
    defaultMessage: 'Show more',
  },
});

class Microblog extends Component {
  render() {
    const { intl, ...other } = this.props;

    return (
      <Card {...other}>
        <CardHeader icon={pencilIcon} title={intl.formatMessage(i18nMsg.title)} />
        <CardContent>
          <List>
            <ListItem>
              <Box mb={5}>
                <PostEditor />
              </Box>
            </ListItem>
            <LastPostPreview />
          </List>
        </CardContent>
        <CardFooter text={intl.formatMessage(i18nMsg.footer)} />
      </Card>
    );
  }
}

export default injectIntl(Microblog);
