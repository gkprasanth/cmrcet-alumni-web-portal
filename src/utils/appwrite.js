import { Client, Databases, Account } from 'appwrite';

const client = new Client();
client.setEndpoint('http://localhost/v1').setProject('6738dcd90009e30dfbac');

export const databases = new Databases(client);
export const account = new Account(client);

export default client;
