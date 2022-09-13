const {faker}= require ("@faker-js/faker")

class User{
  constructor(){
    this.password = faker.internet.password();
    this.email =faker.internet.email();
    this.id =faker.database.mongodbObjectId();
    this.lastName =faker.name.lastName();
    this.firstName = faker.name.firstName();
    this.phoneNumber = faker.phone.number();
  }
}

module.exports = User;