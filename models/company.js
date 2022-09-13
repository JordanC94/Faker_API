const {faker}= require ("@faker-js/faker")

class Company{
  constructor(){
    this.id =faker.database.mongodbObjectId();
    this.name =faker.company.name();
    this.address = {
      street:faker.address.street(),
      city:faker.address.city(),
      state:faker.address.state(),
      zipCode:faker.address.zipCode(),
      country:faker.address.country()
    }
  }
}

module.exports = Company;