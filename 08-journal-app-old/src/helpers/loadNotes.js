import { collection, getDocs } from "firebase/firestore/lite";
import { firebaseDB } from "../firebase/config";

export const loadNotes = async( uid = '') => {
  if ( !uid ) throw new Error('El id del usuario no está establecido');

  const collectionRef = collection( firebaseDB, `${ uid }/journal/notes` );
  const { docs } = await getDocs( collectionRef );

  return docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}