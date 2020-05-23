import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Player } from 'video-react';
import { getModuleDetails } from '../../actions'

import VideoTitle from '../VideoTitle/VideoTitle';
import CourseList from '../courseList/courseList';
import ExpertsList from '../expertsList/expertsList';

class HomePage extends Component {
    componentDidUpdate(prevProps, prevState) {
        if (this.props.videoData){
            if (this.props.videoData.videoSrc !== prevProps.playerSource) {
              this.player.load();
            }
        }
      }
    render() {    
        return (
            <div className="row">
                <div className="col-8">
                    <VideoTitle 
                    title={this.props.courseDetails?this.props.courseDetails.name: ""} 
                    subTitle={"Introduction"} />
                </div>
                <div className="col-8 course-video">
                    <div className="videoplayer shadow-lg">
                        {this.props.videoData ?
                        <Player
                        ref={player => {
                            this.player = player;
                          }}
                          videoId="video-1"
                        playsInline
                        poster={this.props.videoData.image}
                        autoPlay
                        >
                            <source src={this.props.videoData.videoSrc} />
                        </Player> : null
                        }
                    </div>
                </div>
                <div className="col-4 course-details">
                    <CourseList 
                    modules={this.props.courseDetails.modules} 
                    getModuleDetails={this.props.getModuleDetails} 
                    expertDetails = {this.props.expertDetails} />
                </div>
                <div className="col-8">
                    <div className="description">
                        <h2>Description</h2>
                        <p>{this.props.courseDetails.description}</p>
                    </div>
                </div>
                <div className="col-12">
                    <div className="experts-panel">
                        <h2>Experts Panel</h2>
                            {this.props.expertDetails ?
                            <ExpertsList 
                            experts= {this.props.expertDetails}
                            /> : null
                            }
                    </div>
                </div>
            </div>
        )
    }
}

HomePage.defaultProps = {
    courseDetails: {},
    expertDetails: {},
}  
const mapStateToProps = state => ({
    ...state.projectDetails
});

const mapDispatchToProps = dispatch => ({
    getModuleDetails: (item) => dispatch(getModuleDetails(item))
   })
  
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);