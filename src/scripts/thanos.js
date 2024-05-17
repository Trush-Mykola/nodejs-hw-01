import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const contacts = JSON.parse(data);
  const filteredContacts = contacts.filter((contact) => {
    const getRandom = () => Math.random();
    return getRandom() > 0.5;
  });
  await fs.writeFile(PATH_DB, JSON.stringify(filteredContacts, null, 2));
};

await thanos();
