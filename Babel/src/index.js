// import './dom';
import { styleBody, addTitle, contact } from './dom';
import users, { getPremUsers } from './data';


console.log(users, getPremUsers(users))
console.log('index.js file');

addTitle('hello, world from index.js');
styleBody();

console.log(contact);