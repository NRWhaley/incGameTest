import React from 'react';


 class MainScreen extends React.Component {

	constructor (props) {
		super(props);
		this.state = { title: 'hi' }
	}

	render() {
	return (
		<div>
			<h1>{this.state.title}</h1>
		</div>
		);
	}
	}

export default MainScreen; 