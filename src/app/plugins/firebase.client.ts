import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
import { getStorage } from "firebase/storage"
import { getMessaging } from "firebase/messaging"

export default defineNuxtPlugin(({ $config }) => {
  const firebaseApp = initializeApp($config.public.firebase)
  const firebaseDb = getDatabase(firebaseApp)
  const firebaseStorage = getStorage(firebaseApp)
  const firebaseMessaging = getMessaging(firebaseApp)

  return {
    provide: {
      firebaseApp,
      firebaseDb,
      firebaseStorage,
      firebaseMessaging
    }
  }
})
