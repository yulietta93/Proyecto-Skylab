const defaultState = {
    reservation: null
  }
  
  export const reservationReducer = (state = defaultState, action) => {
    if(action.type === 'SET_USER_RESERVATION') {
      return {
        ...state,
        reservation: {
            startDate: action.payload.startDate,
            endDate: action.payload.endDate,
            roomType: action.payload.roomType,
        }
      }
    }
  
    return state;
  }