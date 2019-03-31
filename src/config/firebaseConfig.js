import firebase from 'firebase'
import'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBgZ_S6dsVCuw-40_WGkOQZw_jjI8vFp4M",
    authDomain: "vue-blog-ef452.firebaseapp.com",
    databaseURL: "https://vue-blog-ef452.firebaseio.com",
    projectId: "vue-blog-ef452",
    storageBucket: "vue-blog-ef452.appspot.com",
    messagingSenderId: "285109006759"
}
export default firebase.initializeApp(firebaseConfig).firestore()