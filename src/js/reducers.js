/* var state = {
   upload: boolean,
   headers: [
   {
   needed: 'Military',
   given: 'Mstatus'
   }
   ],
   data [
   { key: 'Mstatus',
   data: ['yes','no','veteran']
   }
   ]
   }
   */

import { combineReducers } from 'redux';

function upload(state = false, action){
  switch(action.type){
    case 'START_UPLOAD':
      return true;
    default:
      return false;
  }
}
var initialHeaderState = [
{ needed: 'Military',
  given: '' }
];
function headers(state = initialHeaderState, action){
  switch(action.type) {
    case 'CHANGE_HEADER':
      var index = state.map(e => e.needed).indexOf(action.needed);
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], {
          given: action.given
        }),
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
}
function data(state = [{ key: 'Mstatus', data: []}], action){
  switch(action.type) {
    case 'CHANGE_KEY':
      var index = state.map(e => e.key).indexOf(action.oldKey);
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], {
          key: action.newKey
        }),
        ...state.slice(index + 1)
      ];
    case 'PARSE_DATA':
      var initialObj = Object.keys(action.rawCSV[0]).map(function(key){
        return { key: key, data: []};
      });
      action.rawCSV.slice(1).forEach(function(visitor) {
        initialObj.forEach(function(element) {
          element.data.push(visitor[element.key]);
        });
      });
      return initialObj;
    default:
      return state;
  }
}

export default combineReducers({
  upload,
  headers,
  data
});
