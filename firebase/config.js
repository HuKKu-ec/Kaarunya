// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MES_SEND_ID,
  APP_ID,
  MEASURE_ID,
} from '@env';

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MES_SEND_ID,
  appId: APP_ID,
  measurementId: MEASURE_ID,
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
