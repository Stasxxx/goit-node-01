const fs = require('fs/promises');
const { nanoid } = require('nanoid');
const path = require('path');

const contactsPath = path.join(__dirname,'./db/contacts.json');


const listContacts = async () => {
  const result = await fs.readFile(contactsPath);
  
  return JSON.parse(result);
}

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find(item => item.id === contactId)

  return result || null;
}

const removeContact = async (contactId) => {
  // ...твій код
}

const addContact = async ({name, email, phone}) => {
  const contacts = await listContacts();
  const newContact = {
    contactId: nanoid(),
    name,
    email,
    phone,
  }
  contacts.push(newContact)
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  
  return newContact;
}


module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
}