'use strict';

const faker = require('faker');

const loadTestUser = module.exports = {};

loadTestUser.create = (userContext, events, done) => {
  userContext.vars.username = faker.internet.userName() + Math.random().toString();
  userContext.vars.email = faker.internet.email();
  userContext.vars.password = faker.internet.password() + Math.random.toString();
  userContext.vars.phoneNumber = Math.random.toString();

  userContext.vars.firstName = faker.name.firstName();
  userContext.vars.lastName = faker.name.lastName();
  userContext.vars.breed = faker.lorem.words(2);
  userContext.vars.age = Math.random.toString();
  userContext.vars.location = faker.lorem.words(2);

  return done();
};
