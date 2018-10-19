import React from 'react';
import PropTypes from 'prop-types';
import './styles/ChannelCard.css';

function ChannelCard(props, context) {

    const { title,
	    tracks,
	    slug,
	    body } = props.model;

    const { setRadio } = context;

    if (!tracks) return null;

    return (
	<article className="ChannelCard">
	  <div className="BtnGroup">
	    <button className="Btn"
		    title={`Send <${title}> to deck A`}
		    onClick={ () => setRadio('a', slug) }>A</button>
	  </div>
	  
	  <div className="ChannelCard-body">
	    <span className="ChannelCard-title">{ title } ({ tracks.length })</span>
	    <p>{ body } <span className="ChannelCard-slug">{ `@${slug}` }</span></p>
	  </div>
	  
	  <div className="BtnGroup">
	    <button className="Btn"
		    title={`Send <${title}> to deck B`}
		    onClick={ () => setRadio('b', slug) }>B</button>
	  </div>
	</article>
    )
}

ChannelCard.contextTypes = {
    setRadio: PropTypes.func
}

export default ChannelCard;
