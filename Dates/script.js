const body = document.querySelector('body')

const now = new Date()

console.log(now)

console.log(now.getFullYear())

console.log(now.getDate())
console.log(now.getMonth())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())

console.log("milli Seconds", now.getTime())

// Time Stamps

const before = new Date('Thu Jul 11 2025')

const diff = now.getTime() - before.getTime()

const min = Math.round(diff / 1000 / 60)
console.log("seconds", min)

const Hours = Math.round(min / 60)
console.log("hours", Hours)

const days = Math.round(Hours / 60)

console.log(days)

setInterval(() => {
    const now = new Date()
    const htmlCode = `
    <h1>${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}
    `
    body.innerHTML = htmlCode;

}, 1000)


const Today = new Date()

console.log(dateFns.isToday(Today))

console.log(dateFns.format(Today, 'YYYY'))

console.log(dateFns.format(Today, 'MMMM'))