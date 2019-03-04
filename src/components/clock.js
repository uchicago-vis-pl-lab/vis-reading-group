import React from 'react';
import Logo from './logo';

import {XYPlot, ArcSeries} from 'react-vis';

const COLORS = [
  '#ead9bf',
  '#566d87',
  '#505772',
  '#ee8166'
];

const PI = Math.PI;
const getSeconds = () => Math.round(new Date().getTime() / 1000);

export default class ClockExample extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0
    };
  }

  componentDidMount() {
    this._timerId = setInterval(() => this.setState({time: getSeconds()}), 100);
  }

  componentWillUnmount() {
    clearInterval(this._timerId);
    this.setState({timerId: false});
  }

  render() {
    const {time} = this.state;
    const seconds = time % 60;
    const minutes = (time / 60) % 60;
    const hours = (time / (60 * 24)) % 12;

    return (
      <div className="flex center clock">
        <div className="floated">
          <XYPlot
            xDomain={[-3, 3]}
            yDomain={[-3, 3]}
            width={200}
            getAngle={d => d.time}
            getAngle0={d => 0}
            height={200}
            margin={0}
          >
            <ArcSeries
              animation={{
                damping: 9,
                stiffness: 300
              }}
              radiusDomain={[0, 3]}
              data={[
                {time: (seconds / 60) * 2 * PI, radius0: 1.5, radius: 1.9, color: 0},
                {
                  time: (minutes / 60) * 2 * PI,
                  radius0: 2.0,
                  radius: 2.4,
                  color: 1
                },
                {time: (hours / 24) * 2 * PI, radius0: 2.5, radius: 3.0, color: 2}
              ]}
              colorRange={COLORS}
            />
          </XYPlot>
        </div>
        <Logo
          height={'95px'}
          width={'95px'}
          background={`hsl(${seconds / 60 * 360}, ${minutes / 60 * 100}%, ${hours / 24 * 100}%)`}/>
      </div>
    );
  }
}
