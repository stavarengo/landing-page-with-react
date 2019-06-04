import { Route } from 'react-router-dom';
import React from 'react';

/**
 * This is a route that will let the SSR server knows which status code it needs to response.
 *
 * See more information here: https://reacttraining.com/react-router/web/guides/server-rendering/adding-app-specific-context-information
 *
 * @param code
 * @param children
 * @param others
 * @returns {*}
 */
export default ({ code, children, ...others }) => (
  <Route
    {...others}
    render={({ staticContext }) => {
      if (staticContext) {
        staticContext.status = code;
      }
      return children;
    }}
  />
);
