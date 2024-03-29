// @flow weak

import React, { Component } from "react";
import { Ball, TickVal, Tooltip } from "./style";
import PropTypes from "prop-types";

// *******************************************************
// HANDLE COMPONENT
// *******************************************************
export class Handle extends Component {
  state = {
    showTooltip: false
  };
  render() {
    const {
      domain: [min, max],
      handle: { id, value, percent },
      getHandleProps
    } = this.props;

    const { showTooltip } = this.state;
    return (
      <div>
        <Ball
          percent={percent}
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          {...getHandleProps(id, {
            onTouchEnd: () => {
              this.setState({
                showTooltip: false
              });
            },
            onMouseLeave: () => {
              this.setState({
                showTooltip: false
              });
            },
            onMouseOver: () => {
              this.setState({
                showTooltip: true
              });
            },
            onTouchStart: () => {
              this.setState({
                showTooltip: true
              });
            }
          })}
        >
          {showTooltip && (
            <Tooltip>
              {value}
              <small>min</small>
            </Tooltip>
          )}
        </Ball>
      </div>
    );
  }
}

Handle.propTypes = {
  domain: PropTypes.array.isRequired,
  handle: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  getHandleProps: PropTypes.func.isRequired
};

// *******************************************************
// TRACK COMPONENT
// *******************************************************
export function Track({ source, target, getTrackProps }) {
  return (
    <div
      style={{
        position: "absolute",
        height: 100,
        zIndex: 1,
        backgroundColor: "purple",
        color: "red",
        borderRadius: 4,
        cursor: "pointer",
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`
      }}
      {...getTrackProps()}
    />
  );
}

Track.propTypes = {
  source: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  target: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  getTrackProps: PropTypes.func.isRequired
};

// *******************************************************
// TICK COMPONENT
// *******************************************************
export function Tick({ tick, count, format }) {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          marginTop: 14,
          zIndex: -1,
          width: 1,
          height: 5,
          backgroundColor: "rgb(200,200,200)",
          left: `${tick.percent}%`
        }}
      />
      <TickVal count={count} percent={tick.percent}>
        {format(tick.value)}
      </TickVal>
    </div>
  );
}

Tick.propTypes = {
  tick: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  count: PropTypes.number.isRequired,
  format: PropTypes.func.isRequired
};

Tick.defaultProps = {
  format: d => d
};
