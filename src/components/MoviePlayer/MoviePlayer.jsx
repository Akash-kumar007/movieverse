import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./MoviePlayer.css";

function MoviePlayer() {
  const { id } = useParams(); // e.g. movie1.mp4
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1); // Default volume 100%
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleSeek = (e) => {
    const seekTo = (e.target.value / 100) * duration;
    videoRef.current.currentTime = seekTo;
  };

  const handleVolumeChange = (e) => {
    const volumeLevel = e.target.value;
    videoRef.current.volume = volumeLevel;
    setVolume(volumeLevel);
  };

  const handleFullscreenToggle = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) {
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="player-container">
      <h2 className="player-title">🎬 Now Streaming</h2>
      <div className="video-box">
        <video
          ref={videoRef}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={() => setDuration(videoRef.current.duration)}
          onClick={handlePlayPause}
          src={`http://localhost:5000/api/stream/${id}`}
          type="video/mp4"
          className="video-player"
        />
      </div>

      <div className="controls">
        <button onClick={handlePlayPause} className="play-pause-btn">
          {isPlaying ? "Pause" : "Play"}
        </button>
        <input
          type="range"
          value={(currentTime / duration) * 100 || 0}
          max="100"
          onChange={handleSeek}
          className="seekbar"
        />
        <span>{Math.floor(currentTime)} / {Math.floor(duration)}</span>
        <input
          type="range"
          value={volume * 100}
          min="0"
          max="100"
          onChange={handleVolumeChange}
          className="volume-control"
        />
        <button onClick={handleFullscreenToggle} className="fullscreen-btn">
          {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        </button>
      </div>
    </div>
  );
}

export default MoviePlayer;
