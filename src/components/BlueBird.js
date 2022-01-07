import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

const BlueBird = (props) => {
    const xPos = props.xPos;
    const yPos = props.yPos;
    const found = props.found;
    const setFound = props.setFound;

    return (
        <FontAwesomeIcon 
            icon={faTwitter} 
            className="blue-bird-icon" 
            style={{ 
                    top: xPos, 
                    left: yPos, 
                    fontSize: "80px", 
                    color: "#00acee", 
                    position: "absolute",
                    display: found ? "block" : "none",
                }} 
            onClick={() => {
                setFound(true);
            }}
        />
    );
}

export default BlueBird;