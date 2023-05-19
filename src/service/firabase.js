import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.APP_CITY_CLUB_FIREBASE_API_KEY,
  authDomain: process.env.APP_CITY_CLUB_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.APP_CITY_CLUB_FIREBASE_PROJECT_ID,
  storageBucket: process.env.APP_CITY_CLUB_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:process.env.APP_CITY_CLUB_FIREBASE_MESSAGING_SANDER_ID,
  appId: process.env.APP_CITY_CLUB_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)

export default app
