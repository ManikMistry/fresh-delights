import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { getStorage} from 'firebase/storage'


// const firebaseConfig = {
//   apiKey: "AIzaSyBcS7Ga-sZsDGKKD97jSjzjEcegYOx1AdY",
//   authDomain: "foodzone01-47d24.firebaseapp.com",
//   databaseURL: "https://foodzone01-47d24-default-rtdb.firebaseio.com",
//   projectId: "foodzone01-47d24",
//   storageBucket: "foodzone01-47d24.appspot.com",
//   messagingSenderId: "589229505030",
//   appId: "1:589229505030:web:c6c4d50417386e4ca8e187"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBLrC5qHzs3qLpL7KCMJqt9fOwJiYbziDk",
  authDomain: "freshdelights-c0838.firebaseapp.com",
  databaseURL: "https://freshdelights-c0838-default-rtdb.firebaseio.com",
  projectId: "freshdelights-c0838",
  storageBucket: "freshdelights-c0838.appspot.com",
  messagingSenderId: "550358092288",
  appId: "1:550358092288:web:862d4c4a6ef02137ec66e5"
};

  const app=getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore=getFirestore(app);
  const storage =getStorage(app);

  export { app,firestore,storage};

  