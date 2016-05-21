import fetch from 'isomorphic-fetch';

export const RECEIVE_DATA_SET = 'RECEIVE_DATA_SET';

export function getDataSet () {
  return dispatch => {
    return fetch('/hello')
    .then(response => {
      dispatch(receiveDataSet(response));
    });
  };
}


export function receiveDataSet(data) {
  return {
    type: RECEIVE_DATA_SET,
    data
  };
}