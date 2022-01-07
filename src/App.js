import * as React from 'react';
import './App.css';
import tracks from "./Tracks";
import AudioPlayer from './components/AudioPlayer';
import MousePositionTracker from './components/MousePositionTracker';
import BlueBird from './components/BlueBird';

function App() {
    const [isFinding, setIsFinding] = React.useState(false);
    const [found, setFound] = React.useState(false);
    const randomXPos = Math.floor(Math.random() * window.innerWidth);
    const randomYPos = Math.floor(Math.random() * window.innerHeight);

    return (
        <div>
        <AudioPlayer 
            tracks={tracks} 
            iconXPos={randomXPos} 
            iconYPos={randomYPos} 
            isFinding={isFinding} 
            setIsFinding={setIsFinding}
        />
        <BlueBird 
            xPos={randomXPos} 
            yPos={randomYPos} 
            isFinding={isFinding} 
            setIsFinding={setIsFinding} 
            found={found}
            setFound={setFound}
        />
        </div>
    );
}

export default App;
