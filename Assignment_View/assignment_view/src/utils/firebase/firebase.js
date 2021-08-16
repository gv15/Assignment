// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import firebaseconfig from "./firebaseconfig";
// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
    ...firebaseconfig
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseAuth = {
//    firebaseProviders:{
//        google:`new firebase.auth.GoogleAuthProvider()`,
//        facebook:`new firebase.auth.FacebookAuthProvider()`
//    },
   startPopUpAuthentication(providerName){
       let provider;
       if(providerName == "google"){
           provider = new firebase.auth.GoogleAuthProvider()
       }
       else{
           if(providerName=='facebook'){
               provider = new firebase.auth.FacebookAuthProvider();
           }
       }
        return firebase.auth().signInWithPopup(provider);
   }
}
export default firebaseAuth;
