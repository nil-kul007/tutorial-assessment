import React from 'react';

const ExpertsList = (props) => {
    let experts = null
    if(props.experts.length>0){
        experts = props.experts;
    }

    return (
        <div className="row">
            {experts !== null ? 
                experts.map((item, index) => {
                    return(
                        <div key={index} className="col expert">
                            <img className="shadow" src={item.profilePic} alt={item.expertName}/>
                            <p className="title">{`${item.title} ${item.expertName}`}</p>
                            <p className="subtitle">{item.qualification}</p>
                        </div>
                    )
                }):null
            }
        </div>
    )
}

export default ExpertsList;