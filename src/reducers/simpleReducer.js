export default (state = {}, action) => {
    switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        ...state,
        result: action.payload
      };
    case 'EXPERTS_LIST':
      return {
        ...state,
        expertDetails: action.payload.expertDetails
      };
    case 'MODULE_LIST':
      return {
        ...state,
        courseDetails: action.payload.courseDetails,
        videoData: {
          image: action.payload.courseDetails.image,
          videoSrc: action.payload.courseDetails.introVideo
        }
      };
    case 'PLAY_DATA':
      console.log(action.payload);
      return {
        ...state,
        videoData: {
          image:'',
          videoSrc: action.payload.lessonDetails[0].userChapterDetails[0].content
        }
      }
    case 'DEFAULT_PLAY_DATA':
      return {
        ...state,
        videoData: {
          image:state.courseDetails.image,
          videoSrc: state.courseDetails.introVideo
        }
      }
     default:
      return state
    }
   }