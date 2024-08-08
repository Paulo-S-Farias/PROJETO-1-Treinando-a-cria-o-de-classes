class User {
    constructor(fullname, email, password){
        this.constructor = fullname
        this.constructor = email
        this.constructor = password


    }

    login(email, password){
        if(this.email === email && this.password === password){
            console.log('${this.fullname}: login sucess!')
        } else {
            console.log('${this.fullname}: Login failed!')
        }
    }

}

const john = new User('John', 'john@gmail.com', '12345678')

john.login('john@gmail.com', '12345678')
