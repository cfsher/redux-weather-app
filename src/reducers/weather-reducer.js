import { FETCH_WEATHER } from '../actions/index';

export default function weatherReducer(state = [], action) {
  console.log('Action:', action);

  switch(action.type) {
    case 'FETCH_WEATHER':
      console.log(state);
      return [ action.payload.data, ...state ];
  }

  return state;
}
