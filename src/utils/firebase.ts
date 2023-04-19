import { initializeApp } from 'firebase/app'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { Message } from './types'

const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG!)

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export const postMessageDB = async (message: Message) => {
  try {
    const docRef = await addDoc(collection(db, 'messages'), message)
    return { code: 200, message: 'Message successfully sent!' }
  } catch (e) {
    return { code: 500, message: 'Message failed to send.' }
  }
}
