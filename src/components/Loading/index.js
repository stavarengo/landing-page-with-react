import IconError from '@material-ui/icons/Warning';
import LinearProgress from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

/**
 * Offcorse you can use this component manually, but it was created to be used together with
 * [react-loadable](https://github.com/jamiebuilds/react-loadable). More specifically, it was
 * created to be used in the `loading` property of the `react-loadable`, as in the example bellow.
 * ```js
 *  const AsyncAppBar = Loadable({
 *    loader: () => import('./AppBar'),
 *    loading: Loading,
 *  });
 *
 * ```
 *
 * That said, the propTypes of this component were created only to supply all the requirements from
 * the `react-loadable`, thus the value that each property accepts follows documentation form the
 * library.
 *
 * @see https://github.com/jamiebuilds/react-loadable
 * @see https://github.com/jamiebuilds/react-loadable#creating-a-great-loading-component
 */
class Loading extends Component {
  /**
   * These properties were created according to the [react-loadable
   * documentation](https://github.com/jamiebuilds/react-loadable#creating-a-great-loading-component)
   * @type {{timedOut: shim, pastDelay: shim, error}}
   */
  static propTypes = {
    /**
     * This is the only property that does not belong to the `react-loadable` standard.
     * You can use this to customize this component output.
     * . In case you provide a function:
     *   If you provide a function, then this function will receive on object as argument. This
     *   object will contain the attributes `error`, `timedOut` and `pastDelay`. Each of their
     *   values is documented bellow. This function must return what will be rendered or null.
     * . In case you provide a object:
     *   You can provide a object with one or more of the following attributes: `error`, `timedOut`
     *   and `pastDelay`. Each of theses atributes must be a function and they will be called to
     *   render the part they represent, following the `react-loadable` standard.
     */
    render: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({
        error: PropTypes.func,
        timedOut: PropTypes.func,
        pastDelay: PropTypes.func,
      }),
    ]),
    /**
     * From the `react-loadable` documentation:
     *  > Sometimes network connections suck and never resolve or fail, they just hang there
     *  > forever. (...) The loading component will receive a timedOut prop which will be set to
     *  > true when the loader has timed out.
     *
     * @see https://github.com/jamiebuilds/react-loadable#timing-out-when-the-loader-is-taking-too-long
     */
    timedOut: PropTypes.bool,
    /**
     * From the `react-loadable` documentation:
     *  > Sometimes components load really quickly (<200ms) and the loading screen only quickly
     *  > flashes on the screen. (...) So your loading component will also get a pastDelay prop which
     *  > will only be true once the component has taken longer to load than a set delay.
     *
     * @see https://github.com/jamiebuilds/react-loadable#avoiding-flash-of-loading-component
     */
    pastDelay: PropTypes.bool,
    /**
     * From the `react-loadable` documentation:
     *  > When your loader fails, your loading component will receive an error prop which will be an
     *  > Error object (otherwise it will be false).
     *
     * @see https://github.com/jamiebuilds/react-loadable#loading-error-states
     */
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.instanceOf(Error)]),
  };

  render() {
    let { error, timedOut, pastDelay, render, isLoading, ...other } = this.props;

    if (typeof render === 'function') {
      return render({ error, timedOut, pastDelay });
    }

    render = render || {};

    if (error) {
      return render.error ? render.error() : <IconError {...other} color={'error'} />;
    } else if (timedOut) {
      return render.timedOut ? render.timedOut() : <LinearProgress {...other} color={'secondary'} />;
    } else if (pastDelay) {
      return render.pastDelay ? render.pastDelay() : <LinearProgress {...other} color={'primary'} />;
    } else {
      return null;
    }
  }
}

export default Loading;
