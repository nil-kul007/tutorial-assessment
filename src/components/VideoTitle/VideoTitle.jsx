import React from 'react';

const VideoTitle = (props) => {
    return (
    <div className="video-tutorial">
        <div className="col">
            <p>
                <span className="title">{`${props.title}:`}</span>
                <span className="sub-title">{` ${props.subTitle}`}</span>
            </p>
        </div>
    </div>
    )
}

export default VideoTitle;