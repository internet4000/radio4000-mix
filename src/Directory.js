import React, { Component } from 'react';
import { getChannels } from './api';
import './styles/Directory.css';
import ChannelCard from './ChannelCard'
import Loading from './Loading'


export default class Directory extends Component {
    constructor() {
	super();
	this.state = {
	    channels: [],
	    search: ''
	}
    }
    
    componentDidMount() {
	getChannels().then(channels => {
	    this.setState({channels});
	})
    }

    updateSearch(e) {
	this.setState({
	    search: e.target.value
	})
    }
    
    render() {
	if (!this.state.channels.length) {
	    return (
		<aside className="Aside Directory"><Loading text="Loading channels"/></aside>
	    )
	}
	return (
	    <aside className={ `Aside Directory ${this.props.className}` }>
	      <div className="ChannelCards">
		<input
		  onChange={ (event) => this.updateSearch(event) }
		  placeholder="Search Radio4000 channels"
		  className="Input Input--search"
		  type="search"/>

		  <div className="Directory-list">
		    { this.state.channels
			.filter(el => el.searchIndex.includes(this.state.search) ? el : null)
		    .map((channel, index) => <ChannelCard key={ index } model={ channel } />) }
	    </div>
	    </div>
		</aside>
	)
    }
}
