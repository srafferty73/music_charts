import React from 'react';

const SongsDetail = (props) => {
  if (!props.songs) return null;
  return (
    <h3>{props.songs.name}</h3>
  );
}

export default SongsDetail;
