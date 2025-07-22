const getTodos = (res, callback) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data)
                    // callback(undefined, data)
            } else if (request.readyState === 4) {
                // callback(data, undefined)
                reject(request.status)
            }
        })

        request.open('GET', res)
        request.send()
    })


}


// using Promise and Promise chain

getTodos('todos/surya.json').then((data) => {
    console.log('feteched Successfully', data)
    return getTodos('todos/teja.json')
}).then((data) => {
    console.log('feteched Successfully', data)
    return getTodos('todos/jennu.json')
}).then((data) => {
    console.log('feteched Successfully', data)
}).catch((err) => {
    console.log('Error occured', err)
})

// Call Back Hell

// getTodos('todos/surya.json', (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
//     getTodos('todos/teja.json', (err, data) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(data)
//         }
//         getTodos('todos/jennu.json', (err, data) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 console.log(data)
//             }
//         })
//     })
// })



// Fetch Method 

const getItems = async() => {
    const response = await fetch('todos/jennu.json')
    if (response.status !== 200) {
        throw new Error('cannot fetch Data')
    }
    const data = await response.json()
    return data;
}

getItems().then(data => console.log(data)).catch(err => console.log(err.message))