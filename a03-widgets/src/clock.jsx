import React from 'react';

export class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time : new Date()
		};
		this.tick = this.tick.bind(this);
	}

	tick() {
		this.setState({ time : new Date()});
	}
	componentDidMount() {
		this.intervalId = setInterval(this.tick, 1000);
	}
	componentWillUnmount() {
		clearInterval(this.intervalId);
	}
	render() {
		const { time } = this.state;
		return (
			<section className="clock-section">
				<h1>Current Time</h1>
				<p>{ time.getHours() } : 
				   { time.getMinutes() } : 
			       { time.getSeconds() } </p>
				<p>{ time.toLocaleDateString() }</p>
			</section>	
		);
	}
};
