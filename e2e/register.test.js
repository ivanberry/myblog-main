import { Selector } from 'testcafe';

const randomstring = require('randomstring');
const TEST_URL = process.env.TEST_URL;

//fake user info
const username = randomstring.generate();
const email = `${username}@test.com`;
const password = username;
const currentDate = new Date();

fixture('/register').page(`${TEST_URL}/register`);

//should display the register form
test(`should display the register form`, async t => {
  await t
  .navigateTo(`${TEST_URL}/register`)
  .expect(Selector('H1').withText('Register').exists).ok()
  .expect(Selector('form').exists).ok()
});

//should allow a user to register
test(`should allow a user to register`, async t => {
  await t
  .navigateTo(`${TEST_URL}/register`)
  .typeText('input[name="username"]', username)
  .typeText('input[name="email"]', email)
  .typeText('input[name="password"]', password)
  .click(Selector('input[type="submit"]'))

  //assert user is redirected to '/'
  //assert '/' is displayed properly
  await t
  .expect(Selector('H1').withText('All Users').exists).ok()
  .expect(Selector('input[disabled]').exists).ok()
});

//should display the sign in form
test(`should display the sigin in from`, async t => {
  await t
  .navigateTo(`${TEST_URL}/login`)
  .expect(Selector('H1').withText('Login').exists).ok()
  .expect(Selector('form').exists).ok()
  .expect(Selector('input[disabled]').exists).ok()
  .expect(Selector('.validate-list > .error').exists).ok()
  .expect(Selector('.validate-list > .error').nth(0).withText(
    'Email must be greater than 10 characters.').exists).ok()













})

