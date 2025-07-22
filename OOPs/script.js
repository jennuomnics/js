class People {
    constructor(username, age) {
        this.username = username,
            this.age = age,
            this.score = 0
    }

    login() {
        console.log(`${this.username} login`)
        return this;
    }

    logout() {
        console.log(`${this.username} logout`)
        return this;
    }
    addScore() {
        this.score += 1
        console.log(`${this.score} score`)
        return this;
    }
}
// Inhertance
class Admin extends People {
    constructor(username, age, title) {
        super(username, age)
        this.title = title;
    }

    deleteUser(user) {
        users = users.filter((each) => {
            return each.username !== user.username;
        })
    }
}


const user1 = new People("Suryateja", 34)
const user2 = new People("Charanteja", 21)

const user3 = new People("SuhaTeja", 21)

const admin = new Admin("omnics", 22, "Admin Bolthey")




user1.login().addScore().logout() // Method Chaining

let users = [user1, user2, user3]

console.log(users)

admin.deleteUser(user2)

console.log(users)



// Functions 


function User(username, email) {
    this.username = username;
    this.email = email;
}

User.prototype.login = function() {
    console.log(`${this.username} login`)
    return this;
}

User.prototype.logout = function() {
    console.log(`${this.username} logout`)
    return this;
}

function Admin1(username, email) {
    User.call(this, username, email)
}

Admin1.prototype = Object.create(User.prototype)
Admin1.prototype.deleteUserD = function() {

}

const u1 = new User("ram", "ram@omnics.in")
const u2 = new User("Krishana", "Krishana@gmail.com")

u1.login().logout()