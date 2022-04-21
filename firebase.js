import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'

const {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} = process.env

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: 'AIzaSyDpT01D3ffQhWLPB0CurLCQH_CGDtCq3NA',
  authDomain: 'auctioneer-19e65.firebaseapp.com',
  datbaseURL: 'gs://auctioneer-19e65.appspot.com',
  PROJECT_ID: 'auctioneer-19e65',
  STORAGE_BUCKET: 'auctioneer-19e65.appspot.com',
  MESSAGING_SENDER_ID: '1070928219090',
  APP_ID: '1:1070928219090:web:257f7e1e0ead94df0fd60b',
})

export const timestamp = firebase.firestore.FieldValue.serverTimestamp
export const firestoreApp = app.firestore()
export const storageApp = app.storage()
export const authApp = app.auth()
