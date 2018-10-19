import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class DirectoryBtn extends Component {
    handleLinkClick(event) {
	event.preventDefault();
    }
    render() {
	return (
	    <div>
	      <button onClick={ this.props.toggle }
		      className="Btn DirectoryBtn Btn--toggle">
		{
		    this.props.isVisible ? (
			'Hide directory'
		    ) : (
			'Show Directory'
		    )
		}
	      </button>
	      {
		    this.props.isVisible && (
			    <div
				  className="Directory--overlay"
				  onClick={ this.props.toggle }></div>
		    )
		}
	    </div>
	)
    }
}
