import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends React.Component {
	constructor(props) {
		super(props) 
		this.myClick = this.myClick.bind(this);
		}
		myClick() {
			let button = document.getElementsByClassName('wrapper')[0];
			if (getComputedStyle(button).backgroundColor == 'rgb(255, 255, 255)') {
				button.style.backgroundColor = '#f4b1a4';
			} else {
				button.style.backgroundColor = 'rgb(255, 255, 255)';
			}
			
		}
		render() {
			return (
				<button onClick={this.myClick} className="clicker">Изменить дизайн</button>
				)
		}
	}
export default Button;