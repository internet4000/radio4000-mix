import React from 'react';
import './styles/Mixer.css'

export default function Mixer(props) {

  const { volumeDeckA,
	  volumeDeckB,
	  onMixerVolumeChange,
	  volumeInput } = props;
  
  return (
    <article className="Mixer">
      <div className="Mixer-volumes">
	<span className="Mixer-volume Mixer-volume--a">{ volumeDeckA }%</span>
	<span className="Mixer-volume Mixer-volume--b">{ volumeDeckB }%</span>
      </div>
      <input className="Mixer-volumeInput"
	     type="range"
	     onChange={ onMixerVolumeChange }
	     value={ volumeInput }/>
    </article>
  )
}
