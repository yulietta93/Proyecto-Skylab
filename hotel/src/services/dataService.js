import * as firebase from 'firebase';

export default class DataService {

//CONSEGUIR CONTACTOS

 /* static async getContacts() {
    const db = firebase.firestore();
    let results = [];

    try {
      const querySnapshot = await db.collection("contacts").get();

      querySnapshot.forEach(doc => {
        const objectResult = doc.data();
        objectResult.id = doc.id;
        results.push(objectResult);
      }) 
    } catch (err) {
			console.log("TCL: DataService -> getContacts -> err", err)
    }

    return results;
  }
*/

static async getAvailableRoomsByDates(date) {
  const db = firebase.firestore();
  let results = [];

  // const startDate = date.startDate.timestamp
  // const endDate = date.startDate.timestamp

  // console.log('startDate', startDate)
  // console.log('endDate', endDate)
  try {
    const querySnapshot = await db.collection('rooms').get();

    querySnapshot.forEach(doc => {

      const startDate = {timestamp: 1556661600}
      const endDate = {timestamp: 1559253600}

      const objectResult = {available: true, ...doc.data()}
      objectResult.reservation.map(book => {
        if(!book.startDate.timestamp >= startDate && !book.endDate.timestamp >= endDate) {
          objectResult.available = false
        }
      })

      objectResult.id = doc.id;

      //Mirar para cada objectResult el array de reservations
      // Y setear una propiedad nueva "available" == true o false

      results.push(objectResult);
    }) 
  } catch (err) {
    console.log("TCL: DataService -> getContacts -> err", err)
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
      }) 
    } catch (err) {
			console.log("TCL: DataService -> getContacts -> err", err)
    }

    return results;
  }

  static async addObjectWithId(collection, objId, data) {
    return await DataService.updateDetail(collection, objId, data)
  }

  
//DETALLES CONTACTO
  static async getObjectDetail(collection, objId) {
    const db = firebase.firestore();
    let contact = null;

    try{ 
      const contactRef = await db.collection(collection).doc(objId).get();
      if(contactRef.exists) {
        contact = contactRef.data();
      }
    } catch (err){
			console.log("TCL: DataService -> getObjectDetail -> err", err)
    } 

    return contact;
  }
 
  static async updateDetail(collection, id, data) {
    const db = firebase.firestore();
    let success = true;

    try {
      await db.collection(collection).doc(id).set(data, {merge: true});
    } catch (err) {
      success = false;
		  console.log("TCL: DataService -> updateDetail -> err", err)
    }

    return success;
  }

  //VER CONTACTOS
  static observeContacts(callback, userId){
    const db = firebase.firestore();

    return db.collection('contacts')
      .where('userId','==', userId)
      .onSnapshot((querySnapshot)=>{
      let results = [];

      querySnapshot.forEach(doc => {
				const objectResult = doc.data();
        objectResult.id = doc.id;
        results.push(objectResult);  
      });

      callback(results);
    })
  }

  //BORRAR CONTACTOS
  static async deleteContact(contactId) {
    const db = firebase.firestore();
    let success = true;

    try {
      await db.collection("contacts").doc(contactId).delete();

    } catch (err) {
      success = false;
			console.log("TCL: DataService -> deleteContact -> err", err)
    }

    return success;
  }

  //AÑADIR CONTACTOS
  static async addContact(contactData) {
    const db = firebase.firestore();
    let success = false;

    try {
      const docRef = await db.collection('contacts').add(contactData);
      if(docRef && docRef.id) {
        success = true;
      }
    } catch (err) {
			console.log("TCL: DataService -> addContact -> err", err)
    }

    return success;
  }

}
