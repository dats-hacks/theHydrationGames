import fetch from 'isomorphic-fetch';

export const GET_DATASET = 'GET_DATASET';

export function getDataSet () {
  return dispatch => {
    return fetch('/hello')
    .then(response => response.)
  }
}