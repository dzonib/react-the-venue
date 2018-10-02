import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import CountdownHelper from './ContdownHelper';
import moment from 'moment'; 

class Countdown extends Component {
	state = {
    deadline: 'Dec, 16, 2018',
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0'
  };

  getTimeUntill = (deadline) => {

    // http://zetcode.com/javascript/momentjs/
    // moment tut

    const time = moment(deadline);
    const date = moment([]);

    // const timeTest = moment(Date.parse(new Date())).format("dddd, MMMM, D, YYYY, s");

    const difference = time.diff(date);

    const momentizeDifference = moment(difference);

    const dayDiff = time.diff(date, 'days');

    console.log(dayDiff);
    

    const days = dayDiff;
    const hours = momentizeDifference.get('hour');
    const minutes = momentizeDifference.get('minute');
    const seconds = momentizeDifference.get('second');

    this.setState({
      days,
      hours, 
      minutes,
      seconds,
    }); 

  }

  componentDidMount() {
    setInterval(() => this.getTimeUntill(this.state.deadline) , 1000)
  }

	render() {
    const {days, hours, minutes, seconds} = this.state;
		return (
			<Slide left>
				<div className="countdown_wrapper">
					<div className="countdown_top">Event starts in</div>
					<div className="countdown_bottom">

            <CountdownHelper number={days} letter="days" />
            <CountdownHelper number={hours} letter="hours" />
            <CountdownHelper number={minutes} letter="minutes" />
            <CountdownHelper number={seconds} letter="seconds" />
					
		
					</div>
				</div>
			</Slide>
		);
	}
}

export default Countdown;
