import * as React from 'react';
import "./MousePositionTracker.css";

const MousePositionTracker = () => {
    const [x, setX] = React.useState(0);
    const [y, setY] = React.useState(0);

    const handleMouseMove = (e) => {
        setX(e.screenX);
        setY(e.screenY);
    }

    return (
        <div className="mouse-position-container" onMouseMove={handleMouseMove}>{x} {y}</div>
    )
}

export default MousePositionTracker;