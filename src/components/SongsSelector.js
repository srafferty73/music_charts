import React from 'react';

const SongsSelector = (props) =>  {
  const options = props.songs.map((song, index) => {
    return <option value={index} key={index}>{song.feed.entry.title}</option>
  });

  function handleChange(event) {
    props.onSongsSelected(event.target.value);
  }

  return (
    <select id="song-selector" onChange={handleChange} defaultValue="default">
    <option disabled value="default">Choose a chart position...</option>
    {options}
    </select>
  )
}

export default SongsSelector;
