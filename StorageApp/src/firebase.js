
import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';
import { getStorage } from 'firebase/storage';



// Initialize Firebase
const firebaseConfig = {
   apiKey: "XXX-XXX-XXX-XXX",
  authDomain: "XXX-XXX-XXX-XXX",
  projectId: "XXX-XXX-XXX-XXX",
  storageBucket: "XXX-XXX-XXX-XXX",
  messagingSenderId: "XXX-XXX-XXX-XXX",
  appId: "XXX-XXX-XXX-XXX"
};

const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth;
 export const storage = getStorage(app);
