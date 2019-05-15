const storage = {
    getCalendar() {

      return JSON.parse(sessionStorage.getItem("calendar"))
    },
    setCalendar(calendar) {
        sessionStorage.setItem("calendar", JSON.stringify(calendar))
    }
  }
  
  module.exports = storage