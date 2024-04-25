/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Selector } from 'testcafe';

const baseUrl = 'http://localhost:5173';
const testEmail = 'denhad@kth.com';
const testPassword = 'password1234';

fixture`User Login Test`
  .page`${baseUrl}/auth/login`;

test('Login Form Test', async (t) => {
  const emailInput = Selector('#email');
  const passwordInput = Selector('#password');
  const loginButton = Selector('button').withText('Login');
  const pageBody = Selector('body');

  await t
    .typeText(emailInput, testEmail)
    .typeText(passwordInput, testPassword)
    .click(loginButton)
    .navigateTo(`${baseUrl}/dashboard`)
    .expect(pageBody.innerText)
    .contains(testEmail);
});
