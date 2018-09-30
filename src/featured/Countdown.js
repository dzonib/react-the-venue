import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import CountdownHelper from './ContdownHelper';

class Countdown extends Component {
	state = {
    deadline: 'Dec, 16, 2018',
    days: '0',
    hours: '0',
    minutes: '0',
    secundes: '0'
  };

  getTimeUntill = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());

  }

  componentDidMount() {
    setInterval(() => this.getTimeUntill(this.state.deadline) , 1000)
  }

	render() {
		return (
			<Slide left>
				<div className="countdown_wrapper">
					<div className="countdown_top">Event starts in</div>
					<div className="countdown_bottom">

            <CountdownHelper number={23} letter="days" />
            <CountdownHelper number={2} letter="hours" />
            <CountdownHelper number={30} letter="minutes" />
            <CountdownHelper number={54} letter="secundes" />
					
		
					</div>
				</div>
			</Slide>
		);
	}
}

export default Countdown;
