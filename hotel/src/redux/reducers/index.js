import { combineReducers } from 'redux';
import { userReducer } from './userReducers';
import { reservationReducer } from './reservationReducers'

export default combineReducers({
  userReducer,
  reservationReducer
})
