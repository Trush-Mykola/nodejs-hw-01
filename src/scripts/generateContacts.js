import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import createFakeContact from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    let contacts = JSON.parse(data);
    for (let i = 0; i < number; i += 1) {
      const newContact = createFakeContact();
      contacts.push(newContact);
    }
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.log(error);
  }
};

await generateContacts(5);
