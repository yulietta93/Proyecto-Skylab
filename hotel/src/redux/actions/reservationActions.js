export const setReservation = (reservation) => {
    console.log(reservation, 'reservation')
    return {
      payload: reservation,
      type: 'SET_USER_RESERVATION'
    }
  }