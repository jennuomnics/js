import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
import {
    getFirestore,
    collection,
    addDoc,
    query,
    where,
    orderBy,
    onSnapshot,
    Timestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
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

export class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chatsCollection = collection(db, 'chats')
        this.unsub = null;
    }
    async addChat(message) {
        const now = new Date()
        const chat = {
            room: this.room,
            username: this.username,
            created_at: Timestamp.fromDate(now),
            message: message
        }

        const response = await addDoc(this.chatsCollection, chat)
        return response;
    }

    getChats(callback) {
        const q = query(this.chatsCollection, where('room', '==', this.room), orderBy('created_at'))
        this.unsub = onSnapshot(q, this.chatsCollection, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === 'added') {
                    callback(change.doc.data())
                }
            })
        })
    }

    updateName(username) {
        this.username = username
        localStorage.setItem('username', username)
    }

    updateRoom(room) {
        this.room = room;
        console.log('room is updated')
        if (this.unsub) {
            this.unsub()
        }
    }




}

// const chatroom = new Chatroom('general', 'tej')



// chatroom.getChats((data) => {
//     console.log(data)
// })

// chatroom.updateRoom('gaming')
// chatroom.getChats((data) => {
//     console.log(data)
// })

// chatroom.addChat('hello guys').then(() => {
//     console.log('new chat added')
// })