export const setReservation = (reservation) => {
    console.log(reservation, 'reservation  kasjdnkjasndkjan')
    return {
      payload: reservation,
      type: 'SET_USER_RESERVATION'
    }
  }