import { GET_DATASET } from '../actions/actionGraph';


export default function graphDataSet(state = {
  dataSet: null
}, action) {
  switch (action.type) {
  case GET_DATASET:
    return Object.assign({}, state, {
      dataSet: action.dataSet
    });
  default:
    return state;
  }
}