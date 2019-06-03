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
    expanded: false,
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

    let expanded = 0;
    if (this.state.expanded !== false) {
      expanded = this.state.expanded;
    }

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
    if (!isExpanded && panel === this.state.expanded) {
      // The user is trying to close the current panel.
      // For now, this component does not allows to close all the panels.
      // It must always have one panel opened.
      return;
    }

    this.setState({ expanded: isExpanded ? panel : false });
  };
}
