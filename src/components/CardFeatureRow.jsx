import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { STATUS_READY } from '../constants/constants';

class CardFeatureRow extends Component {
  static propTypes = {
    featureKey: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleFeatureClick: PropTypes.func.isRequired,
  }

  handleFeatureClick = () => {
    this.props.handleFeatureClick(this.props.featureKey);
  }

  render() {
    const {
      label,
      value,
      status,
    } = this.props;

    const featureValue = status === STATUS_READY ? (
      <a
        className="card-feature-value"
        onClick={this.handleFeatureClick}
      >{value}</a>
    ) : <span>{value}</span>;

    return (
      <div className="card-feature-row">
        <span className="card-feature-label">{label}:</span>
        {featureValue}
      </div>
    );
  }
}

export default CardFeatureRow;
