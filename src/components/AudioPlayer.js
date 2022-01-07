import * as React from 'react';
import "./AudioPlayer.css";

const AudioPlayer = (props) => {
    const iconXPos = props.iconXPos;
    const iconYPos = props.iconYPos; 
    const tracks = props.tracks;
    const isFinding = props.isFinding;
    const setIsFinding = props.setIsFinding;
    const [trackIndex, setTrackIndex] = React.useState(0);
    const { audioSrc } = tracks[trackIndex];
    const [shouldPlay, setShouldPlay] = React.useState(false);
    const [x, setX] = React.useState(0);
    const [y, setY] = React.useState(0);

    const handleMouseMove = (e) => {
        setX(e.screenX);
        setY(e.screenY);
    }

    const calcEuclideanDistance = () => {
        const dist = Math.sqrt((iconXPos - x) ** 2 + (iconYPos - y) ** 2);
        return dist / (Math.sqrt((window.innerWidth ** 2) + (window.innerHeight ** 2)));
    }

    const audioRef = React.useRef(new Audio(audioSrc));
    audioRef.current.loop = true;

    React.useEffect(() => {
        if (shouldPlay) audioRef.current.play();
        else audioRef.current.pause();
    }, [shouldPlay]);

    React.useEffect(() => {
        audioRef.current.volume = 1 - calcEuclideanDistance();
    }, [x, y])

    return (
        <div className="audio-player-container" onMouseMove={handleMouseMove}>
            <button 
                onClick={() => setShouldPlay(!shouldPlay)}
                className="play-audio-button"
            >play music</button>
        </div>
    )
}

export default AudioPlayer;