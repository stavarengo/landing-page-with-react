import Typography from '@material-ui/core/Typography';
import React from 'react';
import RouteWithStatus from '../../components/router/RouteWithStatus';
import { FormattedMessage } from 'react-intl.macro';

export default class NotFound extends React.Component {
  render() {
    const { ...other } = this.props;

    return (
      <RouteWithStatus code={404} {...other}>
        <Typography variant="h6">
          <FormattedMessage id="NotFound.404" defaultMessage={'404 - Page not found!'} />
        </Typography>
      </RouteWithStatus>
    );
  }
}
