function SetUsername(username){
    this.username = username
}
function createuser(username, email, password) {
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createuser("chai", "chai@gamil.com", "123")
console.log(chai);