class person {
    constructor(firstname, lastname, dob, email,mobile) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = dob;
        this.email = email;
        this.mobile= mobile;
    }

    getfullname() {
        return `Full name:${this.firstname} ${this.lastname}`;
    }

   

    getfulldetails() {
        return `Name: ${this.getfullname()}
        Date of Birth: ${this.dob}
        Email: ${this.email}
        Phone Number: ${this.mobile}`;
    }
}


const person1 = new person("Surya", "G", "02/07/1999", "gsurya124@gmail.com", 9677312922);
console.log(person1.getfullname());
console.log(person1.getfulldetails()); 


const person2 = new person("Monkey D", "Luffy", "26/10/1999", "gsurya124@gmail.com", 9677312922);
console.log(person2.getfullname());
console.log(person2.getfulldetails()); 