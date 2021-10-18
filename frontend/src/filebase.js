import firebase from "firebase";
import "firebase/storage"
const config = {
    apiKey: "AIzaSyB62z_vI77NAuEAVE5mQ3Uqu3qag8a7Jos",
    authDomain: "test-8b330.firebaseapp.com",
    databaseURL: "https://test-8b330.firebaseio.com",
    projectId: "test-8b330",
    storageBucket: "test-8b330.appspot.com",
    messagingSenderId: "77889519033",
    appId: "1:77889519033:web:22e0ab82093e796ff80a68",
    measurementId: "G-QV58PN8P7G"
};

firebase.initializeApp(config)

const storage = firebase.storage()
export { storage, firebase as default }