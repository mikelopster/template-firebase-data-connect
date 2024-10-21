import { initializeApp } from 'firebase/app'
import { getDataConnect } from 'firebase/data-connect'
import { connectorConfig } from '@movie-app/movies'

// Your web app's Firebase configuration
const firebaseConfig = { /* firebase config*/}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const dataConnect = getDataConnect(app, connectorConfig)
