// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from 'firebase/app'

import {
    collection,
    getDocs,
    getFirestore,
    addDoc,
    doc,
    deleteDoc,
    onSnapshot,
    query,
    where,
    orderBy,
    serverTimestamp,
    getDoc,
    updateDoc,

} from 'firebase/firestore'


import {
    createUserWithEmailAndPassword,
    getAuth,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyChTVxJTiC-JX2fYKwm8m9W5BMDIw6vxi4",
    authDomain: "fir-9-6f031.firebaseapp.com",
    projectId: "fir-9-6f031",
    storageBucket: "fir-9-6f031.firebasestorage.app",
    messagingSenderId: "337341792035",
    appId: "1:337341792035:web:b07c5c01b23805eb1ed696",
    measurementId: "G-NGXW6ME917"
};

initializeApp(firebaseConfig)

const db = getFirestore()

const colRef = collection(db, 'books')

const auth = getAuth()

// getDocs(colRef).then((snapshot) => {
//     let books = []
//     snapshot.docs.forEach((doc) => {
//         books.push({...doc.data(), id: doc.id })
//     })
//     console.log(books)
// }).catch((err) => {
//     console.log(err)
// })

const q = query(colRef, where("author", "==", "rajesh"), orderBy('createdAt'))
console.log(q)

onSnapshot(q, (snapshot) => {
    let books = []
    snapshot.docs.forEach((doc) => {
        books.push({...doc.data(), id: doc.id })
    })
    console.log(books)
})

const addForm = document.querySelector('.add')

const deleteForm = document.querySelector('.delete')

addForm.addEventListener('submit', (e) => {
    e.preventDefault()
    addDoc(colRef, {
        title: addForm.title.value,
        author: addForm.author.value,
        createdAt: serverTimestamp()
    }).then(() => {
        addForm.reset()
    })
})


deleteForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const docs = doc(db, 'books', deleteForm.id.value)
    deleteDoc(docs).then(() => {
        deleteForm.reset()
    })
})



// get a single document'
const docRef = doc(db, 'books', "DNwPLAg3tl5JbdorpVMG")
getDoc(docRef).then((doc) => {
    console.log(doc.data(), doc.id)
})

onSnapshot(docRef, (snapshot) => {
    console.log(snapshot.data(), snapshot.id)
})

const updateForm = document.querySelector('.update')

updateForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const docRef = doc(db, 'books', updateForm.id.value)
    updateDoc(docRef, {
        title: 'updated Author'
    }).then(() => {
        updateForm.reset()
    })
})


// sign up form

const signUpForm = document.querySelector('.signup')

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = signUpForm.email.value;
    const password = signUpForm.password.value;
    createUserWithEmailAndPassword(auth, email, password).then((cred) => {
        console.log('user created', cred.user)
        signUpForm.reset()
    }).catch((err) => {
        console.log(err)
    })
})


// login and logout 

const loginForm = document.querySelector('.login')
const logoutForm = document.querySelector('.logout')

logoutForm.addEventListener('click', (e) => {
    e.preventDefault()
    signOut(auth).then(() => {
        console.log('the user signed out')
    }).catch((err) => {
        console.log(err)
    })
})

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    signInWithEmailAndPassword(auth, email, password).then((cred) => {
        // console.log(cred.user)
        loginForm.reset()
    }).catch((err) => {
        console.log(err)
    })
})


// Subscribing state change 

onAuthStateChanged(auth, (user) => {
    console.log('user status changed', user)
})