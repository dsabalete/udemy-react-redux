import React from "react";
import { connect } from "react-redux";

const SongDetail = props => {
  if (!props.song) {
    return <div>No song selected yet</div>
  }

  return (
    <div>
      <h3>Title: {props.song.title}</h3>
      <p>Duration: {props.song.duration}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
