import { getFirestore, doc, getDocFromCache } from "@firebase/firestore"
import { app } from './index'

export const db = getFirestore(app)

