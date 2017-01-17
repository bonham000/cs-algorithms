import React from 'react'

export default class CustomFiler extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comparisonType: null,
			spec: {
				category: this.props.filter,
				filterType: '',
				range: [],
			},
			lessThan: '',
			greaterThan: '',
			rangeLow: '',
			rangeHigh: ''
		}
	}
	setType = (type) => {
		this.setState({
			comparisonType: type
		});
	}
	handleInput = (event) => {
		// process user input from any of the input fields
		let { comparisonType: type, spec } = this.state;
		if (/^\d+$/.test(event.target.value) || event.target.value === '') {
			spec.filterType = type;
			if (event.target.name === 'lessThan') {
				spec.range = [event.target.value];
			} else if (event.target.name === 'greaterThan') {
				spec.range = [event.target.value];
			} else if (type === 'range') {
				if (event.target.name === 'rangeLow') {
					spec.range[0] = event.target.value;	
				} else if (event.target.name === 'rangeHigh') {
					spec.range[1] = event.target.value;	
				}
			}
			this.setState({
				spec,
				[event.target.name]: event.target.value
			});
		}
	}
	render() {
		let { comparisonType: type } = this.state;
		let comparison;
		if (type === 'less') {
			comparison = (
				<div>
					<p>Only show values less than:</p>
					<input
						type="text"
						value={this.state.lessThan}
						onChange={this.handleInput}
						name='lessThan'
						placeholder="enter a numeric value"/>
				</div>
			);
		} else if (type === 'greater') {
			comparison = (
				<div>
					<p>Only show values greater than:</p>
					<input
						type="text"
						value={this.state.greaterThan}
						onChange={this.handleInput}
						name='greaterThan'
						placeholder="enter a numeric value"/>
				</div>
			);
		} else if (type === 'range') {
			comparison = (
				<div>
					<p>Show values between:</p>
					<input
						type="text"
						value={this.state.rangeLow}
						onChange={this.handleInput}
						name='rangeLow'
						placeholder="starting value"/>
					<p>and</p>
					<input
						type="text"
						value={this.state.rangeHigh}
						onChange={this.handleInput}
						name='rangeHigh'
						placeholder="ending value"/>
				</div>
			);
		}
		return (
			<div className='customFilter'>
				<button onClick={this.setType.bind(this, 'less')}>Values Less Than</button>
				<button onClick={this.setType.bind(this, 'greater')}>Values Greater Than</button>
				<button onClick={this.setType.bind(this, 'range')}>Range</button>
				<button onClick={this.props.close} id='closeBtn'>Close Panel</button>
				{type && comparison}
				{type &&
					<button
						id='submitBtn'
						onClick={this.props.submit.bind(this, this.state.spec)}>
					Apply Filter
					</button>}
			</div>
		);
	}
};