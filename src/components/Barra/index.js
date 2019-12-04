import React, { Component } from "react";
import { Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { Handle, Track, Tick } from "./extras"; // example render components - source below
import { SlideBar, SliderContainer } from "./style";

const domain = [0, 200];

export default class Barra extends Component {
  render() {
    return (
      <>
        <SliderContainer
          mode={2}
          step={1}
          domain={domain}
          onUpdate={this.props.onUpdate}
          onChange={this.props.onChange}
          values={this.props.values}
          name={this.props.name}
        >
          <Rail>{({ getRailProps }) => <SlideBar {...getRailProps()} />}</Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map(handle => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={domain}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks left={false} right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
          <Ticks count={10}>
            {({ ticks }) => (
              <div className="slider-ticks">
                {ticks.map(tick => (
                  <Tick key={tick.id} tick={tick} count={ticks.length} />
                ))}
              </div>
            )}
          </Ticks>
        </SliderContainer>
      </>
    );
  }
}
