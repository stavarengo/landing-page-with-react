import React, { Component } from 'react';
import Panel from './Panel';
import Summary from './Summary';
import Details from './Details';
import PropTypes from 'prop-types';

export { default as AccordionPanel } from './Panel';
export { default as AccordionSummary } from './Summary';
export { default as AccordionDetails } from './Details';

export default class Accordion extends Component {
  state = {
    /**
     * It will be an integer or the boolean value `false`.
     * When it is a number, it means the index of the panel expanded.
     * When it is false, it means no panel is expanded.
     */
    expanded: 0,
  };

  static propTypes = {
    /**
     * List of the panels that will be shown.
     */
    panels: PropTypes.arrayOf(
      PropTypes.shape({
        /**
         * The title of the panel.
         */
        summary: PropTypes.string.isRequired,
        /**
         * The content to be shown.
         * It only appears when the panel is opened.
         */
        details: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  render() {
    const { panels, startOpened, ...other } = this.props;

    let expanded = this.state.expanded;

    return (
      <div {...other}>
        {panels.map((item, index) => (
          <Panel key={index} expanded={expanded === index} onChange={this.handleChange(index)}>
            <Summary>{item.summary}</Summary>
            <Details>{item.details}</Details>
          </Panel>
        ))}
      </div>
    );
  }

  handleChange = panel => (event, isExpanded) => {
    this.setState({ expanded: isExpanded ? panel : false });
  };
}
