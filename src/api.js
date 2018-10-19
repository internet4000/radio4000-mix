// serialise object to array of channel objects
function serialize(channels) {
    const ids = Object.keys(channels);
    
    if(!ids) return null;
    
    return ids.map(key => {
	let channel = channels[key];
	
	channel['id'] = key;

	if(!channel.tracks) {
	    channel.tracks = []
	} else {
	    channel.tracks = Object.keys(channel.tracks);
	}

	channel.searchIndex = `${channel.title || ''} ${channel.body || ''} ${channel.slug || ''}`
	
	return channel
    })
}

function getChannels() {
    return fetch('https://radio4000.firebaseio.com/channels.json').then(res => res.json().then(serialize))
}

export { getChannels };
