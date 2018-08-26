import React, { Component } from 'react';
import ReactLoading from 'react-loading';

export class ButtonLoading extends Component {

	render() {
		return (
			<div className="container">
					<button disabled={this.props.showLoading} type="button" onClick={this.props.onClick} className={this.props.className}>
						{this.props.label}
					</button>
					{
						this.props.showLoading ?
						<ReactLoading type='bubbles' color="#2aa3e0" width="30px" />
						:
						''
					}
			</div>
		)
	}

}
