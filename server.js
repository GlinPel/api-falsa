const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

class Usuario {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.firstName = faker.name.firstName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Empresa {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.adress = {
            streetName: faker.address.streetName(),
            cityName: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}
    
app.get("/api/users/new", (req, res) => {
    const user = new Usuario();
    res.json({ user });
});

app.get("/api/companies/new", (req, res) => {
    const company = new Empresa();
    res.json({ company });
});

app.get("/api/user/company", (req, res) => {
    const user = new Usuario();
    const company = new Empresa();
    res.json({ user, company });
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );