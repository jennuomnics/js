import { Chatroom } from "./chat.js"

import { ChatUI } from "./ui.js"

const chatList = document.querySelector('.chat-list')

const newChat = document.querySelector('.new-chat')

const updateName = document.querySelector('.new-name')

const updateMessage = document.querySelector('.update-mssg')

const username = localStorage.username ? localStorage.username : 'suryateja';

const room = document.querySelector('.chat-rooms')


room.addEventListener('click', (e) => {
    console.log(e)
    if (e.target.tagName === 'BUTTON') {
        chatUI.clear()
        chatroom.updateRoom(e.target.id)
        chatroom.getChats((data) => {
            chatUI.render(data)
        })
    }
})


updateName.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = updateName.name.value.trim()
    chatroom.updateName(name)
    updateName.reset()
    updateMessage.innerText = `name is updated to ${name}`
    setTimeout(() => {
        updateMessage.innerText = ''
    }, 3000)
})

newChat.addEventListener('submit', (e) => {
    e.preventDefault()
    const message = newChat.message.value.trim()
    chatroom.addChat(message).then(() => {
        newChat.reset()
    }).catch(err => {
        console.log(err)
    })
})

const chatroom = new Chatroom('general', username)

const chatUI = new ChatUI(chatList)

chatroom.getChats((data) => {
    chatUI.render(data)
})