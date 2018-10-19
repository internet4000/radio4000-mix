import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './images/logo.svg';
import './styles/App.css';
import SiteNav from './SiteNav';
import MixingTable from './MixingTable';
import Directory from './Directory';
import DirectoryBtn from './DirectoryBtn'

export default class App extends Component {
    constructor() {
	super();
	this.state = {
	    showAside: true
	}
    }

    toggleDirectory() {
	this.setState({
	    showAside: !this.state.showAside
	})
    }

    selectRadio = (deck, radioSlug) => {
	this.setRadio(deck, radioSlug)
    }

    setRadio = (deck, radioSlug) => {
	this.setState({
	    [deck]: radioSlug
	})
    }
    
    render() {
	return (
	    <div className="App">
	      <SiteNav/>
	      <a className="SiteTitle"
		 href="https://radio4000.com"
		 target="_blank"
		 title="Radio4000.com"
		 rel="noopener noreferrer">
		<img src={ logo } alt="mix.radio4000.com"/>
	      </a>
	      <DirectoryBtn
		toggle={ () => this.toggleDirectory() }
		isVisible={ this.state.showAside }/>
		<Directory className={ this.state.showAside && 'is-visible' }/>
		<MixingTable/>
	    </div>
	)
    }
}
