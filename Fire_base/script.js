import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
import { getFirestore, onSnapshot, collection, getDocs, addDoc, doc, deleteDoc, Timestamp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDV_-iDVebCvlDxkvjfej4OAvWb_H5yHSs",
    authDomain: "jssolutions-3792f.firebaseapp.com",
    databaseURL: "https://jssolutions-3792f-default-rtdb.firebaseio.com",
    projectId: "jssolutions-3792f",
    storageBucket: "jssolutions-3792f.firebasestorage.app",
    messagingSenderId: "659967270257",
    appId: "1:659967270257:web:c04bede326616d624cead0",
    measurementId: "G-PPZ9SQH30R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


const ul = document.querySelector('ul')

const form = document.querySelector('form')


const Adddata = (item, id) => {
    console.log(item)
    const html = `
    <li data-id = ${id}> ${item.title} ${item.created_at} 
    <button > delete </button>
    </li>
    `

    ul.innerHTML += html;
}


const recipesCollection = collection(db, 'recipes');

console.log(getDocs(recipesCollection))

// getDocs(recipesCollection)
//     .then((snapshot) => {
//         snapshot.forEach((doc) => {
//             Adddata(doc.data(), doc.id)
//         });
//     })
//     .catch((err) => {
//         console.error("Error fetching documents: ", err);
//     });

onSnapshot(recipesCollection, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
        const doc = change.doc;
        if (change.type === 'added') {
            Adddata(doc.data(), doc.id)
        }
        if (change.type === 'removed') {
            const li = document.querySelector(`[data-id="${change.doc.id}"]`);
            li.remove();
        }
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const now = new Date()
    const newRec = {
        title: form.name.value,
        created_at: Timestamp.fromDate(now)
    }
    addDoc(recipesCollection, newRec).then((docs) => {
        console.log(docs)
    }).then((err) => {
        console.log(err)
    })
})

ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {

        const id = e.target.parentElement.getAttribute('data-id')
        console.log(id)
        const docRef = doc(db, 'recipes', id);
        deleteDoc(docRef).then(() => {
            console.log(`${id} deleted`)
        }).catch((err) => {
            console.log(err)
        })
    }
})