import axios from 'axios';

const simpleAction = () => dispatch => {
    dispatch({
     type: 'SIMPLE_ACTION',
     payload: 'result_of_simple_action'
    })
}

const getExperts = () => dispatch => {
    axios({
        method: 'get',
        url: 'https://stgapi.omnicuris.com/api/v3/courses/thyroid-in-pregnancy/experts',
        headers: { 'hk-access-token': '89e684ac-7ade-4cd8-bbdf-419a92f4cc5f'}
      })
        .then(function (response) {
          dispatch({
            type: 'EXPERTS_LIST',
            payload: response.data
           })
        });
}

const getModuleList = () => dispatch => {
    axios({
        method: 'get',
        url: 'https://stgapi.omnicuris.com/api/v3/courses?courseSlug=thyroid-in-pregnancy',
        headers: { 'hk-access-token': '89e684ac-7ade-4cd8-bbdf-419a92f4cc5f'}
      })
        .then(function (response) {
          dispatch({
            type: 'MODULE_LIST',
            payload: response.data
           })
        });
}

const getModuleDetails = (moduleId) => dispatch => {
  let urlLink = "https://stgapi.omnicuris.com/api/v3/courses?courseSlug=thyroid-in-pregnancy&moduleId="+moduleId
  if (moduleId === "DEFAULT"){
        dispatch({
          type: 'DEFAULT_PLAY_DATA',
        })
  } else {
    axios({
        method: 'get',
        url: urlLink,
        headers: { 'hk-access-token': '89e684ac-7ade-4cd8-bbdf-419a92f4cc5f'}
      })
        .then(function (response) {
          dispatch({
            type: 'PLAY_DATA',
            payload: response.data
           })
        });
  }
}

export {
    simpleAction,
    getExperts,
    getModuleList,
    getModuleDetails
}