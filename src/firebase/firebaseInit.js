import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD4jeYjKiwYvhNHrw96mNRCLW5U50gM4hY",
    authDomain: "acadeller-9e845.firebaseapp.com",
    projectId: "acadeller-9e845",
    storageBucket: "acadeller-9e845.appspot.com",
    messagingSenderId: "516047497033",
    appId: "1:516047497033:web:158f419bf8f305e1995c98",
    measurementId: "G-R99603TRFQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export {timeStamp}
export default firebase.firestore()