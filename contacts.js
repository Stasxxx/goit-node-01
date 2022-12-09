const fs = require('fs/promises');
// const { nanoid } = require('nanoid');
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

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}


module.exports = {
  listContacts,
  getContactById,
  // removeContact,
  // addContact,
}