import React from 'react';
import introduction from '../../image/defauldImage.png';

const CourseList = (props) => {
    let modules= props.modules ? props.modules : null;
    const playOnClick = (item) => {
        props.getModuleDetails(item);
    }

    return (
        <div className="course-list">
            <div 
            className="list-item shadow p-3 mb-3 bg-white"
            onClick={()=>{
                playOnClick("DEFAULT")
            }}
            >
                <img alt={"Introduction"} className="image" src={introduction}></img>
                <p className="introduction">
                <span className="module-number">{`Introduction`}</span>
                    <span className="module-name">{``}</span>
                </p>
            </div>
            {modules !== null ? 
                modules.map((item, index) => {
                    return (
                    <div 
                    key={index} 
                    className="list-item shadow p-3 mb-3 bg-white"
                    id={item.id}
                    onClick={()=>{
                        playOnClick(item.id)
                    }}
                    >
                        <img alt={props.expertDetails[index].expertName} className="image" src={props.expertDetails[index].profilePic}></img>
                    <p>
                        <span className="module-number">{`${item.title} - `}</span>
                        <span className="module-name">{item.name}</span>
                        <span className="module-duration">
                            <span className="glyphicon glyphicon-time" aria-hidden="true"></span>
                            {`${item.duration} mins`}
                        </span>
                    </p>
                    </div>)
                }) : null
            }
        </div>
    )
}

export default CourseList;