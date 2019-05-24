import * as firebase from "firebase";

export default class DataService {


  static async getAvailableRoomsByDates(userbook) {
    console.log("userbook: ", userbook);
    const db = firebase.firestore();
    let results = [];

    try {
      const querySnapshot = await db
        .collection("rooms")
        .where("typology", "==", userbook.roomType)
        .get();
      let roomsUnavailable = 0;
      querySnapshot.forEach(doc => {
        const objectResult = { available: false, ...doc.data() };

        objectResult.reservation.forEach(book => {
          if (
            book.endDate.timestamp > userbook.startDate.timestamp &&
            book.startDate.timestamp < userbook.endDate.timestamp
          ) {
            roomsUnavailable++;
          }
        });

        objectResult.id = doc.id;
        if (roomsUnavailable < objectResult.totalRooms) {
          objectResult.available = true;
        }

        results.push(objectResult);
      });
    } catch (err) {
      console.log("TCL: DataService -> getContacts -> err", err);
    }

    return results;
  }

  
  static async getCollection(collection) {
    const db = firebase.firestore();
    let results = [];

    try {
      const querySnapshot = await db.collection(collection).get();

      querySnapshot.forEach(doc => {
        const objectResult = doc.data();
        objectResult.id = doc.id;
        results.push(objectResult);
      });
    } catch (err) {
      console.log("TCL: DataService -> getContacts -> err", err);
    }

    return results;
  }

  static async addObjectWithId(collection, objId, data) {
    return await DataService.updateDetail(collection, objId, data);
  }

  //DETALLES CONTACTO
  static async getObjectDetail(collection, objId) {
    const db = firebase.firestore();
    let contact = null;

    try {
      const contactRef = await db
        .collection(collection)
        .doc(objId)
        .get();
      if (contactRef.exists) {
        contact = contactRef.data();
      }
    } catch (err) {
      console.log("TCL: DataService -> getObjectDetail -> err", err);
    }

    return contact;
  }

  static async updateDetail(collection, id, data) {
    const db = firebase.firestore();
    let success = true;

    try {
      await db
        .collection(collection)
        .doc(id)
        .set(data, { merge: true });
    } catch (err) {
      success = false;
      console.log("TCL: DataService -> updateDetail -> err", err);
    }

    return success;
  }

  //VER CONTACTOS
  static observeContacts(callback, userId) {
    const db = firebase.firestore();

    return db
      .collection("contacts")
      .where("userId", "==", userId)
      .onSnapshot(querySnapshot => {
        let results = [];

        querySnapshot.forEach(doc => {
          const objectResult = doc.data();
          objectResult.id = doc.id;
          results.push(objectResult);
        });

        callback(results);
      });
  }

  //BORRAR CONTACTOS
  static async deleteContact(contactId) {
    const db = firebase.firestore();
    let success = true;

    try {
      await db
        .collection("contacts")
        .doc(contactId)
        .delete();
    } catch (err) {
      success = false;
      console.log("TCL: DataService -> deleteContact -> err", err);
    }

    return success;
  }

  //AÑADIR CONTACTOS
  static async addContact(contactData) {
    const db = firebase.firestore();
    let success = false;

    try {
      const docRef = await db.collection("contacts").add(contactData);
      if (docRef && docRef.id) {
        success = true;
      }
    } catch (err) {
      console.log("TCL: DataService -> addContact -> err", err);
    }
    return success;
  }

  //TRAER ROOMS ID
  static async getRoomsDetail(collection, objId) {
    const db = firebase.firestore();
    let rooms = null;

    try {
      const roomsRef = await db
        .collection(collection)
        .doc(objId)
        .get();
      if (roomsRef.exists) {
        rooms = roomsRef.data();
      }
    } catch (err) {
      console.log("TCL: DataService -> getRoomsDetail -> err", err);
    }

    return rooms;
  }

  //SUBIR INFORMACIÓN FORMULARIO
  static async addForm(collection, data) {
    const db = firebase.firestore();
    let success = false;
    try {
      console.log("intento");
      const docRef = await db.collection("reservations").add(data);

      if (docRef && docRef.id) {
        console.log("success");
        success = true;
        return docRef;
      }
    } catch (err) {
      console.log("TCL: DataService -> addContact -> err", err);
    }
    return success;
  }

  //TRAER RESERVATIONS ID
  static async getReservationsDetail(collection, objId) {
    const db = firebase.firestore();
    let reservations = null;

    try {
      const reservationsRef = await db
        .collection(collection)
        .doc(objId)
        .get();
      if (reservationsRef.exists) {
        reservations = reservationsRef.data();
      }
    } catch (err) {
      console.log("TCL: DataService -> getRoomsDetail -> err NO FUNCIONA", err);
    }
    return reservations;
  }
}
